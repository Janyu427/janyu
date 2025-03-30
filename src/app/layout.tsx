
import type { Viewport } from "next";
import type { Metadata } from "next";

import NextTopLoader from "nextjs-toploader";

import ProviderSection from "@/assets/script/provider";

import "@/assets/styles/globals/style.scss";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	title: "Janyu",
	description: "前端工程師 | 擅長 React、Vue，專注於打造高效能且具良好體驗的 Web 應用",
};

const App = async ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>
				<ProviderSection>
					{children}
					<NextTopLoader color="#BEAC8C" showSpinner={false} />
				</ProviderSection>
			</body>
		</html>
	)
};

export default App;
