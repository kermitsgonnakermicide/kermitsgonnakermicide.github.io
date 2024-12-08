import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: #f8f9fa url('/grid.png');
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Fira Code', monospace;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-family: 'Fira Code', monospace;
  &:hover {
    background: #0056b3;
  }
`;

export default function IntroPage() {
    return (
        <Container>
            <h1>Welcome to My Portfolio</h1>
            <p>Developer | Creator | Innovator</p>
            <Button onClick={() => (window.location.href = '/projects')}>Explore Projects</Button>
        </Container>
    );
}
