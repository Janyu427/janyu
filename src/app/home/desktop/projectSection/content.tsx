
import Link from "next/link";
import Image from "next/image";

import SectionTitle from "@/src/app/component/sectionTitle/desktop";
import Tag from "@/src/app/component/tag";

import projectListData from "@/assets/json/projectList.json";

interface projectItem {
    key: string,
    title: string,
    itemNumber: string,
    type: string,
    imgSrc: string,
    link: string,
    tag: string[]
};

const App = () => {
    return (
        <div className="relative pt-[30px] pb-[60px] overflow-hidden linearCircleBg">
            <div className="relative w-[90%] max-w-[1200px] mx-auto z-10">
                <SectionTitle title="作品案例" enTitle="Project" />

                <div className="flex flex-wrap justify-between pt-[30px]">
                    {
                        (() => {
                            if (projectListData.result && projectListData.result.length) {
                                return (
                                    projectListData.result.map((item: projectItem, index: number) => {
                                        return (
                                            <div className="w-[calc(50%-15px)] mb-[50px]" key={index}>
                                                <Link href={`/project/${item.itemNumber}`}>
                                                    <div className="relative pb-[75%] mb-[15px] rounded-[5px] ">
                                                        <Image src={item.imgSrc} fill alt={item.title} />
                                                    </div>
                                                    <div className="pl-[5px]">
                                                        <h2 className="text-[#121212] pb-[10px]">{item.title}</h2>
                                                        <div className="flex flex-wrap items-center" >
                                                            {
                                                                (() => {
                                                                    if (item.tag && item.tag.length) {
                                                                        return (
                                                                            item.tag.map((_item: string, _index: number) => {
                                                                                return (
                                                                                    <Tag title={_item} key={_index} />
                                                                                )
                                                                            })
                                                                        );
                                                                    }
                                                                })()
                                                            }
                                                        </div>
                                                    </div>
                                                </Link>
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
    )
};

export default App;