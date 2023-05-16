import React, { useState } from 'react';

const EcuadorFlag = () => {
    const [colorOuterStripe, setColorOuterStripe] = useState('yellow');
    const [colorInnerStripe, setColorInnerStripe] = useState('blue');
    const [message, setMessage] = useState('');

    const handleClick = () => {
        const newColorOuterStripe = colorOuterStripe === 'yellow' ? 'red' : 'yellow';
        const newColorInnerStripe = colorInnerStripe === 'blue' ? 'red' : 'blue';

        setColorOuterStripe(newColorOuterStripe);
        setColorInnerStripe(newColorInnerStripe);
        setMessage('Ecuador');
    };

    return (
        <div>
            <div
                style={{
                    width: '300px',
                    height: '200px',
                    border: '1px solid black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colorOuterStripe,
                }}
                onClick={handleClick}
            >
                <div
                    style={{
                        width: '80%',
                        height: '80%',
                        backgroundColor: colorInnerStripe,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '24px',
                        fontWeight: 'bold',
                    }}
                >
                    {message}
                </div>
            </div>
        </div>
    );
};

export default EcuadorFlag;
