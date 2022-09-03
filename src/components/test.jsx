const Appi = (props) => {
    const [counter, setCounter] = useState(0);
    useEffect(
    () => {
        console.log('Hello');
        setCounter(1);

    },
    [props.visible]
    );

    return <div>{counter}</div>;
}