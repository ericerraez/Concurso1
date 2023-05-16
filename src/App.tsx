import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (username === 'administrator--' && password === '123') {
            // Lógica de autenticación exitosa
            console.log('Inicio de sesión exitoso');
            window.location.href = 'https://0a6c00c8034e54c1813bdefb00a5003e.web-security-academy.net';
        } else {
            // Credenciales incorrectas
            setErrorMessage('Credenciales incorrectas');
        }
    };

    return (
        <div>
            <h2>Iniciar sesión</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
};

export default LoginForm;
