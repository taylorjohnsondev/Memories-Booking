import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../components/LoadingBar/Loading";
import { useParams } from "react-router-dom";

const PhotographersbyLocation = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotographers() {
      const response = await axios.get(
        `http://localhost:3001/location/${params.location}`
      );
      setUsers(response.data);
      setLoading(false);
    }
    fetchPhotographers();
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>
        {users.length >= 1
          ? `Here are the photographers from ${params.location}`
          : `No photographers from ${params.location} found.`}
      </h1>
      <div id="user-container">
        {users &&
          users.map((user) => (
            <div id="user" key={user._id}>
              <img
                className="photographerimg"
                src={user.profile_image}
                alt=""
              />
              {user.fullname}
              <br />
              {"@" + user.username}
              <br />

              <button
                className="featured-btn"
                onClick={() => navigate(`/photographers/${user._id}`)}
              >
                View Profile
              </button>
            </div>
          ))}
      </div>

      <br />
    </div>
  );
};

export default PhotographersbyLocation;
