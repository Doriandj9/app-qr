
const Color = ({styles, setStyles }) => {
    const handelClick =  (e) => {
        const color = e.target.dataset.color;
        setStyles({...styles,color});
    }
    return(
        <ul>
            <li>
                <button onClick={handelClick}
                data-color="#34B298"  className="bg-primary w-8 h-8">

                </button>
            </li>
        </ul>
    );
}

export default Color;