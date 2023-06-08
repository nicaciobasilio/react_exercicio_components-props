import React from "react";

const Secundary = (props) => {
    const { name, className } = props;
    return (
        <h1 className={className}>{ props.name }</h1>
    )
}

export default Secundary;