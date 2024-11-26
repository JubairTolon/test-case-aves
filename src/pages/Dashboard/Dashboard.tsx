import { Outlet } from 'react-router-dom';
import DashboardLayout from '../../components/layouts/DashboardLayout';

export default function Dashboard() {
    return (
        <DashboardLayout>
            <Outlet />
        </DashboardLayout>
    )
}
