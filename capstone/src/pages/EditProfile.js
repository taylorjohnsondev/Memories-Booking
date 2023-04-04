import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AvatarUpload from "../components/AvatarUploader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbTrash } from "react-icons/tb";

function EditProfile() {
  let params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const [fullname, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [okMsg, setOkMsg] = useState("");
  const token = savedUser.token;

  const notify = () => toast("You have successfully updated your profile!");

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `http://localhost:3001/photographers/${params.uid}`
      );
      setUser(response.data);
    }
    fetchUser();
  }, [params.uid]);

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:3001/photographers/${savedUser.uid}/edit`,
        {
          password,
          bio,
          fullname,
          location,
        }
      );
      console.log(res.data);
      toast.success("You have successfully updated your profile!");
    } catch (error) {
      if (error.response?.status === 422) {
        setErrorMsg("Please enter a new password");
      } else if (error.response?.status === 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Update failed");
      }
      toast.error("Profile update failed");
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      await axios.delete(
        `http://localhost:3001/photographers/${savedUser.uid}`
      );
      toast.success("Account Deleted");
      handleLogout();
    } catch (error) {
      if (error) {
        toast.error("Error deleting profile");
      }
    }
  };

  function handleLogout() {
    localStorage.clear();
    navigate("/");
    navigate(0);
  }

  return (
    <div>
      <ToastContainer />
      {savedUser && savedUser.uid === params.uid ? (
        <>
          <div className="pfp-username-card">
            <h1>Update your profile</h1>
            <img src={user.profile_image} alt="" />
            <AvatarUpload />
            <p>
              <strong>{"@" + user.username}</strong>
            </p>
          </div>

          <div className="edit-form">
            <form onSubmit={handleSubmit} className="form-container">
              <h3>Change password</h3>
              <input
                type="password"
                placeholder="Must be atleast 7 characters"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
              <h3>Edit bio</h3>
              <input
                type="text"
                placeholder={user.bio}
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                autoComplete="on"
              />
              <h3>Edit Name</h3>
              <input
                type="text"
                placeholder={user.fullname}
                id="fullname"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="on"
              />
              <h3>Edit Location</h3>
              <input
                type="text"
                placeholder={user.location}
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                autoComplete="on"
              />
              <div id="errorMsg">{errorMsg ? errorMsg : ""}</div>
              <div id="okMsg">{okMsg ? okMsg : ""}</div>
              <button type="submit">Update Profile</button>
            </form>

            <button id="delete-profile" onClick={handleDelete}>
              <TbTrash />
              Delete Account
            </button>

            <div />
          </div>
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
}

export default EditProfile;
