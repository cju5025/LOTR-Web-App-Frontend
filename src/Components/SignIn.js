function SignIn () {
    return (
        <div id="sign-in">
            <form id="sign-in-form">
                <label>Username:</label>
                <input type="text" placeholder="username"/>

                <label>Password:</label>
                <input type="password" placeholder="password"/>

                <input type="submit" value="Sign In" />
            </form>
        </div>
    )
}

export default SignIn