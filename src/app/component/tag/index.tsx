
import Content from "./content";

interface Props {
    title: string;
};

const App = (props: Props) => {
    return (
        <Content title={props.title} />
    );
};

export default App;