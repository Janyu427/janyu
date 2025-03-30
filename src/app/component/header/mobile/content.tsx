
"use client"

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import Image from "next/image";

import MobileNav from "./mobileNav";

import logo from "@/public/image/logo.svg";
import burger from "@/public/image/burger.svg";

const App = () => {
    const dispatch = useDispatch();

    // const [openMenu, setOpenMenu] = useState(false);
    const [bgColor, setBgColor] = useState<string>("");

    const mobileMenuReducer = useSelector((
        state: {
            header: {
                mobileMenu: boolean
            }
        }) => {
        return state.header.mobileMenu;
    });

    const openMenu = () => {
        dispatch({
            type: "header/mobileMenu",
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

            <header className={`fixed w-[100%] top-0 left-0 z-10 ${bgColor}`}>
                <div className="flex justify-between items-center w-[90%] h-[90px] mx-auto">
                    <Link href="/" title="Janyu" target="_self">
                        <Image className="h-[100%]" src={logo} alt="Janyu" width="104" height="54" />
                    </Link>

                    <div className="cursor-pointer" onClick={() => openMenu()}>
                        <Image src={burger} alt="選單" width="24" height="18" />
                    </div>
                </div>
            </header>

            {
                (() => {
                    if (mobileMenuReducer) {
                        return <MobileNav />
                    }
                })()
            }

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