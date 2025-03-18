
"use client"

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import Link from "next/link";
import Image from "next/image";

import logo from "@/public/image/logo.svg";
import email from "@/public/image/email.svg";
import linkedin from "@/public/image/linkedin.svg";
import github from "@/public/image/github.svg";
import close from "@/public/image/close.svg";

const App = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const closeMenu = () => {
        dispatch({
            type: "header/mobileMenu",
            value: false
        });
    };

    const handleScroll = () => {
        dispatch({
            type: "scrollToView",
            value: true
        });

        closeMenu();
    };

    const clickLink = () => {
        if (router) {
            closeMenu();
        }
    };

    return (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#fff] z-10 linearBg">
            <div className="relative pt-[100px] px-[5%] pb-[5%] w-[90%] mx-auto">
                <Link className="block mb-[60px]" href="/" title="Janyu" target="_self">
                    <Image src={logo} alt="Janyu" width="140" height="40" />
                </Link>

                <div className="px-[5px] py-[15px] mb-[30px] border-b border-[#CFCFCF]">
                    <Link className="block text-[16px] text-[#121212] py-[15px]" href="/" title="作品案例" target="_self" onClick={() => clickLink()}>作品案例</Link>
                    <Link className="block text-[16px] text-[#121212] py-[15px]" href="/about" title="關於我" target="_self" onClick={() => clickLink()}>關於我</Link>
                    <div className="py-[15px]" onClick={() => handleScroll()}>與我聯繫</div>
                </div>
                <div className="flex items-center px-[5px]">
                    <a className="block items-center mr-[25px]" href="" title="Github" target="_blank">
                        <Image className="" src={github} height={24} alt="Github" />
                    </a>
                    <a className="block items-center mr-[25px]" href="mailto:janyu427130@gmail.com" title="Email" target="_blank">
                        <Image className="" src={email} height={24} alt="Email" />
                    </a>
                    <a className="block items-center" href="https://www.linkedin.com/in/chen-yu-wu-design" title="Linkedin" target="_blank">
                        <Image className="" src={linkedin} height={24} alt="Linkedin" />
                    </a>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-[75px] h-[75px] pl-[35px] pr-[20px] pt-[20px] pb-[35px] rounded-bl-[100%] bg-[#F5C76F] cursor-pointer" onClick={() => closeMenu()}>
                <Image src={close} alt="關閉" width="18" height="18" />
            </div>
        </div>
    )
};

export default App;