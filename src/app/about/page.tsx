
import Desktop from "./desktop";
import Mobile from "./mobile";

import { headers } from "next/headers";

const App = async () => {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const isMobile = /mobile/i.test(userAgent)

    return (
        <>
            {
                (() => {
                    if (isMobile) {
                        return (
                            <Mobile />
                        );
                    }
                    else {
                        return (
                            <Desktop />
                        );
                    }
                })()
            }
        </>
    );
};

export default App;