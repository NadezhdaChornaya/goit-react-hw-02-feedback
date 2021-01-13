import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';


export const App = () => {
    return (
        <div>
            <Counter total={0} />
        </div>
    )
}
