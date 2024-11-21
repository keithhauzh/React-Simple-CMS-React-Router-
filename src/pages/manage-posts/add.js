import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function ManagePostsAdd() {
  const navigate = useNavigate();
  /* 
    1. [x] set state for all the input fields
    2. [] add onClick event handling to the add button
    3. [x] save the data into local storage
  */
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate("/manage-post");
  };

  return (
    <div>
      <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="h1">Add New Post</h1>
        </div>
        <div className="card mb-2 p-4">
          <form>
            <div className="mb-3">
              <label for="post-title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="post-title"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="post-content" className="form-label">
                Content
              </label>
              <textarea
                className="form-control"
                id="post-content"
                rows="10"
                onChange={(event) => {
                  setContent(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="text-end">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleFormSubmit}
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="text-center text-primary">
          <p
            onClick={() => {
              navigate("../dashboard");
            }}
            className="btn btn-link btn-sm"
          >
            <i className="bi bi-arrow-left"></i> Back to Posts
          </p>
        </div>
      </div>
    </div>
  );
}

export default ManagePostsAdd;
