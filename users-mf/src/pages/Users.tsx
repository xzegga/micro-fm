import React from 'react';
import DataTable from '../components/DataTable/DataTable';
import './Users.scss';

interface UsersProps {
    name?: string;
}

const Users: React.FC<UsersProps> = ({ name }) => {
    return (
        <div className='user-content'>
           <h2 className='user-title'>User List</h2>
           <DataTable />
        </div>
    );
};

export default Users;
