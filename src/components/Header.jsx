import '../styles/Header.css';


export default function Header({current, best}) {
    return (
        <header>
            <h1>Memory Game</h1>

            <div className="scores">

                <div className="score current">
                    <h2>Current Score:</h2>
                    <h3>{current}</h3>
                </div>

                <div className="score best">
                    <h2>Best Score:</h2>
                    <h3>{best}</h3>
                </div>
            </div>
        </header>
    );
}