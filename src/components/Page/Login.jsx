import "./Login.scss"
const Login = () => {
    return (
        <div className="container">
            <div className="LoginPage">
                <div className="titleLogin">
                    <a href="/"><i class="fa-solid fa-house"></i> Home <i class="fa-solid fa-chevron-right fa-2xs"></i></a> <span>My Account</span>
                </div>
                <div className="LoginForm">
                    <p>Login</p>
                    <form action="">
                        <label htmlFor="user">Username or email address *</label>
                        <input type="text" name="" id="user" required/>
                        <label htmlFor="password">Password *</label>
                        <input type="password" name="" id="password" required/>
                        <button>Log in</button>
                        <input type="checkbox" name="" id="remember" /> <label htmlFor="remember">Remember me</label> <br/>
                        <a href="/login/lost-password">Lost your password?</a>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login
