import React, { useState } from 'react';
import { addEmployee, getEmployees } from '../utils/localStorageAPI';
// import './AddEmployee/AddEmployee.scss';

const AddEmployee = () => {
    const [employees, setEmployees] = useState(getEmployees());
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        designation: '',
        experience: '',
        department: '',
      });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const refreshEmployees = () => {
    setEmployees(getEmployees());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { ...formData, id: Date.now() };
    addEmployee(newEmployee);
    refreshEmployees();
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      designation: '',
      experience: '',
      department: '',
    });
  };

  return (
    <div className="add-employee">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle Name</label>
          <input type="text" id="middleName" name="middleName" value={formData.middleName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Total Experience (in months)</label>
          <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select id="department" name="department" value={formData.department} onChange={handleChange} required>
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
