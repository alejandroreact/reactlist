import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

//Add ref.current.scrollTo as a mock function
const scrollToMock = jest.fn();
window.HTMLElement.prototype.scrollTo = scrollToMock;

test('renders technical proof initial data', () => {
  render(<App />);
  const headerElement = screen.getByText(/technical proof/i);
  expect(headerElement).toBeInTheDocument();
  const headerElement2 = screen.getByText(/Lorem ipsum/i);
  expect(headerElement2).toBeInTheDocument();
  const itemElement1 = screen.getByText(/Item1/i);
  expect(itemElement1).toBeInTheDocument();
  const itemElement2 = screen.getByText(/Item2/i);
  expect(itemElement2).toBeInTheDocument();
  const itemElement3 = screen.getByText(/Item3/i);
  expect(itemElement3).toBeInTheDocument();
  const itemElement4 = screen.getByText(/Item4/i);
  expect(itemElement4).toBeInTheDocument();
  const buttonElement1 = screen.getByTitle (/Undo/i);
  expect(buttonElement1).toBeInTheDocument();
  const buttonElement2 = screen.getByText(/DELETE/i);
  expect(buttonElement2).toBeInTheDocument();
  const buttonElement3 = screen.getByText(/ADD/i);
  expect(buttonElement3).toBeInTheDocument();
});

test('select 2 items, button delete and button undo', async () => {
  render(<App />);
  const itemElement2 = await screen.findByText (/Item2/i);
  expect(itemElement2).toBeInTheDocument();
  fireEvent.click(itemElement2);
  const itemElement4 = await screen.findByText (/Item4/i);
  expect(itemElement4).toBeInTheDocument();
  fireEvent.click(itemElement4);
  const deleteButton = screen.getByText(/DELETE/i);
  expect(deleteButton).toBeInTheDocument();
  fireEvent.click(deleteButton);
  expect(itemElement2).not.toBeInTheDocument();
  expect(itemElement4).not.toBeInTheDocument();
  //undo
  const undoButton = screen.getByTitle (/Undo/i);
  expect(undoButton).toBeInTheDocument();
  fireEvent.click(undoButton);
  const itemElement2b = await screen.findByText (/Item2/i);
  expect(itemElement2b).toBeInTheDocument();
  const itemElement4b = await screen.findByText (/Item4/i);
  expect(itemElement4b).toBeInTheDocument();
});

test('doubleClick 1 item (= delete) and undo', async () => {
  render(<App />);
  const itemElement3 = await screen.findByText (/Item3/i);
  expect(itemElement3).toBeInTheDocument();
  fireEvent.doubleClick(itemElement3);
  expect(itemElement3).not.toBeInTheDocument();
  //undo
  const undoButton = screen.getByTitle (/Undo/i);
  expect(undoButton).toBeInTheDocument();
  fireEvent.click(undoButton);
  const itemElement3b = await screen.findByText (/Item2/i);
  expect(itemElement3b).toBeInTheDocument();
});

test('add 2 new items, and undo last one', async () => {
  const userAction = userEvent.setup();
  render(<App />);
  const addButton = screen.getByText(/ADD/i);
  expect(addButton).toBeInTheDocument();
  fireEvent.click(addButton);
  const newItemInput = screen.getByPlaceholderText (/Add new item/i);
  expect(newItemInput).toBeInTheDocument();
  await act(()=>userAction.type(newItemInput, "Item5"));
  await act(()=>userAction.keyboard('{enter}'));
  const itemElement5 = await screen.findByText (/Item5/i);
  expect(itemElement5).toBeInTheDocument();
  expect(newItemInput).toBeInTheDocument();
  await act(()=>userAction.type(newItemInput, "Item6"));
  await act(()=>userAction.keyboard('{enter}'));
  const itemElement6 = await screen.findByText (/Item6/i);
  expect(itemElement6).toBeInTheDocument();
  //end enter items
  fireEvent.click(addButton);
  expect(newItemInput).toHaveAttribute('hidden');
  //undo, only last add
  const undoButton = screen.getByTitle (/Undo/i);
  expect(undoButton).toBeInTheDocument();
  fireEvent.click(undoButton);
  expect(itemElement5).toBeInTheDocument();
  expect(itemElement6).not.toBeInTheDocument();
});

test('add 1 new item, confirm with add button again (instead of pressing Enter)', async () => {
  const userAction = userEvent.setup();
  render(<App />);
  const addButton = screen.getByText(/ADD/i);
  expect(addButton).toBeInTheDocument();
  fireEvent.click(addButton);
  const newItemInput = screen.getByPlaceholderText (/Add new item/i);
  expect(newItemInput).toBeInTheDocument();
  await act(()=>userAction.type(newItemInput, "Item5"));
  //end enter items
  fireEvent.click(addButton);
  expect(newItemInput).toHaveAttribute('hidden');
  const itemElement5b = await screen.findByText (/Item5/i);
  expect(itemElement5b).toBeInTheDocument();
});
