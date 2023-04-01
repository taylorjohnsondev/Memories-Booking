import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AvatarUpload from "../components/AvatarUploader";
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
      setOkMsg("Update Success");
    } catch (error) {
      if (error.response?.status === 422) {
        setErrorMsg("Please enter a new password");
      } else if (error.response?.status === 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Update failed");
      }
    }
  };

  return (
    <div>
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
                placeholder="New Password"
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
                autoComplete="off"
              />
              <h3>Edit Name</h3>
              <input
                type="text"
                placeholder={user.fullname}
                id="fullname"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="off"
              />
              <h3>Edit Location</h3>
              <input
                type="text"
                placeholder={user.location}
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                autoComplete="off"
              />
              <div id="errorMsg">{errorMsg ? errorMsg : ""}</div>
              <div id="okMsg">{okMsg ? okMsg : ""}</div>
              <button type="submit">Update Profile</button>
            </form>

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
