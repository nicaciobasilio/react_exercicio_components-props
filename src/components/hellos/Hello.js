import React, { useState, useEffect } from 'react';
import Title from '../utils/Title';
import Secundary from '../utils/Secundary';
import './Hello.css';

const Hello = (props) => {
    const { showNewHello } = props;
    const [displayHello, setDisplayHello] = useState(false);
    const [displayWorld, setDisplayWorld] = useState(false);

    useEffect(() => {
        if (showNewHello) {
            setDisplayHello(true);

            const timer = setTimeout(() => {
                setDisplayWorld(true);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [showNewHello]);

    const renderColorfulHelloWorld = () => {
        if (!showNewHello || !displayWorld) {
            return null;
        }

        const letters = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];
        const colors = ['red', 'green', 'blue', 'orange', 'purple', 'pink'];

        return (
            <div>
                {/* Comment: Hello World */}
                <Title name="World" />

                {/* Comment: Colorful Letters */}
                {letters.map((letter, index) => (
                    <span key={index} style={{ color: colors[index % colors.length] }}>
                        {letter}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div>
            {/* Comment: First Hello */}
            <Title />

            {/* Comment: Secondary */}
            <Secundary name={props.name} />

            {/* Comment: Italic Title */}
            <i>
                <Title />
            </i>

            {/* Comment: Centered Title */}
            <center>
                <Title></Title>
            </center>

            {/* Comment: Red Title */}
            <span className="red">
                <Title />
            </span>

            {/* Comment: Small Title */}
            <span className="small">
                <Title />
            </span>

            {/* Comment: Conditional Hello World */}
            <span>{showNewHello ? <Title name="Hello World" /> : null}</span>

            {/* Comment: Conditional Hello */}
            {showNewHello && displayHello && <Title name="Hello" />}

            {/* Comment: Colorful Hello World */}
            {renderColorfulHelloWorld()}
        </div>
    );
};

export default Hello;
