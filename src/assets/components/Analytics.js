import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { department: 'HR', employees: 5, salary: 5000 },
  { department: 'IT', employees: 8, salary: 8000 },
];

function Analytics() {
  return (
    <div>
      <h1>Analytics</h1>
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="department" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="employees" fill="#8884d8" />
      </BarChart>
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="department" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="salary" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default Analytics;


