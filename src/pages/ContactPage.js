import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem;
  font-family: 'Fira Code', monospace;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

export default function ContactPage() {
    return (
        <>
            <Header />
            <Grid>
                <Button>GitHub</Button>
                <Button>Discord</Button>
                <Button>Email</Button>
            </Grid>
        </>
    );
}
