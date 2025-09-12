//import React from 'react'; 
import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from '../TodoItem';

describe('TodoItem', () => {
    it(' S7: render todo name', () => {
        const todo = { id: '1', name: 'Test Todo', completed: false };
        // test
        render(<TodoItem todo={todo} onToggle={function (id: string): void {
            throw new Error('Function not implemented.');
        } } onUpdate={function (id: string, name: string): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(screen.getByText('Test Todo')).toBeInTheDocument();
    });

    it('S8 : renders completed todo with checked checkbox', () => {
        const todo = { id: '1', name: 'Test Todo', completed: true };
        render(<TodoItem todo={todo} onToggle={function (id: string): void {
            throw new Error('Function not implemented.');
        } } onUpdate={function (id: string, name: string): void {
            throw new Error('Function not implemented.');
        } } />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });

    it('S9 : calls onToggle when checkbox is clicked', () => {
        const todo = { id: '1', name: 'Test Todo', completed: false };
        const onToggle = jest.fn();
        render(<TodoItem todo={todo} onToggle={onToggle} onUpdate={function (id: string, name: string): void {
            throw new Error('Function not implemented.');
        } } />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(onToggle).toHaveBeenCalledWith('1');
    });

    it('S10 : renders edit button', () => {
        const todo = { id: '1', name: 'Test Todo', completed: false };
        render(<TodoItem todo={todo} onToggle={() => { } } onUpdate={function (id: string, name: string): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
    });

    it('S11 : enters edit mode on edit button click', () => {
        const todo = { id: '1', name: 'Test Todo', completed: false };
        render(<TodoItem todo={todo} onToggle={() => { } } onUpdate={function (id: string, name: string): void {
            throw new Error('Function not implemented.');
        } } />);
        const editButton = screen.getByRole('button', { name: /edit/i });
        fireEvent.click(editButton);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toHaveValue('Test Todo');
    });

    it('S12 : calls onUpdate with new name on save', () => {
        const todo = { id: '1', name: 'Test Todo', completed: false };
        const onUpdate = jest.fn();
        render(<TodoItem todo={todo} onToggle={() => { }} onUpdate={onUpdate} />);
        fireEvent.click(screen.getByRole('button', { name: /edit/i }));
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Updated Todo' } });
        fireEvent.click(screen.getByRole('button', { name: /save/i }));
        expect(onUpdate).toHaveBeenCalledWith('1', 'Updated Todo');
    });
});


