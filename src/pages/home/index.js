import Nav from "../../components/nav";
import { useNavigate } from "react-router-dom";
import PostCard from "../../components/post-card";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      
      <div className="container mx-auto my-5" style={{ maxWidth: "500px" }}>
        <h1 className="h1 mb-4 text-center">My Blog</h1>
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">Post 4</h5>
            <p className="card-text">Here's some content about post 4</p>
            <div className="text-end">
              <p
                onClick={() => {
                  navigate("../post");
                }}
                className="btn btn-primary btn-sm"
              >
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">Post 3</h5>
            <p className="card-text">This is for post 3</p>
            <div className="text-end">
              <p
                onClick={() => {
                  navigate("../post");
                }}
                className="btn btn-primary btn-sm"
              >
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">Post 2</h5>
            <p className="card-text">This is about post 2</p>
            <div className="text-end">
              <p
                onClick={() => {
                  navigate("../post");
                }}
                className="btn btn-primary btn-sm"
              >
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">Post 1</h5>
            <p className="card-text">This is a post</p>
            <div className="text-end">
              <p
                onClick={() => {
                  navigate("../post");
                }}
                className="btn btn-primary btn-sm"
              >
                Read More
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 d-flex justify-content-center gap-3">
          <button
            onClick={() => {
              navigate("../login");
            }}
            className="btn btn-link btn-sm"
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("../signup");
            }}
            className="btn btn-link btn-sm"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
