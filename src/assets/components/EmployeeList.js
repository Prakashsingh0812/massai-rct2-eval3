import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../redux/slices/employeeSlice';

function EmployeeList() {
  const dispatch = useDispatch();
  const { list: employees, status } = useSelector((state) => state.employees);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEmployees());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h1>Employee List</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              <h2>{employee.name}</h2>
              <p>Position: {employee.position}</p>
              <p>Department: {employee.department}</p>
              <p>Email: {employee.email}</p>
            </li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>Failed to load employees.</p>}
    </div>
  );
}

export default EmployeeList;


