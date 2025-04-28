
"use client"

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Link from "next/link";
import Image from "next/image";

import logo from "@/public/image/logo.svg";

const App = () => {
    const dispatch = useDispatch();

    const [bgColor, setBgColor] = useState<string>("");

    const handleScroll = () => {
        dispatch({
            type: "scrollToView",
            value: true
        });
    };

    useEffect(() => {
        const exe = () => {
            if (window.scrollY > 0) {
                setBgColor("bgColor");
            }
            else {
                setBgColor("");
            }
        };

        exe();

        window.addEventListener("scroll", exe);

        return () => {
            window.removeEventListener("scroll", exe);
        };
    }, []);

    return (
        <>
            <div className="invisible">
                <div className="h-[90px]"></div>
            </div>

            <header className={`fixed w-[100%] top-0 left-0 z-20 ${bgColor}`}>
                <div className="flex justify-between items-center w-[90%] h-[90px] max-w-[1200px] mx-auto">
                    <Link href="/" title="Janyu" target="_self">
                        <Image className="h-[100%]" src={logo} alt="Janyu" width="104" height="54" />
                    </Link>
                    <div className="flex items-center">
                        <Link href="/" title="作品案例" target="_self">作品案例</Link>
                        <Link className="ml-[30px]" href="/about" title="關於我">關於我</Link>
                        <div className="ml-[30px] cursor-pointer" onClick={() => handleScroll()}>與我聯繫</div>
                    </div>
                </div>
            </header>

            <style jsx scoped>
                {`
                    .bgColor{
                        background-color: #F6F3EC;
                    }
                `}
            </style>
        </>

    );
};

export default App;