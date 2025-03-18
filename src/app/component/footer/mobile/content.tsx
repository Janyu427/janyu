
"use client"

import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";

import SectionTitle from "@/src/app/component/sectionTitle/mobile";

import envelope from "@/public/image/envelope.svg";
import email from "@/public/image/email.svg";
import linkedin from "@/public/image/linkedin.svg";
import github from "@/public/image/github.svg";

const App = () => {
    const dispatch = useDispatch();

    const footerRef = useRef<HTMLDivElement>(null);

    const scrollToViewSelector = useSelector((state: any) => {
        return state.scrollToView
    });

    const handleScroll = () => {
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (!scrollToViewSelector) {
            return;
        }

        handleScroll();

        dispatch({
            type: "scrollToView",
            value: false
        });
    }, [scrollToViewSelector, dispatch]);

    return (
        <footer ref={footerRef}>
            <div className="bg-[#F6F3EC] py-[60px]">
                <div className="relative flex flex-col justify-between items-start w-[90%] mx-auto">
                    <div className="w-[100%] max-w-[160px] mb-[30px]">
                        <Image className="w-[100%]" src={envelope} width="320" height="296" alt="與我聯繫" />
                    </div>
                    <div className="w-[100%]">
                        <SectionTitle title="與我聯繫" enTitle="Contact" />

                        <p className="mb-[30px]">無論是在工作或是生活，每一次的討論及分享總是讓我感到快樂，彼此給予的反饋也能夠創造出不一樣的思維。如果有任何問題及想法，歡迎與我聯繫 ！期待與你的每一次交流。</p>
                        <a className="block w-fit text-[14px] bg-[#F5C76F] rounded-[5px] px-[34px] py-[14px]" href="mailto:janyu427130@gmail.com" target="_blank">與我聯繫</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center w-[90%] max-w-[1200px] mx-auto py-[30px]">
                <p className="text-[12px]">© Janyu <span id="thisYear"></span> All Rights Reserved</p>
                <div className="flex items-center">
                    <a className="mr-[25px]" href="https://github.com/Janyu427" title="Github" target="_blank">
                        <Image className="" src={github} height={24} alt="Github" />
                    </a>
                    <a className="mr-[25px]" href="mailto:janyu427130@gmail.com" title="Email" target="_blank">
                        <Image className="" src={email} height={24} alt="Email" />
                    </a>
                    <a className="" href="https://www.linkedin.com/in/chen-yu-wu-design" title="Linkedin" target="_blank">
                        <Image className="" src={linkedin} height={24} alt="Linkedin" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default App;