import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/user/userSlice";
import {v4 as uuid} from "uuid";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  // const users = useSelector((state) => state.users);
  const [user, setUser] = useState({username: "", email: ""});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({
      ...user,
      id: uuid()
    }));
    navigate("/");
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-12">
          <div className="mt-4">
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              name="username"
              onChange={handleChange}
              value={user.username}
              autoFocus
            />
          </div>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={user.email}
            />
          </div>
          <div className="mt-4 text-center">
            <button className="btn btn-outline-primary" onClick={handleSubmit}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
