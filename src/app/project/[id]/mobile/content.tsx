
import Image from "next/image";

import Tag from "@/src/app/component/tag";

import codeIcon from "@/public/image/project/code.svg";
import linkIcon from "@/public/image/project/link.svg";

interface Props {
    meta: any
};

const App = (props: Props) => {
    return (
        <>
            {
                (() => {
                    if (props.meta) {
                        return (
                            <div className="relative py-[60px]">
                                <div className="w-[90%] max-w-[1200px] mx-auto">
                                    <div className="flex flex-col">
                                        <div className="relative pb-[75%] w-[100%] mb-[30px]">
                                            <Image className="image absolute top-0 left-0 w-[100%] h-[100%] rounded-[5px]" src={props.meta.imgSrc} fill alt="" />
                                        </div>
                                        <div className="w-[100%] px-[15px] pb-[30px] border-b border-dashed border-[#cfcfcf]">
                                            <div className="pb-[10px]">
                                                <h1 className="text-[32px]">{props.meta.title}</h1>
                                            </div>
                                            <div className="flex flex-wrap items-center pb-[20px]">
                                                {
                                                    (() => {
                                                        if (props.meta.tag && props.meta.tag.length) {
                                                            return (
                                                                props.meta.tag.map((item: any, index: number) => {
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
                                                    <div className="pt-[30px] px-[15px]">
                                                        <div className="text-[24px] text-500 text-[#121212] mb-[15px]">技術挑戰</div>
                                                        <ul className="pl-[30px]">
                                                            {
                                                                (() => {
                                                                    return (
                                                                        props.meta.challenge.map((item: any, index: number) => {
                                                                            return (
                                                                                <li className="listItem text-[#555] mb-[10px] list-disc" key={index}>{item}</li>
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
                                                    <div className="pt-[30px] px-[15px]">
                                                        <div className="text-[24px] text-500 text-[#121212] mb-[15px]">解決方案</div>
                                                        <ul className="pl-[30px]">
                                                            {
                                                                (() => {
                                                                    return (
                                                                        props.meta.solution.map((item: any, index: number) => {
                                                                            return (
                                                                                <li className="text-[#555] mb-[10px] list-disc" key={index}>{item}</li>
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