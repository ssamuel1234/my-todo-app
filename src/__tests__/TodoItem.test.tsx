//import React from 'react'; 
import { render, screen } from '@testing-library/react';
import TodoItem from '../TodoItem';

describe('TodoItem', () => {
    it(' S7: render todo name', () => {
        const todo = { name: 'Test Todo', completed: false };
        render(<TodoItem todo={todo} />);
        expect(screen.getByText('Test Todo')).toBeInTheDocument();
    });

    it('S8 : renders completed todo with checked checkbox', () => {
        const todo = { name: 'Test Todo', completed: true };
        render(<TodoItem todo={todo} />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });
})


