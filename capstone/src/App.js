import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Photographers from "./pages/Photographers";
import About from "./pages/About";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProfile from "./pages/UserProfile";
import Booking from "./pages/Booking";
import Review from "./pages/Review";
import Gallery from "./pages/Gallery";
import AuthedHeader from "./components/AuthedHeader";
import { ErrorPage } from "./components/ErrorPage";
import { Navigate } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import MyBookings from "./pages/MyBookings";
import useAuth from "./hooks/useAuth";
import PhotographersbyLocation from "./pages/PhotographersbyLocation";
function App() {
  const { isAuth } = useAuth();
  const user = JSON.parse(localStorage.getItem("memoriesuser"));

  return (
    <>
      {isAuth && user ? (
        //Logged in Routes
        <>
          <AuthedHeader />

          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/photographers" element={<Photographers />} />
            <Route exact path="/photographers/:uid" element={<UserProfile />} />
            <Route
              exact
              path="/location/:location"
              element={<PhotographersbyLocation />}
            />

            <Route
              exact
              path="/photographers/:uid/edit"
              element={<EditProfile />}
            />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/gallery/:uid" element={<Gallery />} />
            <Route exact path="/review/:uid" element={<Review />} />
            <Route exact path="/book/:uid" element={<MyBookings />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </>
      ) : (
        // Guest user Routes
        <>
          <Header />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Signup />} />
            <Route exact path="/photographers" element={<Photographers />} />
            <Route exact path="/photographers/:uid" element={<UserProfile />} />
            <Route
              exact
              path="/location/:location"
              element={<PhotographersbyLocation />}
            />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/book/:uid" element={<Booking />} />
            <Route exact path="/gallery/:uid" element={<Gallery />} />
            <Route exact path="/review/:uid" element={<Review />} />

            {/* <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/404" />} /> */}
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
