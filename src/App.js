import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";

import Home from "./pages/home";

import Login from "./pages/login";

import ManagePosts from "./pages/manage-posts";
import ManagePostsAdd from "./pages/manage-posts/add";
import ManagePostsEdit from "./pages/manage-posts/edit";

import ManageUsers from "./pages/manage-users";
import ManageUsersAdd from "./pages/manage-users/add";
import ManageUsersEdit from "./pages/manage-users/edit";
import ManageUsersChangePassword from "./pages/manage-users/change-password";

import Post from "./pages/post";

import Signup from "./pages/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/" element={<Home />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/manage-posts" element={<ManagePosts />}></Route>
          <Route path="/manage-posts/add" element={<ManagePostsAdd />}></Route>
          <Route
            path="/manage-posts/edit"
            element={<ManagePostsEdit />}
          ></Route>

          <Route path="/manage-users" element={<ManageUsers />}></Route>
          <Route path="/manage-users/add" element={<ManageUsersAdd />}></Route>
          <Route
            path="/manage-users/edit"
            element={<ManageUsersEdit />}
          ></Route>
          <Route
            path="/manage-users/change-password"
            element={<ManageUsersChangePassword />}
          ></Route>

          <Route path="/post" element={<Post />}></Route>

          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
