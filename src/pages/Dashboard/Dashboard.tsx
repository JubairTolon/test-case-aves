import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLayout from '../../components/layouts/DashboardLayout';

const Dashboard: React.FC = () => {
    return (
        <DashboardLayout>
            <Outlet />
        </DashboardLayout>
    );
};

export default Dashboard;
