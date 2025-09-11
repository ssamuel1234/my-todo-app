//import React from 'react'; 
import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from '../TodoItem';

describe('TodoItem', () => {
    it(' S7: render todo name', () => {
        const todo = { id: '1', name: 'Test Todo', completed: false };
        render(<TodoItem todo={todo} />);
        expect(screen.getByText('Test Todo')).toBeInTheDocument();
    });

    it('S8 : renders completed todo with checked checkbox', () => {
        const todo = { id: '1', name: 'Test Todo', completed: true };
        render(<TodoItem todo={todo} />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });

    it('S9 : calls onToggle when checkbox is clicked', () => {
        const todo = { id: '1', name: 'Test Todo', completed: false };
        const onToggle = jest.fn();
        render(<TodoItem todo={todo} onToggle={onToggle} />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(onToggle).toHaveBeenCalledWith('1');
    });
    it('S10 : renders edit button', () => {
        const todo = { id: '1', name: 'Test Todo', completed: false };
        render(<TodoItem todo={todo} onToggle={() => { }} />);
        expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
    });
});


