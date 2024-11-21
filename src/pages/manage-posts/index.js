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
                    <Button
                      onClick={() => {
                        navigate("../post");
                      }}
                      margin="me-2"
                      color="dark-blue"
                      size="small"
                    >
                      <i className="bi bi-eye"></i>
                    </Button>
                    <Button
                      onClick={() => {
                        navigate("../manage-posts/edit");
                      }}
                      margin="me-2"
                      color="yellow"
                      size="small"
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button href="#" margin="me-2" size="small" color="red">
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Post 4</td>
                <Badge label="Published" />

                <td className="text-end">
                  <div className="buttons">
                    <Button
                      onClick={() => {
                        navigate("../post");
                      }}
                      margin="me-2"
                      color="dark-blue"
                      size="small"
                    >
                      <i className="bi bi-eye"></i>
                    </Button>
                    <Button
                      onClick={() => {
                        navigate("../manage-posts/edit");
                      }}
                      margin="me-2"
                      color="yellow"
                      size="small"
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button href="#" margin="me-2" size="small" color="red">
                      <i className="bi bi-trash"></i>
                    </Button>
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
                      href="/post"
                      target="_blank"
                      className="btn btn-sm btn-primary me-2"
                    >
                      <i className="bi bi-eye"></i>
                    </a>
                    <Button
                      onClick={() => {
                        navigate("../manage-posts/edit");
                      }}
                      margin="me-2"
                      color="yellow"
                      size="small"
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button href="#" margin="me-2" size="small" color="red">
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Post 2</td>
                <Badge label="Pending Review" />

                <td className="text-end">
                  <div className="buttons">
                    <Button
                      onClick={() => {
                        navigate("../post");
                      }}
                      margin="me-2"
                      color="dark-blue"
                      size="small"
                    >
                      <i className="bi bi-eye"></i>
                    </Button>
                    <Button
                      onClick={() => {
                        navigate("../manage-posts/edit");
                      }}
                      margin="me-2"
                      color="yellow"
                      size="small"
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button href="#" margin="me-2" size="small" color="red">
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Post 1</td>
                <Badge label="Published" />

                <td className="text-end">
                  <div className="buttons">
                    <Button
                      onClick={() => {
                        navigate("../post");
                      }}
                      margin="me-2"
                      color="dark-blue"
                      size="small"
                    >
                      <i className="bi bi-eye"></i>
                    </Button>
                    <Button
                      onClick={() => {
                        navigate("../manage-posts/edit");
                      }}
                      margin="me-2"
                      color="yellow"
                      size="small"
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button href="#" margin="me-2" size="small" color="red">
                      <i className="bi bi-trash"></i>
                    </Button>
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
