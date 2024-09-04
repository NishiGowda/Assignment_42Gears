// // src/components/CardMenu.js
// import React from 'react';
// import styled from 'styled-components';
// import { FaShare, FaCopy, FaSync, FaBook, FaEdit, FaTrash } from 'react-icons/fa';

// const MenuWrapper = styled.div`
//   position: absolute;
//   right: 0;
//   top: 30px;
//   background-color: white;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 5px;
//   width: 150px;
//   z-index: 10;
// `;

// const MenuItem = styled.div`
//   padding: 10px;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #f0f0f0;
//   }

//   & svg {
//     margin-right: 10px;
//   }
// `;

// const CardMenu = () => {
//   return (
//     <MenuWrapper>
//       <MenuItem>
//         <FaShare /> Share Project
//       </MenuItem>
//       <MenuItem>
//         <FaCopy /> Copy Project
//       </MenuItem>
//       <MenuItem>
//         <FaSync /> Refresh
//       </MenuItem>
//       <MenuItem>
//         <FaBook /> Logs
//       </MenuItem>
//       <MenuItem>
//         <FaEdit /> Edit
//       </MenuItem>
//       <MenuItem>
//         <FaTrash /> Delete
//       </MenuItem>
//     </MenuWrapper>
//   );
// };

// export default CardMenu;


import React from 'react';
import styled from 'styled-components';
import { FaShare, FaCopy, FaSync, FaBook, FaEdit, FaTrash } from 'react-icons/fa';

const MenuWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 150px;
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  & svg {
    margin-right: 10px;
  }
`;

const CardMenu = () => {
  return (
    <MenuWrapper>
      <MenuItem>
        <FaShare /> Share Project
      </MenuItem>
      <MenuItem>
        <FaCopy /> Copy Project
      </MenuItem>
      <MenuItem>
        <FaSync /> Refresh
      </MenuItem>
      <MenuItem>
        <FaBook /> Logs
      </MenuItem>
      <MenuItem>
        <FaEdit /> Edit
      </MenuItem>
      <MenuItem>
        <FaTrash /> Delete
      </MenuItem>
    </MenuWrapper>
  );
};

export default CardMenu;
