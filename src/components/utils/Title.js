import React from 'react';

const Title = (props) => {
    const { currentDateTime } = props;
    return <h1>Hello world ({currentDateTime.toLocaleString('pt-BR')})</h1>;
};

export default Title;
