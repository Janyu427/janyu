
import Desktop from "./desktop";
import Mobile from "./mobile";

import { headers } from "next/headers";
import { notFound } from "next/navigation";

import projectDetailsData from "@/assets/json/projectDetails.json";

type Params = Promise<{ id: string }>;

const App = async ({ params }: { params: Params }) => {
    const headersList = await headers();

    const userAgent = headersList.get("user-agent") || "";
    const isMobile = /mobile/i.test(userAgent);

    const { id } = await params;

    let meta = null;

    for (let i = 0; i < projectDetailsData.result.length; i++) {
        if (projectDetailsData.result[i].itemNumber == id) {
            meta = projectDetailsData.result[i];

            break;
        }
    };

    if (!meta) {
        return notFound();
    }

    return (
        <>
            {
                (() => {
                    if (isMobile) {
                        return (
                            <Mobile meta={meta} />
                        );
                    }
                    else {
                        return (
                            <Desktop meta={meta} />
                        );
                    }
                })()
            }
        </>
    );
};

export default App;