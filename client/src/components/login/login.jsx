import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";


export function Login() {
    const [response, setResponse] = useState("");

    const formik = useFormik({
        initialValues: {
            userName: "",
            userPassword: "",
        },
        validate: (values) => {
            let errors = {};
            if (!values.userName) {
                errors.unameErr = "User name required";
            }
            if (!values.userPassword) {
                errors.upasswordErr = "Password required";
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <main className="loginMain">
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
                    <form onSubmit={formik.handleSubmit} autoComplete="off">
                        <input
                            type="text"
                            placeholder="Your User Name"
                            name="userName"
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            className="form-control mb-2 w-100 "
                        />
                        {(formik.errors.unameErr) ? 
                            <div className="text-danger fw-bold">
                                <span className="b bi-info text-danger"></span>
                                {formik.errors.unameErr}
                            </div>
                         : null
                        }
                        <input
                            type="password"
                            placeholder="Enter Your password"
                            name="userPassword"
                            value={formik.values.userPassword}
                            onChange={formik.handleChange}
                            className="form-control mb-2 w-100"
                        />
                        {(formik.errors.upasswordErr) ? 
                            <div className="text-danger fw-bold">
                                <span className="b bi-info text-danger"></span>
                                {formik.errors.upasswordErr}
                            </div>
                            : null
                        }
                        <div className="mb-4" style={{ textAlign: "right" }}>
                            <Link className="text-danger" to="/AccountRecover">
                                Forgot Password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-danger btn-lg w-100 p-2"
                        >
                            Login <span className="bi bi-chevron-right"></span>
                        </button>
                    </form>
                    <div className="mt-3">
                        <p>
                            New to E-Kart?
                            <Link className="text-danger" to={'/Signup'}>
                                Create your E-Kart Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
