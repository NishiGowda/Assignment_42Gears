import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './TableRow1.css'; // Update the path if TableRow.css is in a different directory

const TableRow = ({ item, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <tr className={`table-row ${isExpanded ? 'expanded' : ''}`}>
                <td data-label="S. No">{index}</td>
                <td data-label="Project">{item.project}</td>
                <td data-label="Progress">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: item.progress }}
                        ></div>
                    </div>
                    <span className="progress-text">{item.progress}</span>
                </td>
                <td data-label="Analysis">
                    <button className={`expand-button ${isExpanded ? 'expanded' : ''}`} onClick={handleExpandClick}>
                        {isExpanded ? 'View Less' : 'View More'}
                        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
                    </button>
                </td>
            </tr>
            {isExpanded && (
                <tr className="description-row">
                    <td colSpan="4">
                        <div className="description">
                            {item.description}
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
};

export default TableRow;
