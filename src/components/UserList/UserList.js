import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-warning d-flex justify-content-center mt-2">
        Users: <div className="mx-1 text-info">{users.length}</div>
      </div>
      <div className="row w-100 mt-2">
        {users.map((item) => (
          <div className="col-md-4 d-flex flex-column" key={item.id}>
            <div className="text-info d-flex">
              ID: <div className="text-white mx-1">{item.id}</div>
            </div>
            <div className="text-info d-flex">
              Username: <div className="text-white mx-1">{item.username}</div>
            </div>
            <div className="text-info d-flex">
              Email: <div className="text-white mx-1">{item.email}</div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <button className="btn btn-outline-secondary">Edit</button>
              <button className="btn btn-outline-danger">Delete</button>
            </div>
            <hr className="text-secondary mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
