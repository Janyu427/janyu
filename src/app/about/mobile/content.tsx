
import Image from "next/image";
import clsx from "clsx";

import janyu from "@/public/image/about/janyu.jpg";

import aboutData from "@/assets/json/about.json";

interface experienceItem {
    key: string,
    title: string,
    company: string,
    time: string,
    list: string[]
};

interface skillItem {
    key: string,
    title: string,
    icon: string,
    list: string[]
};

interface toolItem {
    key: string,
    list: toolListItem[]
};

interface toolListItem {
    title: string,
    imgSrc: string
};

const App = () => {
    return (
        <>
            <div className="pt-[60px] pb-[30px]">
                <div className="relative w-[90%] max-w-[1200px] mx-auto flex flex-col justify-between items-center">
                    <div className="relative w-[100%] pb-[75%] mb-[30px]">
                        <Image className="w-[100%] rounded-[5px] object-cover" src={janyu} fill alt="Janyu" />
                    </div>
                    <div className="w-[100%]">
                        <div className="text-[28px] text-[#121212] font-[500] mb-[30px]">{aboutData.about.intro.title}</div>
                        <p className="text-[#555]">{aboutData.about.intro.text}</p>
                    </div>
                </div>
            </div>
            <div className="py-[90px]">
                <div className="w-[90%] max-w-[1200px] mx-auto">
                    <h2 className="text-[28px] text-500 text-[#121212] mb-[30px]">工作經驗</h2>
                    <div>
                        {
                            (() => {
                                if (aboutData.about.experience && aboutData.about.experience.length) {
                                    return (
                                        aboutData.about.experience.map((item: experienceItem, index: number) => {
                                            return (
                                                <div className={clsx(
                                                    "relative pl-[30px] before:content-[''] before:absolute before:top-[10px] before:left-[5px] before:w-[10px] before:h-[10px] before:rounded-[20px] before:bg-[#F5C76F] ",
                                                    {
                                                        "pb-0": index == aboutData.about.experience.length - 1,
                                                        "pb-[30px] after:content-[''] after:absolute after:top-[10px] after:left-[10px] after:w-[1px] after:h-[100%] after:bg-[#F5C76F]": index != aboutData.about.experience.length - 1
                                                    }
                                                )} key={index}>
                                                    <h3 className="text-[20px] text-[#121212] font-[500] mb-[15px]">{item.title}</h3>
                                                    <div className="flex flex-col font-[500] mb-[5px]">
                                                        <p className="relative text-[#121212] mr-[15px] pr-[15px]">{item.company}</p>
                                                        <p className="text-[#121212]">{item.time}</p>
                                                    </div>
                                                    <ul className="pl-[30px]">
                                                        {
                                                            (() => {
                                                                if (item.list && item.list.length) {
                                                                    return (
                                                                        item.list.map((listItem: string, index: number) => {
                                                                            return (
                                                                                <li className="text-[#555] list-disc" key={index}>{listItem}</li>
                                                                            );
                                                                        })
                                                                    );
                                                                }
                                                            })()
                                                        }
                                                    </ul>
                                                </div>
                                            );
                                        })
                                    );
                                }
                            })()
                        }
                    </div>
                </div>
            </div>
            <div className="section_big bg-[#F6F3EC] pt-[60px] pb-[90px]">
                <div className="relative w-[90%] max-w-[1200px] mx-auto">
                    <h2 className="text-[28px] text-500 text-[#121212] mb-[30px]">我的專長</h2>
                    <div className="flex flex-col justify-between pt-[45px] px-[50px]">
                        {
                            (() => {
                                if (aboutData.about.skill && aboutData.about.skill.length) {
                                    return (
                                        aboutData.about.skill.map((item: skillItem, index: number) => {
                                            return (
                                                <div className={clsx(
                                                    "relative w-[100%] pt-[45px] px-[30px] pb-[30px] rounded-[5px] bg-[#fff]",
                                                    {
                                                        "mb-0 mr-0": index == aboutData.about.skill.length - 1,
                                                        "mb-[80px] mr-[90px]": index != aboutData.about.skill.length - 1
                                                    }
                                                )} key={index}>
                                                    <div className="absolute flex justify-center items-center top-0 left-0 w-[80px] h-[80px] bg-[#F5C76F] rounded-[100%] translate-[-50%]">
                                                        <Image src={item.icon} width="40" height="40" alt={item.title} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-[20px] text-[#121212] font-[500] mb-[15px] pb-[5px]">{item.title}</h3>
                                                        <ul className="pl-[30px]">
                                                            {
                                                                (() => {
                                                                    if (item.list && item.list.length) {
                                                                        return (
                                                                            item.list.map((listItem: string, index: number) => {
                                                                                return (
                                                                                    <li className="text-[#555] list-disc" key={index}>{listItem}</li>
                                                                                );
                                                                            })
                                                                        );
                                                                    }
                                                                })()
                                                            }
                                                        </ul>
                                                    </div>

                                                </div>
                                            );
                                        })
                                    );
                                }
                            })()
                        }
                    </div>
                </div>
            </div>
            <div className="pt-[60px] pb-[90px]">
                <div className="w-[90%] max-w-[1200px] mx-auto">
                    <h2 className="text-[28px] text-500 text-[#121212] mb-[30px]">軟體工具</h2>
                    <div>
                        {
                            (() => {
                                if (aboutData.about.tool && aboutData.about.tool.length) {
                                    return (
                                        aboutData.about.tool.map((item: toolItem, index: number) => {
                                            return (
                                                <div className="relative pb-[30px]" key={index}>
                                                    <h3 className="text-[18px] mx-[15px] mb-[15px] text-[#121212] font-[500] mb-[15px]">{item.key}</h3>
                                                    <div className="flex flex-wrap">
                                                        {
                                                            (() => {
                                                                if (item.list && item.list.length) {
                                                                    return (
                                                                        item.list.map((_item: toolListItem, _index: number) => {
                                                                            return (
                                                                                <div className="w-[calc(33.333333%-26px)] mx-[13px] mb-[30px]" key={_index}>
                                                                                    <div className="flex justify-center items-center mx-auto w-[96px] h-[96px] rounded-[5px] bg-[#f2f2f2]">
                                                                                        <Image className="max-h-[48px]" src={_item.imgSrc} width={96} height={96} alt={_item.title} />
                                                                                    </div>
                                                                                    <p className="text-[12px] text-[#121212] text-center font-[500] pt-[10px]">{_item.title}</p>
                                                                                </div>
                                                                            );
                                                                        })
                                                                    );
                                                                }
                                                            })()
                                                        }
                                                    </div>
                                                </div>
                                            );
                                        })
                                    );
                                }
                            })()
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;