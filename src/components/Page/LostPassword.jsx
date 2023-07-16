import "./LostPassword.scss"
const LostPassword = () => {
    return (
        <div className="container">
            <div className="lostPwPage">
                <div className="titleLostPw">
                    <a href="/"><i class="fa-solid fa-house"></i> Home <i class="fa-solid fa-chevron-right fa-2xs"></i></a> <span>My Account</span>
                </div>
                <div className="lostPwForm">
                    <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                    <form action="">
                        <label htmlFor="email">Username or email</label><br/>
                        <input type="email" name="" id="email" required/><br/>
                        <button>Reset password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LostPassword