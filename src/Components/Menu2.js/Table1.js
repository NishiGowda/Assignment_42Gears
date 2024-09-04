import React, { useState, useEffect } from 'react';
import TableRow from './TableRow1'; // Update the path if TableRow.js is in a different directory
import './Table1.css'; // Update the path if Table.css is in a different directory

const Table1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Replace with your actual data fetching logic
        setData([
            { id: 1, project: 'Template 101', progress: '47%', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
            { id: 2, project: 'Template 174', progress: '27%', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
            { id: 3, project: 'Template 256', progress: '71%', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
            { id: 4, project: 'Template 345', progress: '50%', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
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

export default Table1;
