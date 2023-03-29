import { Link } from "react-router-dom";
import "../components/css/header.css";

function AuthedHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={require("./memories1.png")} alt="Memories Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/photographers">
                  Our Photographers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/book/${user.uid}`}>
                  Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/review/${user.uid}`}>
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/gallery/${user.uid}`}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/photographers/${user.uid}`}>
                  My Profile
                </Link> 
              </li>  
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default AuthedHeader;
