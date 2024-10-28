import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../components/redux/slices/employeeSlice';
;

function Dashboard() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.employees);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchEmployees());
  }, [dispatch, status]);

  return (
    <div>
      <h1>Employee Dashboard</h1>
      {list.map((employee) => (
        <div key={employee.id}>
          <h2>{employee.name}</h2>
          <p>Department: {employee.department}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;


