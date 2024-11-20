import Nav from "../../components/nav";
import { useNavigate } from "react-router-dom";
import Badge from "../../components/badge";
import Button from "../../components/button";

function ManagePosts() {
  const navigate = useNavigate();
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
              <tr>
                <th scope="col">ID</th>
                <th scope="col" style={{ width: "40%" }}>
                  Title
                </th>
                <th scope="col">Status</th>
                <th scope="col" className="text-end">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">5</th>
                <td>Post 5</td>
                <Badge label="Published" />
                <td className="text-end">
                  <div className="buttons">
                    <a
                      onClick={() => {
                        navigate("../post");
                      }}
                      target="_blank"
                      className="btn btn-primary btn-sm me-2 disabled"
                    >
                      <i className="bi bi-eye"></i>
                    </a>
                    <a
                      onClick={() => {
                        navigate("/manage-posts/edit");
                      }}
                      className="btn btn-secondary btn-sm me-2"
                    >
                      <i className="bi bi-pencil"></i>
                    </a>
                    <a href="#" className="btn btn-danger btn-sm">
                      <i className="bi bi-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Post 4</td>
                <Badge label="Published" />

                <td className="text-end">
                  <div className="buttons">
                    <a
                      onClick={() => {
                        navigate("../post");
                      }}
                      target="_blank"
                      className="btn btn-primary btn-sm me-2"
                    >
                      <i className="bi bi-eye"></i>
                    </a>
                    <a
                      onClick={() => {
                        navigate("/manage-posts/edit");
                      }}
                      className="btn btn-secondary btn-sm me-2"
                    >
                      <i className="bi bi-pencil"></i>
                    </a>
                    <a href="#" className="btn btn-danger btn-sm">
                      <i className="bi bi-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Post 3</td>
                <Badge label="Published" />

                <td className="text-end">
                  <div className="buttons">
                    <a
                      onClick={() => {
                        navigate("../post");
                      }}
                      target="_blank"
                      className="btn btn-primary btn-sm me-2"
                    >
                      <i className="bi bi-eye"></i>
                    </a>
                    <a
                      onClick={() => {
                        navigate("/manage-posts/edit");
                      }}
                      className="btn btn-secondary btn-sm me-2"
                    >
                      <i className="bi bi-pencil"></i>
                    </a>
                    <a href="#" className="btn btn-danger btn-sm">
                      <i className="bi bi-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Post 2</td>
                <Badge label="Pending Review" />

                <td className="text-end">
                  <div className="buttons">
                    <a
                      onClick={() => {
                        navigate("../post");
                      }}
                      target="_blank"
                      className="btn btn-primary btn-sm me-2"
                    >
                      <i className="bi bi-eye"></i>
                    </a>
                    <a
                      onClick={() => {
                        navigate("/manage-posts/edit");
                      }}
                      className="btn btn-secondary btn-sm me-2"
                    >
                      <i className="bi bi-pencil"></i>
                    </a>
                    <a href="#" className="btn btn-danger btn-sm">
                      <i className="bi bi-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Post 1</td>
                <Badge label="Published" />

                <td className="text-end">
                  <div className="buttons">
                    <a
                      onClick={() => {
                        navigate("../post");
                      }}
                      target="_blank"
                      className="btn btn-primary btn-sm me-2"
                    >
                      <i className="bi bi-eye"></i>
                    </a>
                    <a
                      onClick={() => {
                        navigate("/manage-posts/edit");
                      }}
                      className="btn btn-secondary btn-sm me-2"
                    >
                      <i className="bi bi-pencil"></i>
                    </a>
                    <a href="#" className="btn btn-danger btn-sm">
                      <i className="bi bi-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <p
            onClick={() => {
              navigate("../dashboard");
            }}
            className="btn btn-link btn-sm text-primary"
          >
            <i className="bi bi-arrow-left"></i> Back to Dashboard
          </p>
        </div>
      </div>
    </div>
  );
}

export default ManagePosts;
