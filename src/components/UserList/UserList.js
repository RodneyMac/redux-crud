import React from 'react';

const UserList = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='row text-center'>
        <div className='col-md-12'>
          <div className='text-info mt-2'>User List</div>
        </div>
        <div className='d-flex justify-content-between'>
          <button className='btn btn-outline-secondary'>Edit</button>
          <button className='btn btn-outline-danger'>Delete</button>
        </div>
        <hr className='text-secondary mt-2'/>
      </div>
    </div>
  )
}

export default UserList;