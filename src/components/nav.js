import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mb-3 gap-2">
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>

        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Login
        </button>

        <button
          onClick={() => {
            navigate("../manage-posts");
          }}
        >
          Manage posts
        </button>
        <button
          onClick={() => {
            navigate("/manage-posts/add");
          }}
        >
          Manage posts add
        </button>
        <button
          onClick={() => {
            navigate("/manage-posts/edit");
          }}
        >
          Manage posts edit
        </button>

        <button
          onClick={() => {
            navigate("/manage-users");
          }}
        >
          Manage Users
        </button>
        <button
          onClick={() => {
            navigate("/manage-users/add");
          }}
        >
          Manage Users add
        </button>
        <button
          onClick={() => {
            navigate("/manage-users/changePassword");
          }}
        >
          Manage Users Change Password
        </button>
        <button
          onClick={() => {
            navigate("/manage-users/edit");
          }}
        >
          Manage Users Edit
        </button>

        <button
          onClick={() => {
            navigate("../post");
          }}
        >
          Post
        </button>

        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Nav;
