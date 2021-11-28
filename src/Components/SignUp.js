import React, { useEffect, useState } from 'react';

function SignUp () {

    const [ username, setUsername ] = useState( " " )
    const [ password, setPassword ] = useState( " " )
    const [ passwordVerification, setPasswordVerification ] = useState( " " )

    function handleSubmit (event) {
        event.preventDefault()
        
        if (passwordVerification === password) {
            fetch('http://localhost:4000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password
                    }
                })
            })
        } else {
            alert("passwords don't match")
        }
    }

    return (
        <div id="sign-up">
            <form id="sign-up-form" onSubmit={ handleSubmit }>
                <label>Username:</label>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username" 
                    onChange={ e => setUsername(e.target.value) }
                >
                </input>

                <label>Password: </label>
                <input 
                type="password" 
                name="password" 
                placeholder="password" 
                onChange={ e => setPassword(e.target.value )}
                >
                </input>

                <label>Verify Password:</label>
                <input 
                type="password" 
                name="password-verification" 
                placeholder="" 
                onChange={ e => setPasswordVerification(e.target.value) }
                >   
                </input>

                <input type="submit" value="Sign Up" id="sign-up-button" />
            </form>
        </div>
    )
}

export default SignUp