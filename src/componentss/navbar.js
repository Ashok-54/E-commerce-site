function Nav(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-primary"> 
    <div className="container-fluid " >
        <a className="nav-brand text-dark" href="..."> <h5><i>Ecommerce site</i></h5>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar"> 
                <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="mynavbar">
                <ul className="navbar-nav ">
            <li className="nav-items">
                <a className="nav-link" href="..."><i className="fa-solid fa-heart"></i></a>
            </li>
            <li className="nav-items">
                <a className="nav-link " href="..."><i className="fa-solid fa-thumbs-up"></i></a>
            </li>
            <li className="nav-items">
                <a className="nav-link " href="..."><i className="fa-solid fa-bag-shopping"></i></a>
            </li>
            
        </ul>
        </div>
        </div>
        </nav>
    )
}
export default Nav