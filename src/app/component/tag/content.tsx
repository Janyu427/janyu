
interface Props {
    title: string;
};

const App = (props: Props) => {
    return (
        <div className="text-[12px] text-[#555] whitespace-nowrap px-[10px] py-[5px] mr-[10px] mb-[10px] bg-[#ECE7DE] rounded-[5px]">{props.title}</div>
    );
};

export default App;