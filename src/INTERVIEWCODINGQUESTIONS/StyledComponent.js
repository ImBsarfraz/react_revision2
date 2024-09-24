import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4CAF50;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin: 20px 0;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  width: 300px;
`;

export const StyledComponent = () => {
  return (
    <Container>
      <Title>Styled Components Example</Title>
      <Input placeholder="Type something..." />
      <Button>Click Me</Button>
    </Container>
  );
};