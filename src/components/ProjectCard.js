import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 1rem;
  background: #ffd700;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Code', monospace;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export default function ProjectCard({ title }) {
    return <Card>{title}</Card>;
}
