import Nav from "../../components/nav";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";

function ManageUsers() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="h1">Manage Users</h1>
          <div className="text-end">
            <Button
              color="dark-blue"
              onClick={() => {
                navigate("./add");
              }}
            >
              Add New User
            </Button>
          </div>
        </div>
        <div className="card mb-2 p-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col" className="text-end">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">3</th>
                <td>Jack</td>
                <td>jack@gmail.com</td>
                <td>
                  <span className="badge bg-success">User</span>
                </td>
                <td className="text-end">
                  <div className="buttons">
                    <Button
                      onClick={() => {
                        navigate("./edit");
                      }}
                      size="small"
                      color="green"
                      margin="me-2"
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button
                      onClick={() => {
                        navigate("./change-password");
                      }}
                      size="small"
                      color="yellow"
                      margin="me-2"
                    >
                      <i className="bi bi-key"></i>
                    </Button>
                    <Button href="#" size="small" color="red" margin="me-2">
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jane</td>
                <td>jane@gmail.com</td>
                <td>
                  <span className="badge bg-info">Editor</span>
                </td>
                <td className="text-end">
                  <div className="buttons">
                    <Button
                      onClick={() => {
                        navigate("./edit");
                      }}
                      size="small"
                      color="green"
                      margin="me-2"
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button
                      onClick={() => {
                        navigate("./change-password");
                      }}
                      size="small"
                      color="yellow"
                      margin="me-2"
                    >
                      <i className="bi bi-key"></i>
                    </Button>
                    <Button href="#" size="small" color="red" margin="me-2">
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>John</td>
                <td>john@gmail.com</td>
                <td>
                  <span className="badge bg-primary">Admin</span>
                </td>
                <td className="text-end">
                  <div className="buttons">
                    <Button
                      onClick={() => {
                        navigate("./edit");
                      }}
                      size="small"
                      color="green"
                      margin="me-2"
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button
                      onClick={() => {
                        navigate("./change-password");
                      }}
                      size="small"
                      color="yellow"
                      margin="me-2"
                    >
                      <i className="bi bi-key"></i>
                    </Button>
                    <Button href="#" size="small" color="red" margin="me-2">
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center text-primary">
          <p
            onClick={() => {
              navigate("../dashboard");
            }}
            className="btn btn-link btn-sm"
          >
            <i className="bi bi-arrow-left"></i> Back to Dashboard
          </p>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
