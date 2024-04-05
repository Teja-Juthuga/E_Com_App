import { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import axios from "axios";

export const Signup = () => {
    const [responseFromDB,setResponseFromDB] = useState("");

    const formik = useFormik({
        initialValues: {
            name: "",
            emailid: "",
            contact: 91,
            password: "",
            confirmPassword: "",
        },
        onSubmit: (values) => {
            // console.log(values);
            axios.post("http://localhost:8081/Signup", values)
            .then((response) => {
                console.log(response);
                setResponseFromDB(response.data);
                
            })
            .catch((err) => {
                console.log("Error: " + err);
            })

            
        },
        validate: (values) => {
            let errors = {};
            if (!values.name) {
                errors.userName = "User name Required";
            }
            if (!values.emailid) {
                errors.userEmailid = "E-mail id Required";
            }
            if ((values.contact.toString().length) !== 12) {
                errors.userContact = "Contact number Required";
            }
            if (!values.password) {
                errors.userPassword = "Password Required";
            }
            if (!values.confirmPassword) {
                errors.userConfirmPassword = "Password Confirmation Required";
            }
            if (values.password !== values.confirmPassword) {
                errors.passwordComparisionErr =
                    "Entered passwords are not matching";
            }
            return errors;
        },
    });
    return (
        <main className="mt-5 signupMain"  style={{ height: "100%" }}>
            <div className="signupContainer">
                <div className="signupCard m-5">
                    <div className="text-center">
                        <h2 className="text-danger fs-2">
                            <b> Create Account </b>
                        </h2>
                        <p style={{ fontSize: "16px", color: "grey" }}>
                            Selling only the best things online
                        </p>
                    </div>
                    <hr />
                    <form onSubmit={formik.handleSubmit} autoComplete="off">
                        <dl style={{ textAlign: "left" }}>
                            <dt className="text-danger mb-1 fs-5"> Your name </dt>
                            <dd>
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    name="name"
                                    value={formik.values.userName}
                                    onChange={formik.handleChange}
                                    placeholder="First and last name"
                                />
                                {formik.errors.userName ? (
                                    <div className="text-danger fw-bold">
                                        <span className="b bi-info text-danger"></span>
                                        {formik.errors.userName}
                                    </div>
                                ) : null}
                            </dd>
                            <dt className="text-danger mb-1 fs-5">Mobile number</dt>
                            <dd>
                                <input
                                    type="text"
                                    placeholder="Mobile number"
                                    className="form-control mb-2"
                                    name="contact"
                                    value={formik.values.contact}
                                    onChange={formik.handleChange}
                                />
                                {(formik.errors.userContact)?<div className="text-danger fw-bold"><span className="b bi-info text-danger"></span> {formik.errors.userContact} </div>:null}
                            </dd>
                            <dt className="text-danger mb-1 fs-5">
                                Email 
                            </dt>
                            <dd>
                                <input
                                    type="email"
                                    placeholder="abc@gmail.com"
                                    className="form-control mb-2"
                                    name="emailid"
                                    value={formik.values.emailid}
                                    onChange={formik.handleChange}
                                />
                                {(formik.errors.userEmailid)? <div className="text-danger fw-bold"><span className="b bi-info text-danger"></span> {formik.errors.userEmailid} </div> : null}
                            </dd>
                            <dt className="text-danger mb-1 fs-5"> Password </dt>
                            <dd>
                                <input
                                    type="text"
                                    placeholder="At least 6 characters"
                                    className="form-control mb-2"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                { formik.errors.userPassword?<div className="text-danger fw-bold"><span className="b bi-info text-danger"></span> {formik.errors.userPassword}</div>:null }
                                
                            </dd>
                            <dt className="text-danger mb-1 fs-5">
                                Confirm Password
                            </dt>
                            <dd>
                                <input
                                    type="password"
                                    placeholder="At least 6 characters"
                                    className="form-control mb-2"
                                    name="confirmPassword"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                />
                                { formik.errors.userConfirmPassword?<div className="text-danger fw-bold"><span className="b bi-info text-danger"></span> {formik.errors.userConfirmPassword}</div>:null }
                            </dd>
                        </dl>
                        {(formik.errors.passwordComparisionErr)? <div className="text-danger fw-bold"><span className="b bi-info text-danger"></span> {formik.errors.passwordComparisionErr}</div>: null}
                                    
                        <button className="btn btn-danger btn-lg w-100 p-2" type="submit">
                        Create Account
                        <span className="bi bi-chevron-right"></span>
                        </button>
                    </form>
                    <div className="text-success text-center mt-3 fw-bold"> {responseFromDB} </div>
                    <hr />
                    <div className="mt-2" style={{ textAlign: "left" }}>
                        <p>
                            Already have an account?&nbsp;
                            <Link
                                className="text-danger"
                                to="/"
                            >
                               Sign in
                            </Link>
                        </p>
                        <p>
                            By creating an account or logging in, you agree to
                            E-Karts &nbsp;
                            <a href="#" className="text-danger">
                                Conditions of Use
                            </a>
                            &nbsp;and&nbsp;
                            <a href="#" className="text-danger">
                            &nbsp;Privacy Policy.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};
