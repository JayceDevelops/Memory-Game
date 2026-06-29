import '../styles/Card.css';

export default function Card({image, title, description}) {
    return (
        <div className="card">
            <img src={image}/>
            <div className="details">
                <span>{title}</span>
                <p>{description}</p>
            </div>
        </div>
    );
};