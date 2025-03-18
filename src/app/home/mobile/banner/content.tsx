
import Image from "next/image";

import banner from "@/public/image/banner.png";

const App = async () => {
    return (
        <div className="w-[90%] mx-auto py-[60px]">
            <div className="relative flex flex-col justify-between items-center">
                <div className="relative w-[100%] max-w-[400px] mx-auto mb-[60px] before:content-[''] before:absolute before:left-[50%] before:bottom-[-26%] before:w-[73%] before:pb-[73%] before:rounded-[100%] before:translate-x-[-50%] before:bannerImageBg">
                    <Image className="relative w-[100%]" src={banner} width="480" height="372" alt="Janyu" />
                </div>
                <div>
                    <div className="pb-[15px] text-center">
                        <h1 className="text-[32px] text-[#121212] font-[500]">我是 Janyu 👋🏻</h1>
                    </div>
                    <div className="font-[500]">
                        <p className="text-[20px] text-[#555]">
                            擁有4年的網頁設計經驗，<br />
                            從同時學習設計和程式，到決心專注前端開發。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;