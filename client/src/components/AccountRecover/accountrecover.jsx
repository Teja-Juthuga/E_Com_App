import { Link } from "react-router-dom"

export const AccountRecover = () => {
    return(
        <main className="fpMain">
            <div className="container">
                <div className="cart-image-div">
                    <img src="images/forgotPassword.png" className="cart-image" />
                </div>
                <div className="card login-card">
                    <h2 className="text-danger fs-2"><span className="bi bi-key-fill"></span><b> Recover Account </b> </h2>
                    <hr/>
                    <input type="text" id="userName" placeholder="Enter your registerd Mail Id" className="form-control w-100 mb-3" />
                    <button className="btn btn-danger w-100 p-2"> Reset Password <span className="bi bi-chevron-right"></span></button>
                    <div className="mt-3">
                        <p> Remember your Password? <Link className="text-danger"  to="/"> Back to Login</Link></p>
                    </div>
                </div>
            </div> 
        </main>
    )
}