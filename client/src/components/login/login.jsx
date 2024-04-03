export function UserLogin() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <form className="border border-2 mt-4 p-3 rounded rounded-2 w-25 shadow">
                <h2 style={{textAlign:"center"}}> <span className="bi bi-person-fill text-dark"></span> User Login </h2>
                <hr/>
                <div >
                    <label for="userId"> User Id: </label>
                    <input type="text" id="userId" className="form-control"></input>
                </div>
                <div>
                    <label for="userPassword"> Password: </label>
                    <input type="password" id="userPassword" className="form-control"></input>
                </div>
                <div style={{textAlign:"center"}}>
                <button className="btn btn-primary w-100 mt-3"> Login <span className="bi bi-arrow-right-short"></span> </button>
                </div>
                <p className="text-center mt-3">Not Registered? <a href="">Sign up</a></p>
            </form>
            
        </div>
    );
}
