'use client'






export default function Login(){

    return (
        <>
        <div className="body">
            <div className="container">
                <div id="title">Login</div>
                <p id="wlcm"> Welcome back</p>
                Enter your Username and Password
                <div className="user">
                Username<input type="text" id="user" /></div>
                <div className="pass">
                Password <input type="password"  id="pass" minLength={4} maxLength={7}  />
                </div>
                <input type="button" value="Login" id="submit"  />
            </div>
        </div>
        </>
    );
}