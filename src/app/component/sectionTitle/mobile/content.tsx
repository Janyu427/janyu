

interface Props {
    title: string;
    enTitle: string;
};

const App = (props: Props) => {
    return (
        <div className="relative font-[500] pt-[6px] pl-[17px] mb-[30px] before:content-[''] before:absolute before:w-[42px] before:h-[42px] before:top-0 before:left-0 before:rounded-[100%] before:bg-[#F5C76F]">
            <p className="relative text-[32px] text-[#121212]">{props.title}</p>
            <p className="relative text-[20px] text-[#121212] leading-1">{props.enTitle}</p>
        </div>
    )
};

export default App;