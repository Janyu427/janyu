
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
                            專注於前端開發，擁有結合設計與程式的背景，<br />
                            致力於構建高效、可擴展的 Web 應用。
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