export default function Register(){
    return (
        <>
             <div className="body">
            <div className="container">
                <div id="title">Register</div>
                <p id="wlcm"> Hello New User</p>
                Enter your Username and Password
                <div className="user">
                Username<input type="text" id="user" /></div>
                <div className="pass">
                Password <input type="password"  id="pass" minLength={4} maxLength={7}  />
                </div>
                <input type="button" value="Register" id="submit"  />
            </div>
        </div>
        
        
        </>
    );
}