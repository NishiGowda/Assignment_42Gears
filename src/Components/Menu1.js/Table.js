import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import './Table.css';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Replace with your actual data fetching logic
        setData([
            { id: 1, project: 'Template 101', progress: '47%', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { id: 2, project: 'Template 174', progress: '27%', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { id: 3, project: 'Template 256', progress: '71%', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { id: 4, project: 'Template 345', progress: '50%', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        ]);
    }, []);

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>S. No</th>
                        <th>Project</th>
                        <th>Progress</th>
                        <th>Analysis</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <TableRow key={item.id} item={item} index={index + 1} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;



