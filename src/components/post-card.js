import { useNavigate } from "react-router-dom";

function PostCard(props) {
  const { label = "Post ???", children } = props;
  const navigate = useNavigate();

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{label}</h5>
        <p className="card-text">{children}</p>
        <div className="text-end">
          <a
            onClick={() => {
              navigate("../post");
            }}
            className="btn btn-primary btn-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
