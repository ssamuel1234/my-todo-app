import React from 'react'; 
import { render, screen } from '@testing-library/react';
import TodoItem from '../TodoItem';

it(' S7: render todo name', () => {
    const todo = { name: 'Test Todo', completed: false };
    render(<TodoItem todo={todo} />);
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
});