import React from 'react';
import Hello from '../hellos/Hello';

const TimestampHello = ({ name, showNewHello }) => {
    const timestamp = new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    return (
        <Hello
            name={name}
            showNewHello={showNewHello}
            timestamp={timestamp}
        />
    );
};

