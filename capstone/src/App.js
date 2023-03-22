import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Photographers from "./pages/Photographers";
import About from "./pages/About";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProfile from "./pages/UserProfile";
import AuthedHeader from "./components/AuthedHeader";
import { ErrorPage } from "./components/ErrorPage";
import { Navigate } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
const user = JSON.parse(localStorage.getItem("user"));

function App() {
  return (
    <>
      {user ? (
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
              path="/photographers/:uid/edit"
              element={<EditProfile />}
            />
            <Route exact path="/about" element={<About />} />
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
            <Route exact path="/about" element={<About />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
