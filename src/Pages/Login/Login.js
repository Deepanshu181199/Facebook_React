import './Login.css'

function Login(){
    return(
        <>
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">Commoonn</h3>
                    <span className="login-desc">Connect with frnds</span>
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <input className="login-input" placeholder='Email' />
                        <input className="login-input" placeholder='Password' />
                        <button className="login-btn">Log In</button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="login-register-btn">Create a new account</button>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login