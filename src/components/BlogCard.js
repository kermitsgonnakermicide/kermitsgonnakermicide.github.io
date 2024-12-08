import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function BlogCard({ title, summary }) {
    return (
        <Card>
            <h3>{title}</h3>
            <p>{summary}</p>
        </Card>
    );
}
