import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 2rem;
`;

const Button = styled.button`
  background: #ffd700;
  border: none;
  border-radius: 50px;
  padding: 1rem;
  font-family: 'Fira Code', monospace;
  cursor: pointer;
  &:hover {
    background: #e0b800;
  }
`;

export default function ProjectsPage() {
    return (
        <>
            <Header />
            <Grid>
                <Button>Project 1</Button>
                <Button>Project 2</Button>
                <Button>Project 3</Button>
            </Grid>
        </>
    );
}
