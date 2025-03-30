
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
                            專注於前端開發，擁有結合設計與程式的背景，致力於構建高效、可擴展的 Web 應用。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;