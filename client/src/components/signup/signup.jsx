export const UserSignup = () => {
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <form className="border border-2 mt-4 p-3 rounded rounded-2 w-25 shadow">
                <h3 style={{textAlign:"center"}}> <span className="bi bi-person-fill text-dark"></span> Sign Up </h3>
                <hr/>
                <div>
                    <label for="userId"> User Id: </label>
                    <input type="text" id="userId" className="form-control" />
                </div>
                <div>
                    <label for="emailId"> Email: </label>
                    <input type="email" id="emailId" className="form-control" />
                </div>
                <div>
                    <label for="phoneNumber"> Phone : </label>
                    <input type="text" id="phoneNumber" className="form-control" />
                </div>
                <div>
                    <label for="password"> Password: </label>
                    <input type="password" id="password" className="form-control"/>
                </div>
                <div>
                    <label for="confirmPassword"> Confirm Password: </label>
                    <input type="password" id="confirmPassword" className="form-control" />
                </div>
                <div style={{textAlign:"center"}}>
                <button className="btn btn-primary w-100 mt-3"> Sign in  <span className="bi bi-arrow-right-short"></span> </button>
                <p className="mt-3">Already Registered? <a href=""> Sign in </a> </p>
                </div>
            </form>
        </div>
    )
}