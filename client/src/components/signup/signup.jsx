import { useFormik } from "formik";
import axios from "axios";

export const UserSignup = () => {
    const formik = useFormik({
        initialValues: {
            userName: "",
            userEmailid: "",
            userGender: "",
            userContact: 0,
            userPassword: "",
            userConfirmPassword: "",
        },
        onSubmit: (values) => {
            // console.log(values);
            axios.post("http://localhost:8081/Signup", values)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log("Error: " + err);
            })
        },
    });
    return (
        <div
            className="container-fluid d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
        >
            <form
                onSubmit={formik.handleSubmit}
                autoComplete="off"
                className="border border-2 mt-4 p-3 rounded rounded-2 w-25 shadow"
            >
                <h3 style={{ textAlign: "center" }}>
                    <span className="bi bi-person-fill text-dark"></span> Sign Up
                </h3>
                <hr />
                <div>
                    <label htmlFor="userId"> User Name: </label>
                    <input
                        type="text"
                        id="userId"
                        className="form-control"
                        name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="mt-1">
                    <label htmlFor="emailId"> Email: </label>
                    <input
                        type="email"
                        id="emailId"
                        className="form-control"
                        name="userEmailid"
                        value={formik.values.userEmailid}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="mt-1">
                    <label className="me-2"> Gender: </label>
                    <input
                        type="radio"
                        id="male"
                        className="form-check-input me-1"
                        name="userGender"
                        value={formik.values.userGender}
                        onChange={formik.handleChange}
                    />
                    <label className="me-3" htmlFor="male">
                        Male
                    </label>
                    <input
                        type="radio"
                        id="female"
                        className="form-check-input me-1"
                        name="userGender"
                        value={formik.values.userGender}
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="female"> Female </label>
                </div>
                <div className="mt-1">
                    <label htmlFor="phoneNumber"> Phone : </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        className="form-control"
                        name="userContact"
                        value={formik.values.userContact}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="mt-1">
                    <label htmlFor="password"> Password: </label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="userPassword"
                        value={formik.values.userPassword}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="mt-1">
                    <label htmlFor="confirmPassword"> Confirm Password: </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="form-control"
                        name="userConfirmPassword"
                        value={formik.values.userConfirmPassword}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="mt-1" style={{ textAlign: "center" }}>
                    <button
                        className="btn btn-primary w-100 mt-3"
                        type="submit"
                    >
                        {" "}
                        Sign in{" "}
                        <span className="bi bi-arrow-right-short"></span>{" "}
                    </button>
                    <p className="mt-3">
                        Already Registered? <a href=""> Sign in </a>{" "}
                    </p>
                </div>
            </form>
        </div>
    );
};
