import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../components/LoadingBar/Loading";

const Photographers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotographers() {
      const response = await axios.get("photographers");
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
                onClick={() => navigate(`${user._id}`)}
              >
                View Profile
              </button>
            </div>
          ))}
      </div>
      <br />
      <br />
      <div class="col-md-10 col-xl-8 text-center mx-auto">
        <h1 class="mb-4">Featured Locations</h1>
      </div>

      <div className="card-group shadow">
        <div className="card">
          <img
            src="miami.jpg"
            class="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
          <div className="card-body">
            <h5 className="card-title">Florida</h5>
            <p className="card-text">
              Capture the magic of Florida's colorful art deco buildings and
              pristine beaches.
            </p>
            <p className="card-text">
              <small className="text-muted">
                <button
                  onClick={() => navigate(`/location/Florida`)}
                  className="featured-btn"
                >
                  Search Photographers
                </button>
              </small>
            </p>
          </div>
        </div>

        <div className="card">
          <img src="la.jpg" className="card-img-top" alt="Palm Springs Road" />
          <div className="card-body">
            <h5 className="card-title">Los Angeles</h5>
            <p className="card-text">
              Find your perfect shot in the city of stars, where every corner is
              a new adventure.
            </p>
            <p className="card-text">
              <small className="text-muted">
                <button
                  onClick={() => navigate(`/location/Los%20Angeles`)}
                  className="featured-btn"
                >
                  Search Photographers
                </button>
              </small>
            </p>
          </div>
        </div>

        <div class="card">
          <img
            src="ny.jpg"
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">New York</h5>
            <p className="card-text">
              Take stunning portraits against the iconic skyline of New York
              City.
            </p>
            <p className="card-text">
              <small className="text-muted">
                <button
                  onClick={() => navigate(`/location/New%20York`)}
                  className="featured-btn"
                >
                  Search Photographers
                </button>
              </small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="chicago.jpg"
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Illinois</h5>
            <p className="card-text">
              Discover the hidden gems of Illinois, from the bustling city of
              Chicago to charming small towns.
            </p>
            <p className="card-text">
              <small className="text-muted">
                <button
                  onClick={() => navigate(`/location/Illinois`)}
                  className="featured-btn"
                >
                  Search Photographers
                </button>
              </small>
            </p>
          </div>
        </div>

        <div class="card">
          <img
            src="texas.jpg"
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Texas</h5>
            <p className="card-text">
              From rustic ranches to modern cityscapes, find the perfect
              backdrop in Texas.
            </p>
            <p className="card-text">
              <small className="text-muted">
                <button
                  onClick={() => navigate(`/location/Texas`)}
                  className="featured-btn"
                >
                  Search Photographers
                </button>
              </small>
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Photographers;
