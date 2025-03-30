
import Content from "./content";

export interface meta {
    key: string,
    title: string,
    itemNumber: string,
    type: string,
    imgSrc: string,
    intro: string,
    tech: string[],
    challenge: string[],
    solution: string[],
    codeSrc: string,
    link: string,
    tag: string[]
};

interface Props {
    meta: meta
};

const App = (props: Props) => {
    return (
        <Content meta={props.meta} />
    );
};

export default App;