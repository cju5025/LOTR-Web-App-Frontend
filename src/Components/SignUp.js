import React, { useEffect, useState } from 'react';

function SignUp () {

    const [ username, setUsername ] = useState( " " )
    const [ password, setPassword ] = useState( " " )
    const [ passwordVerification, setPasswordVerification ] = useState( " " )
    const [ passwordsMatch, setPasswordsMatch ] = useState( false )

    return (
        <div id="sign-up">
            <form id="sign-up-form">
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
            </form>
        </div>
    )
}

export default SignUp