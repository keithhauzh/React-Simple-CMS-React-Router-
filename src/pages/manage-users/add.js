import Nav from "../../components/nav";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";

function ManageUsersAdd() {
  const navigate = useNavigate();
  return (
    <div>
      
      <div class="container mx-auto my-5" style={{ maxWidth: "700px" }}>
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h1 class="h1">Add New User</h1>
        </div>
        <div class="card mb-2 p-4">
          <form>
            <div class="mb-3">
              <div class="row">
                <div class="col">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div class="col">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input type="email" class="form-control" id="email" />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <div class="col">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input type="password" class="form-control" id="password" />
                </div>
                <div class="col">
                  <label for="confirm-password" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="confirm-password"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="role" class="form-label">
                Role
              </label>
              <select class="form-control" id="role">
                <option value="">Select an option</option>
                <option value="user">User</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div class="d-grid">
              <Button
                color="dark-blue"
                onClick={() => {
                  navigate("../manage-users");
                }}
              >
                Add
              </Button>
            </div>
          </form>
        </div>
        <div class="text-center text-primary">
          <p
            onClick={() => {
              navigate("../manage-users");
            }}
            class="btn btn-link btn-sm"
          >
            <i class="bi bi-arrow-left"></i> Back to Users
          </p>
        </div>
      </div>
    </div>
  );
}

export default ManageUsersAdd;
