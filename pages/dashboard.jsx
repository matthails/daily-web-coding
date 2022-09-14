import React from 'react';
import { withProtected } from '../utils/route';

const Dashboard = () => {
  return (
    <div className="flex justify-center py-12 sm:px-6 lg:px-8">
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Dashboard
      </h2>
    </div>
  );
};

export default withProtected(Dashboard);
