
import Image from "next/image";
import clsx from "clsx";

import janyu from "@/public/image/about/janyu.jpg";

import aboutData from "@/assets/json/about.json";

const App = () => {
    return (
        <>
            <div className="main_section pt-[60px] pb-[30px]">
                <div className="container relative w-[90%] max-w-[1200px] mx-auto flex justify-between items-center">
                    <div className="text_box w-[50%]">
                        <div className="title text-[32px] text-[#121212] font-[500] mb-[30px]">{aboutData.about.intro.title}</div>
                        <p className="intro text-[#555]">{aboutData.about.intro.text}</p>
                    </div>
                    <div className="relative w-[45%] pb-[34%]">
                        <Image className="w-[100%] rounded-[5px] object-cover" src={janyu} fill alt="Janyu" />
                    </div>
                </div>
            </div>
            <div className="experience py-[90px]">
                <div className="container w-[90%] max-w-[1200px] mx-auto">
                    <h2 className="section_title text-[28px] text-500 text-[#121212] mb-[30px] pb-[30px]">工作經驗</h2>
                    <div className="list_box">
                        {
                            (() => {
                                if (aboutData.about.experience && aboutData.about.experience.length) {
                                    return (
                                        aboutData.about.experience.map((item: any, index: number) => {
                                            return (
                                                <div className={clsx(
                                                    "list relative pl-[80px] before:content-[''] before:absolute before:top-[10px] before:left-[20px] before:w-[10px] before:h-[10px] before:rounded-[20px] before:bg-[#F5C76F] ",
                                                    {
                                                        "pb-0": index == aboutData.about.experience.length - 1,
                                                        "pb-[30px] after:content-[''] after:absolute after:top-[10px] after:left-[25px] after:w-[1px] after:h-[100%] after:bg-[#F5C76F]": index != aboutData.about.experience.length - 1
                                                    }
                                                )} key={index}>
                                                    <h3 className="subtitle text-[20px] text-[#121212] font-[500] mb-[15px]">{item.title}</h3>
                                                    <div className="company flex font-[500] mb-[5px]">
                                                        <p className="name relative text-[#121212] mr-[15px] pr-[15px] before:content-[''] before:absolute before:top-[50%] before:right-0 before:w-[1px] before:h-[15px] before:translate-y-[-50%] before:bg-[#121212]">{item.company}</p>
                                                        <p className="time text-[#121212]">{item.time}</p>
                                                    </div>
                                                    <ul className="listItem_box pl-[30px]">
                                                        {
                                                            (() => {
                                                                if (item.list && item.list.length) {
                                                                    return (
                                                                        item.list.map((listItem: any, index: number) => {
                                                                            return (
                                                                                <li className="listItem text-[#555] list-disc" key={index}>{listItem}</li>
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
            <div className="skill section_big bg-[#F6F3EC] pt-[60px] pb-[90px]">
                <div className="container relative w-[90%] max-w-[1200px] mx-auto">
                    <h2 className="section_title text-[28px] text-500 text-[#121212] mb-[30px] pb-[30px">我的專長</h2>
                    <div className="list_box flex justify-between pt-[80px] pl-[50px]">
                        {
                            (() => {
                                if (aboutData.about.skill && aboutData.about.skill.length) {
                                    return (
                                        aboutData.about.skill.map((item: any, index: number) => {
                                            return (
                                                <div className={clsx(
                                                    "list relative w-[calc(50%-60px)] pt-[45px] px-[45px] pb-[30px] rounded-[5px] bg-[#fff]",
                                                    {
                                                        "mr-0": index == aboutData.about.skill.length - 1,
                                                        "mr-[90px]": index != aboutData.about.skill.length - 1
                                                    }
                                                )} key={index}>
                                                    <div className="image_box absolute flex justify-center items-center top-0 left-0 w-[100px] h-[100px] bg-[#F5C76F] rounded-[100%] translate-[-50%]">
                                                        <Image className="image" src={item.icon} width="60" height="60" alt={item.title} />
                                                    </div>
                                                    <div className="text_box">
                                                        <h3 className="subtitle text-[20px] text-[#121212] font-[500] mb-[15px] pb-[5px]">{item.title}</h3>
                                                        <ul className="listItem_box pl-[30px]">
                                                            {
                                                                (() => {
                                                                    if (item.list && item.list.length) {
                                                                        return (
                                                                            item.list.map((listItem: any, index: number) => {
                                                                                return (
                                                                                    <li className="listItem text-[#555] list-disc" key={index}>{listItem}</li>
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
            <div className="software pt-[60px] pb-[90px]">
                <div className="container w-[90%] max-w-[1200px] mx-auto">
                    <h2 className="section_title text-[28px] text-500 text-[#121212] mb-[30px] pb-[30px">軟體工具</h2>
                    <div className="item_box">
                        {
                            (() => {
                                if (aboutData.about.tool && aboutData.about.tool.length) {
                                    return (
                                        aboutData.about.tool.map((item: any, index: number) => {
                                            return (
                                                <div className="item relative pb-[30px]" key={index}>
                                                    <h3 className="subtitle text-[20px] text-[#121212] font-[500] mb-[15px]">{item.key}</h3>
                                                    <div className="list_box flex flex-wrap">
                                                        {
                                                            (() => {
                                                                if (item.list && item.list.length) {
                                                                    return (
                                                                        item.list.map((_item: any, _index: number) => {
                                                                            return (
                                                                                <div className="list mx-[13px] mb-[30px]" key={_index}>
                                                                                    <div className="icon_box flex justify-center items-center mx-auto w-[96px] h-[96px] rounded-[5px] bg-[#f2f2f2]">
                                                                                        <Image className="icon max-h-[48px]" src={_item.imgSrc} width={96} height={96} alt={_item.title} />
                                                                                    </div>
                                                                                    <p className="text text-[12px] text-[#121212] text-center font-[500] pt-[10px]">{_item.title}</p>
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