import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #f8f9fa;
  padding: 1rem;
  font-family: 'Fira Code', monospace;
`;

export default function Header() {
    return (
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </Nav>
    );
}
