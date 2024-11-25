import DashboardLayout from '../../components/layouts/DashboardLayout'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <>
            <DashboardLayout>
                <Outlet />
            </DashboardLayout>
        </>
    )
}
