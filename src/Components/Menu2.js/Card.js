// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { FaEllipsisV, FaPlay, FaStop } from 'react-icons/fa';
// import CardMenu from './CardMenu';

// const CardWrapper = styled(motion.div)`
//   background-color: white;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   margin-bottom: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 100%;
//   max-width: 400px;
//   position: relative;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     max-width: 100%;
//   }
// `;

// const CardHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const CardStatus = styled.div`
//   color: ${(props) => (props.running ? 'green' : 'red')};
//   font-weight: bold;
// `;

// const CardContent = styled.p`
//   margin: 10px 0;
//   font-size: 14px;
//   color: #333;
// `;

// const CardFooter = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 20px;
// `;

// const Button = styled.button`
//   background-color: ${(props) => (props.running ? 'red' : 'green')};
//   color: white;
//   border: none;
//   border-radius: 8px;
//   padding: 12px 20px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.3s ease;
//   margin: 5px;

//   &:hover {
//     transform: scale(1.1);
//   }

//   &:focus {
//     outline: none;
//   }
// `;

// const ProgressWrapper = styled.div`
//   width: 100%;
//   margin-top: 10px;
//   text-align: center;

//   & > div {
//     margin-bottom: 5px;
//   }

//   & progress {
//     width: 100%;
//     height: 8px;
//     border-radius: 5px;
//   }
// `;

// const EllipsisButton = styled.div`
//   cursor: pointer;
//   position: relative;
//   margin-left: 10px;

//   & svg {
//     font-size: 20px;
//   }
// `;

// const Card = ({ running, content, time, progress, error }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <CardWrapper
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <CardHeader>
//         <h4>User: sayedameen_Pro</h4>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <CardStatus running={running}>{running ? 'Running' : 'Not Running'}</CardStatus>
//           <EllipsisButton onClick={toggleMenu}>
//             <FaEllipsisV />
//             {menuOpen && <CardMenu />}
//           </EllipsisButton>
//         </div>
//       </CardHeader>
//       <CardContent>{content}</CardContent>
//       <CardFooter>
//         <div>
//           <Button running={running}>
//             {running ? <FaStop /> : <FaPlay />} {running ? 'Stop' : 'Start'}
//           </Button>
//         </div>
//         <span>{time}</span>
//         <ProgressWrapper>
//           <div>Packages: {error ? `Error: ${error}` : `Downloading... ${progress}%`}</div>
//           <progress value={progress} max="100"></progress>
//         </ProgressWrapper>
//       </CardFooter>
//     </CardWrapper>
//   );
// };

// export default Card;

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEllipsisV, FaPlay, FaStop } from 'react-icons/fa';
import CardMenu from './CardMenu';

const CardWrapper = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardStatus = styled.div`
  color: ${(props) => (props.running ? 'green' : 'red')};
  font-weight: bold;
`;

const CardContent = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #333;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.running ? 'red' : 'green')};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 5px;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const ProgressWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  text-align: center;

  & > div {
    margin-bottom: 5px;
  }

  & progress {
    width: 100%;
    height: 8px;
    border-radius: 5px;
  }
`;

const EllipsisButton = styled.div`
  cursor: pointer;
  position: relative;
  margin-left: 10px;

  & svg {
    font-size: 20px;
  }
`;

const Card = ({ running, content, time, progress, error }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <CardWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardHeader>
        <h4>User: sayedameen_Pro</h4>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CardStatus running={running}>{running ? 'Running' : 'Not Running'}</CardStatus>
          <EllipsisButton onClick={toggleMenu}>
            <FaEllipsisV />
            {menuOpen && <CardMenu />}
          </EllipsisButton>
        </div>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>
        <div>
          <Button running={running}>
            {running ? <FaStop /> : <FaPlay />} {running ? 'Stop' : 'Start'}
          </Button>
        </div>
        <span>{time}</span>
        <ProgressWrapper>
          <div>Packages: {error ? `Error: ${error}` : `Downloading... ${progress}%`}</div>
          <progress value={progress} max="100"></progress>
        </ProgressWrapper>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;


