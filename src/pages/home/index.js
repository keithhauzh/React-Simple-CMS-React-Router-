import Nav from "../../components/nav";
import { useNavigate } from "react-router-dom";
import PostCard from "../../components/post-card";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto my-5" style={{ maxWidth: "500px" }}>
        <h1 className="h1 mb-4 text-center">My Blog</h1>
        <PostCard label="Post 1">Some Content</PostCard>
        <PostCard label="Post 2">Some Content</PostCard>
        <PostCard label="Post 3">Some Content</PostCard>
        <PostCard label="Post 4">Some Content</PostCard>

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
