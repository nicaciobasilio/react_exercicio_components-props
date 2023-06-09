import React, { useState, useEffect } from 'react';
import Title from '../utils/Title';
import Secundary from '../utils/Secundary';
import './Hello.css';

const Hello = (props) => {
    const [showColoredHello, setShowColoredHello] = useState(false);
    const [showDelayedHello, setShowDelayedHello] = useState(false);
    const [showAnimatedHello, setShowAnimatedHello] = useState(false);
    const [hideMouseOverHello, setHideMouseOverHello] = useState(false);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const coloredTimer = setTimeout(() => {
            setShowColoredHello(true);
        }, 0);

        const delayedTimer = setTimeout(() => {
            setShowDelayedHello(true);
        }, 3000);

        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            clearTimeout(coloredTimer);
            clearTimeout(delayedTimer);
            clearInterval(interval);
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

    const formatDate = (date) => {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            timeZone: 'America/Sao_Paulo',
        };

        return date.toLocaleString('pt-BR', options);
    };

    return (
        <div>
            {/* Hello World 1 - Título padrão */}
            <h2>Hello World ({formatDate(currentDateTime)})</h2>
            {/* Hello World 2 - Componente personalizado */}
            <Title currentDateTime={currentDateTime} />
            {/* Hello World 3 - Componente personalizado com propriedade "name" */}
            <Secundary name="Hello world" currentDateTime={currentDateTime} />
            {/* Hello World 4 - Texto em itálico */}
            <i>Hello World ({formatDate(currentDateTime)})</i>
            {/* Hello World 5 - Texto com classe "red" para ficar vermelho */}
            <span className="red">
                <Title currentDateTime={currentDateTime} />
            </span>
            {showColoredHello && (
                <span>
                    {/* Hello World 6 - Texto colorido em cada letra */}
                    {renderColoredText(`Hello World (${formatDate(currentDateTime)})`)}
                </span>
            )}
            {showDelayedHello && (
                <div>
                    {/* Hello World 7 - Título que aparece após 3 segundos */}
                    <h2>Hello World - aparece após 3 segundos ({formatDate(currentDateTime)})</h2>
                </div>
            )}
            <div>
                {/* Hello World 8 - Título transformado em letras maiúsculas */}
                <h2>{transformToUppercase(`Hello World (${formatDate(currentDateTime)})`)}</h2>
            </div>
            <div
                className={`animated ${showAnimatedHello ? 'rotate' : ''}`}
                onMouseEnter={() => setShowAnimatedHello(true)}
                onMouseLeave={() => setShowAnimatedHello(false)}
            >
                {/* Hello World 9 - Título que roda ao passar o mouse */}
                <h2>Hello World - passe o mouse para animação ({formatDate(currentDateTime)})</h2>
            </div>
            {!hideMouseOverHello && (
                <div
                    className="runaway-hello"
                    onMouseOver={handleMouseOverHello}
                    style={{ cursor: 'pointer' }}
                >
                    {/* Hello World 10 - Título que desaparece ao passar o mouse */}
                    <h2>Hello World - desaparece ao passar o mouse ({formatDate(currentDateTime)})</h2>
                </div>
            )}
        </div>
    );
};

export default Hello;
