
import Content from "./content";

interface Props {
    meta: any
};

const App = (props: Props) => {
    return (
        <Content meta={props.meta} />
    );
};

export default App;