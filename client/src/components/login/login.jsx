import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";


export function Login() {
    const [response, setResponse] = useState("");

    const formik = useFormik({
        initialValues: {
            userEmail: "",
            userPassword: "",
        },
        validate: (values) => {
            let errors = {};
            if (!values.userEmail) {
                errors.uemailErr = "User name required";
            }
            if (!values.userPassword) {
                errors.upasswordErr = "Password required";
            }
            return errors;
        },
        onSubmit: (values) => {
            // console.log(values);
            axios.post("http://localhost:8081/Login", values)
            .then((response) => {
                console.log(response);
                setResponse(response.data);
            })
            .catch((err) => {
                console.log("Error: " + err)
            })
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
                            placeholder="Your E-mail Id"
                            name="userEmail"
                            value={formik.values.userEmail}
                            onChange={formik.handleChange}
                            className="form-control mb-2 w-100 "
                        />
                        {(formik.errors.uemailErr) ? 
                            <div className="text-danger fw-bold">
                                <span className="b bi-info text-danger"></span>
                                {formik.errors.uemailErr}
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
                        <Link to={'/Shop'}>
                            <button
                                type="submit"
                                className="btn btn-danger btn-lg w-100 p-2"
                            >
                                Login <span className="bi bi-chevron-right"></span>
                            </button>
                        </Link>
                    </form>
                    <div className="text-success fw-bold mt-3"> {response} </div>
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
