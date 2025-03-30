
import type { meta } from "./index";

import Image from "next/image";

import Tag from "@/src/app/component/tag";

import codeIcon from "@/public/image/project/code.svg";
import linkIcon from "@/public/image/project/link.svg";

interface Props {
    meta: meta
};

const App = (props: Props) => {
    return (
        <>
            {
                (() => {
                    if (props.meta) {
                        return (
                            <div className="relative py-[60px]">
                                <div className="w-[90%] max-w-[900px] mx-auto">
                                    <div className="flex pb-[30px] px-[15px] border-b border-dashed border-[#cfcfcf]">
                                        <div className="relative pb-[30%] w-[40%]">
                                            <Image className="absolute top-0 left-0 w-[100%] h-[100%] rounded-[5px] object-contain object-top" src={props.meta.imgSrc} fill alt="" />
                                        </div>
                                        <div className="flex-1 px-[30px]">
                                            <div className="mx-auto pt-[30px] pb-[10px]">
                                                <h1 className="text-[#121212] text-[36px]">{props.meta.title}</h1>
                                            </div>
                                            <div className="flex flex-wrap items-center pb-[20px]">
                                                {
                                                    (() => {
                                                        if (props.meta.tag && props.meta.tag.length) {
                                                            return (
                                                                props.meta.tag.map((item: string, index: number) => {
                                                                    return (
                                                                        <Tag title={item} key={index} />
                                                                    );
                                                                })
                                                            );
                                                        }
                                                    })()
                                                }

                                            </div>
                                            <p className="text-[#555] ml-[5px] pb-[10px]">{props.meta.intro}</p>
                                            {
                                                (() => {
                                                    if (props.meta.codeSrc) {
                                                        return (
                                                            <div className="flex ml-[5px] pb-[5px]">
                                                                <Image className="mr-[10px]" src={codeIcon} width={20} height={16} alt="code" />
                                                                <a className="text-[#555]" href={props.meta.codeSrc} target="_blank" rel="noreferrer noopener">{props.meta.codeSrc}</a>
                                                            </div>
                                                        )
                                                    }
                                                })()
                                            }

                                            {
                                                (() => {
                                                    if (props.meta.link) {
                                                        return (
                                                            <div className="flex ml-[5px] pb-[5px]">
                                                                <Image className="mr-[10px]" src={linkIcon} width={20} height={16} alt="link" />
                                                                <a className="text-[#555]" href={props.meta.link} target="_blank" rel="noreferrer noopener">{props.meta.link}</a>
                                                            </div>
                                                        )
                                                    }
                                                })()
                                            }
                                        </div>
                                    </div>

                                    {
                                        (() => {
                                            if (props.meta.challenge && props.meta.challenge.length) {
                                                return (
                                                    <div className="pt-[60px] px-[15px]">
                                                        <div className="text-[28px] text-500 text-[#121212] mb-[30px]">技術挑戰</div>
                                                        <ul className="pl-[30px]">
                                                            {
                                                                (() => {
                                                                    return (
                                                                        props.meta.challenge.map((item: string, index: number) => {
                                                                            return (
                                                                                <li className="text-[#555] list-disc" key={index}>{item}</li>
                                                                            );
                                                                        })
                                                                    )

                                                                })()
                                                            }
                                                        </ul>
                                                    </div>

                                                )
                                            }
                                        })()
                                    }

                                    {
                                        (() => {
                                            if (props.meta.solution && props.meta.solution.length) {
                                                return (
                                                    <div className="pt-[60px] px-[15px]">
                                                        <div className="text-[28px] text-500 text-[#121212] mb-[30px]">解決方案</div>
                                                        <ul className="pl-[30px]">
                                                            {
                                                                (() => {
                                                                    return (
                                                                        props.meta.solution.map((item: string, index: number) => {
                                                                            return (
                                                                                <li className="text-[#555] list-disc" key={index}>{item}</li>
                                                                            );
                                                                        })
                                                                    )

                                                                })()
                                                            }
                                                        </ul>
                                                    </div>

                                                )
                                            }
                                        })()
                                    }
                                </div>
                            </div>
                        );
                    }
                })()
            }
        </>
    );
};

export default App;