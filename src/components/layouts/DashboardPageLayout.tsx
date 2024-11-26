import React from 'react'

interface IProps {
    title: string;
    children: React.ReactNode;
}
export default function DashboardPageLayout({ title, children }: IProps) {

    return (
        <div>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <main>{children}</main>
        </div>
    )
}
