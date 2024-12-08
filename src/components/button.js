import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${({ color }) => color || '#007bff'};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-family: 'Fira Code', monospace;
  &:hover {
    opacity: 0.9;
  }
`;

export default function Button({ color, children, onClick }) {
    return <StyledButton color={color} onClick={onClick}>{children}</StyledButton>;
}
