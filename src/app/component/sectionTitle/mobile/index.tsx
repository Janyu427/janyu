
import Content from "./content";

interface Props {
    title: string;
    enTitle: string;
};

const App = (props: Props) => {
    return (
        <Content title={props.title} enTitle={props.enTitle} />
    );
};

export default App;