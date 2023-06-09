import React, { useState, useEffect } from 'react';
import Title from '../utils/Title';
import Secundary from '../utils/Secundary';
import './Hello.css';

const Hello = (props) => {
    const [showColoredHello, setShowColoredHello] = useState(false);
    const [showDelayedHello, setShowDelayedHello] = useState(false);
    const [showAnimatedHello, setShowAnimatedHello] = useState(false);
    const [hideMouseOverHello, setHideMouseOverHello] = useState(false);

    useEffect(() => {
        const coloredTimer = setTimeout(() => {
            setShowColoredHello(true);
        }, 0);

        const delayedTimer = setTimeout(() => {
            setShowDelayedHello(true);
        }, 3000);

        return () => {
            clearTimeout(coloredTimer);
            clearTimeout(delayedTimer);
        };
    }, []);

    const renderColoredText = (text) => {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        return [...text].map((letter, index) => (
            <span key={index} style={{ color: colors[index % colors.length] }}>
                {letter}
            </span>
        ));
    };

    const transformToUppercase = (text) => {
        return text.toUpperCase();
    };

    const handleMouseOverHello = () => {
        setHideMouseOverHello(true);
    };

    return (
        <div>
            {/* Hello World 1 - Título padrão */}
            <h2>Hello World</h2>
            {/* Hello World 2 - Componente personalizado */}
            <Title />
            {/* Hello World 3 - Componente personalizado com propriedade "name" */}
            <Secundary name="Hello world" />
            {/* Hello World 4 - Texto em itálico */}
            <i>Hello World</i>
            {/* Hello World 5 - Texto com classe "red" para ficar vermelho */}
            <span className="red">
                <Title />
            </span>
            {showColoredHello && (
                <span>
                    {/* Hello World 6 - Texto colorido em cada letra */}
                    {renderColoredText('Hello World')}
                </span>
            )}
            {showDelayedHello && (
                <div>
                    {/* Hello World 7 - Título que aparece após 3 segundos */}
                    <h2>Hello World - aparece após 3 segundos</h2>
                </div>
            )}
            <div>
                {/* Hello World 8 - Título transformado em letras maiúsculas */}
                <h2>{transformToUppercase('Hello World')}</h2>
            </div>
            <div
                className={`animated ${showAnimatedHello ? 'rotate' : ''}`}
                onMouseEnter={() => setShowAnimatedHello(true)}
                onMouseLeave={() => setShowAnimatedHello(false)}
            >
                {/* Hello World 9 - Título que roda ao passar o mouse */}
                <h2>Hello World - passe o mouse para animação</h2>
            </div>
            {!hideMouseOverHello && (
                <div
                    className="runaway-hello"
                    onMouseOver={handleMouseOverHello}
                    style={{ cursor: 'pointer' }}
                >
                    {/* Hello World 10 - Título que desaparece ao passar o mouse */}
                    <h2>Hello World - desaparece ao passar o mouse</h2>
                </div>
            )}
        </div>
    );
}

export default Hello;
