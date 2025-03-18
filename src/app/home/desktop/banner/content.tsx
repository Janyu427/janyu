
import Image from "next/image";

import banner from "@/public/image/banner.png";

const App = () => {
    return (
        <div className="w-[90%] max-w-[1200px] mx-auto py-[60px]">
            <div className="relative flex justify-between items-center">
                <div className="mr-[30px]">
                    <div className="pb-[15px]">
                        <h1 className="text-[48px] text-[#121212] font-[500]">我是 Janyu 👋🏻</h1>
                    </div>
                    <div className="font-[500]">
                        <p className="text-[24px] text-[#555]">
                            擁有4年的網頁設計經驗，<br />
                            從同時學習設計和程式，到決心專注前端開發。
                        </p>
                    </div>
                </div>
                <div className="relative w-[40%] before:content-[''] before:absolute before:left-[50%] before:bottom-[-26%] before:w-[73%] before:pb-[73%] before:rounded-[100%] before:translate-x-[-50%] before:bannerImageBg">
                    <Image className="relative w-[100%]" src={banner} width="480" height="372" alt="Janyu" />
                </div>
            </div>
        </div>
    );
};

export default App;