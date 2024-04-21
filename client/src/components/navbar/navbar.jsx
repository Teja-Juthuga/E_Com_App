import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="container-fluid m-0 p-0">
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary d-sm-block d-lg-none">
                <div className="container-fluid ">
                    <a className="navbar-brand m-auto" href="#">
                        <img src="images/newLogo.PNG" alt="Logo" style={{height: "100px", borderRadius: "8px"}}
                            className="d-inline-block align-text-top" />
                    </a>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-body-tertiary d-none d-lg-block">
                <div className="container-fluid ">
                    <a className="navbar-brand  ms-3" href="#">
                        <img style={{borderRadius: "50%", height: "75px"}} src="images/cartLogo.PNG" alt="Logo"
                            className="d-inline-block align-text-top" />
                    </a>
                    <div className="m-auto">
                        <h2 className="text-danger"> E-Kart </h2>
                    </div>
                    <div>
                        <Link className="text-danger" to="/Seller">
                            <p className="m-2"> Become a Seller? </p>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    </div>
    )
}