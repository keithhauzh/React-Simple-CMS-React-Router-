import Nav from "../../components/nav";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      
      <div className="container mx-auto my-5" style={{ maxWidth: "800px" }}>
        <h1 className="h1 mb-4 text-center">Dashboard</h1>
        <div className="row">
          <div className="col">
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title text-center">
                  <div className="mb-1">
                    <i
                      className="bi bi-pencil-square"
                      style={{ fontSize: "3rem" }}
                    ></i>
                  </div>
                  Manage Posts
                </h5>
                <div className="text-center mt-3">
                  <a
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      navigate("../manage-posts");
                    }}
                  >
                    Access
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title text-center">
                  <div className="mb-1">
                    <i
                      className="bi bi-people"
                      style={{ fontSize: "3rem" }}
                    ></i>
                  </div>
                  Manage Users
                </h5>
                <div className="text-center mt-3">
                  <a
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      navigate("../manage-users");
                    }}
                  >
                    Access
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p
            onClick={() => {
              navigate("../");
            }}
            className="btn btn-link btn-sm"
          >
            <i className="bi bi-arrow-left"></i> Back
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
