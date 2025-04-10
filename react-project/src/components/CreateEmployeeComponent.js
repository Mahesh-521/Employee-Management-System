import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function CreateEmployeeComponent()
{
  
    let navigate = useNavigate();
    
    const [employee,setEmployee]=useState({
        firstName:"",
        lastName:"",
        email:""
      })


  const handleClick=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setEmployee({... employee,[name]:value});
  }    

  const saveHandler=(e)=>
  {
      e.preventDefault();
      console.log("employee =>"+JSON.stringify(employee));
     EmployeeService.createEmployee(employee).then(res=>
     {
        navigate("/employees");
     }
     )
  }

  
  const cancelHandler=(e)=>
  {
    navigate('/employees');
  }
 
  
    return (
      <div className="container mt-3">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center mt-3">Add Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group my-2">
                    <label htmlFor='firstName' className='my-3'>First Name:</label>
                    <input type='text' placeholder="First Name" name="firstName" id='firstName' className="form-control"
                           value={employee.firstName} onChange={handleClick} autoComplete='off'/>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor='lastName' className='my-3'>Last Name:</label>
                    <input type='text' placeholder="Last Name" name="lastName" id='lastName' className="form-control"
                           value={employee.lastName} onChange={handleClick} autoComplete='off'/>
                  </div>

                  <div className="form-group my-2">
                    <label htmlFor='email' className='my-3'>Email:</label>
                    <input type='email' placeholder="Email" name="email" id='email' className="form-control"
                           value={employee.email} onChange={handleClick} autoComplete='off'/>
                  </div>
                  <button className='btn btn-success my-4' onClick={saveHandler}>save</button>
                  <button className='btn btn-danger my-4' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
                </form>
              </div>
            </div>
          </div>  
      </div>

    )
  }