import React from 'react';

const UserForm = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='mt-4'>
            <input type="text" placeholder="Username" className='form-control'/>
          </div>
          <div className='mt-4'>
            <input type="email" placeholder="Email" className='form-control'/>
          </div>
          <div className='mt-4 text-center'>
            <button className='btn btn-outline-primary'>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserForm;