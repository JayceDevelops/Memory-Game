import '../styles/Card.css';

export default function Card({id, image, title, description, usedID, setUsedID, current, setCurrent, best, setBest, setCards}) {

    const cardClicked = () => {
        if (usedID.includes(id)){
            setBest(current);
            setCurrent(0);
            setUsedID([]);
            setCards([]);
        }else {
            setCurrent(current + 1);
            setUsedID((prevUsedID) => [...prevUsedID, id]);
            setCards([]);
        }

    }

    return (
        <div className="card" onClick={cardClicked}>
            <img src={image}/>
            <div className="details">
                <span>{title}</span>
                <p>{description}</p>
            </div>
        </div>
    );
};