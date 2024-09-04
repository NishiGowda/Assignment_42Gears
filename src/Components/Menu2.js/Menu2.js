// src/components/Menu2.js
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Menu2Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Menu2 = () => {
  const cards = [
    { running: true, content: "Lorem Ipsum content", time: "3.1 hrs", progress: 60 },
    { running: false, content: "Lorem Ipsum content", time: "3.1 hrs", progress: 30, error: "Error package demo" },
    { running: true, content: "Lorem Ipsum content", time: "3.1 hrs", progress: 60 },
    { running: false, content: "Lorem Ipsum content", time: "3.1 hrs", progress: 30, error: "Error package demo" },
  ];

  return (
    <Menu2Wrapper>
      {cards.map((card, index) => (
        <Card
          key={index}
          running={card.running}
          content={card.content}
          time={card.time}
          progress={card.progress}
          error={card.error}
        />
      ))}
    </Menu2Wrapper>
  );
};

export default Menu2;
