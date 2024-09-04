// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import './TableRow.css';

// const TableRow = ({ item, index }) => {
//     const [isExpanded, setIsExpanded] = useState(false);

//     const handleExpandClick = () => {
//         setIsExpanded(!isExpanded);
//     };

//     return (
//         <>
//             <tr className="table-row">
//                 <td>{index}</td>
//                 <td>{item.project}</td>
//                 <td>{item.progress}</td>
//                 <td className="analysis-cell">
//                     <button onClick={handleExpandClick}>
//                         {isExpanded ? 'View Less' : 'View More'}
//                         <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
//                     </button>
//                 </td>
//             </tr>
//             {isExpanded && (
//                 <tr className="description-cell">
//                     <td colSpan="4">
//                         <div className="description">
//                             {item.description}
//                         </div>
//                     </td>
//                 </tr>
//             )}
//         </>
//     );
// };

// export default TableRow;


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './TableRow.css';

const TableRow = ({ item, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <tr className="table-row">
                <td>{index}</td>
                <td>{item.project}</td>
                <td>{item.progress}</td>
                <td className="analysis-cell">
                    <button onClick={handleExpandClick}>
                        {isExpanded ? 'View Less' : 'View More'}
                        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
                    </button>
                </td>
            </tr>
            {isExpanded && (
                <tr className="description-row">
                    <td colSpan="4">
                        <div className="description">
                            {item.description.split('\n').map((line, idx) => (
                                <React.Fragment key={idx}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
};

export default TableRow;
