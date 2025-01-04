import React, { useState } from 'react';
import { deleteEmployee, getEmployees } from '../utils/localStorageAPI';

const EmployeeList = () => {
  const [employees, setEmployees] = useState(getEmployees());
  
  const refreshEmployees = () => {
    setEmployees(getEmployees());
  };

  return (
    <div className="employee-list">
      {employees?.map((emp) => (
        <div key={emp.id} className="employee-card">
          <h3>{emp.firstName} {emp.middleName} {emp.lastName}</h3>
          <p><strong>Email:</strong> {emp.email}</p>
          <p><strong>Phone:</strong> {emp.phoneNumber}</p>
          <p><strong>Designation:</strong> {emp.designation}</p>
          <p><strong>Experience:</strong> {emp.experience} months</p>
          <p><strong>Department:</strong> {emp.department}</p>
          <button className="delete-button" onClick={() => { deleteEmployee(emp.id); refreshEmployees(); }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
