
import Link from "next/link";
import Image from "next/image";

import SectionTitle from "@/src/app/component/sectionTitle/mobile";
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
        <div className="design_case relative pt-[30px] pb-[60px] overflow-hidden linearCircleBg">
            <div className="container relative w-[90%] mx-auto">
                <SectionTitle title="作品案例" enTitle="Project" />

                <div className="case_box pt-[30px]">
                    {
                        (() => {
                            if (projectListData.result && projectListData.result.length) {
                                return (
                                    projectListData.result.map((item: projectItem, index: number) => {
                                        return (
                                            <div className="item w-[100%] mb-[30px]" key={index}>
                                                <Link className="link" href={`/project/${item.itemNumber}`}>
                                                    <div className="image_box relative pb-[75%] mb-[15px] rounded-[5px] ">
                                                        <Image className="image" src={item.imgSrc} fill alt={item.title} />
                                                    </div>
                                                    <div className="text_box pl-[5px]">
                                                        <h2 className="case_title text-[#121212] pb-[10px]">{item.title}</h2>
                                                        <div className="tag_box flex items-center" >
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