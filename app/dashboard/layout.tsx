import React from 'react';

const DashboardLayput = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col gap-y-4'>
            <nav className='bg-orange-500 text-white p-4'>
                This is a shared navbar for dashboard segement
            </nav>
            {children}
        </div>
    );
};

export default DashboardLayput;
