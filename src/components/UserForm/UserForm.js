import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../../features/user/userSlice";
import {v4 as uuid} from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const UserForm = () => {
  const users = useSelector((state) => state.users);
  const [user, setUser] = useState({username: "", email: ""});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(params.id) {
      dispatch(editUser(user));
    } else {
      dispatch(addUser({
        ...user,
        id: uuid()
      }));
    }
    navigate("/");
  }

  useEffect(() => {
    if(params.id) {
      setUser(users.find((user) => user.id === params.id));
    }
  }, [params.id, user]);

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
