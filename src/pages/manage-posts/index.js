import { Link, useNavigate } from "react-router-dom";
import Badge from "../../components/badge";
import Button from "../../components/button";

function ManagePosts() {
  const navigate = useNavigate();
  /*
    1. [x] load the data from the local storage
  */
  const posts = [
    {
      id: 5,
      title: "Post 5",
      content: "content",
      status: "pending",
    },
    { id: 4, title: "Post 4", content: "content", status: "pending" },
    { id: 3, title: "Post 3", content: "content", status: "publish" },
    { id: 2, title: "Post 2", content: "content", status: "publish" },
    { id: 1, title: "Post 1", content: "content", status: "publish" },
  ];
  return (
    <div>
      <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="h1">Manage Posts</h1>
          <div className="text-end">
            <Button
              color="dark-blue"
              onClick={() => {
                navigate("./add");
              }}
            >
              Add New Post
            </Button>
          </div>
        </div>
        <div className="card mb-2 p-4">
          <table className="table">
            <thead>
              {posts.map((post) => (
                <tr>
                  <th scope="row">{post.id}</th>

                  <td>{post.title}</td>

                  <td>
                    {post.status === "publish" ? (
                      <Badge color="green">{post.status}</Badge>
                    ) : (
                      <Badge color="yellow">{post.status}</Badge>
                    )}
                  </td>

                  <td className="text-end">
                    <div className="buttons d-flex justify-content-end gap-2">
                      <a
                        href="/post"
                        target="_blank"
                        className="btn btn-primary btn-sm"
                      >
                        <i className="bi bi-eye"></i>
                      </a>
                      <Button
                        color="yellow"
                        size="small"
                        onClick={() => {
                          navigate("/manage-posts/edit");
                        }}
                      >
                        <i className="bi bi-pencil"></i>
                      </Button>
                      <Button color="red" size="small" onClick={() => {}}>
                        <i className="bi bi-trash"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </thead>
          </table>
        </div>
        <div className="text-center">
          <Link to="/dashboard" className="btn btn-link btn-sm">
            <i className="bi bi-arrow-left"></i> Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ManagePosts;
