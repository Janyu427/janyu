
import Header from "@/src/app/component/header/mobile"
import Banner from "./banner";
import ProjectSection from "./projectSection";
import Footer from "@/src/app/component/footer/mobile";

const App = async () => {
    return (
        <>
            <Header />
            <Banner />
            <ProjectSection />
            <Footer />
        </>
    );
};

export default App;