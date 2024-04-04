export function UserLogin() {
    return (
        <main>
            <div className="container">
                <div className="cart-image-div">
                    <img src="images/cartimage.png" className="cart-image" />
                </div>
                <div className="card login-card">
                    <h2 className="text-danger fs-2">
                        <span className="bi bi-person-fill"></span>
                        <b> User </b>
                    </h2>
                    <p style={{ fontSize: "16px", color: "grey" }}>
                        Get access to your Orders, Wishlist and Recommendations
                    </p>
                    <hr />
                    <input
                        type="text"
                        id="userName"
                        placeholder="Your User Name"
                        className="form-control mb-2 w-100 "
                    />
                    <input
                        type="password"
                        id="userPassword"
                        placeholder="Enter Your password"
                        className="form-control mb-2 w-100 "
                    />
                    <div className="mb-4" style={{ textAlign: "right" }}>
                        <a className="text-danger" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <button className="btn btn-danger btn-lg w-100 p-2">
                        Login <span className="bi bi-chevron-right"></span>
                    </button>
                    <div className="mt-3">
                        <p>
                            New to E-Kart?
                            <a className="text-danger" href="#">
                                Create your E-Kart Account
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
