import React from 'react';

const Secundary = (props) => {
    const { name, className, currentDateTime } = props;
    return (
        <h1 className={className}>
            {name} ({currentDateTime.toLocaleString('pt-BR')})
        </h1>
    );
};

export default Secundary;
