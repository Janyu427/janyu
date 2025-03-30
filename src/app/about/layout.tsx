
import HeaderDesktop from "@/src/app/component/header/desktop";
import HeaderMobile from "@/src/app/component/header/mobile";
import FooterDesktop from "@/src/app/component/footer/desktop";
import FooterMobile from "@/src/app/component/footer/mobile";

import { headers } from "next/headers";

const App = async ({ children }: { children: React.ReactNode }) => {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const isMobile = /mobile/i.test(userAgent);

    return (
        <>
            {
                (() => {
                    if (isMobile) {
                        return (
                            <>
                                <HeaderMobile />
                                {children}
                                <FooterMobile />
                            </>
                        );
                    }
                    else {
                        return (
                            <>
                                <HeaderDesktop />
                                {children}
                                <FooterDesktop />
                            </>
                        );
                    }
                })()
            }
        </>
    );
};

export default App;