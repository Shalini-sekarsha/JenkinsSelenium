import { render, screen } from '@testing-library/react';
import Add from './Add';

 
jest.mock('axios');
jest.mock('react-router-dom');

describe( "Add test",() => {
test('renders Add  title ', () => {
    render(<Add />);
    const linkElement = screen.getByRole("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("ADD User DATA");
});
 
test('renders Add  Name ', () => {
    render(<Add />);
    const linkElement = screen.getByRole("username");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Name :");
});
 
test('renders Add  field ', () => {
    render(<Add />);
    const linkElement = screen.getByRole("address");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Address:");
});
 
test('renders Add field ', () => {
    render(<Add />);
    const linkElement = screen.getByRole("ship");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Shipment-City :");
});
 
test('renders Add field ', () => {
    render(<Add />);
    const linkElement = screen.getByRole("ptype");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Package-type :");
});
 
test('renders Add', () => {
    render(<Add />);
    const linkElement = screen.getByRole("id");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Select Admin Record:");
});
test('renders Add', () => {
    render(<Add />);
    const linkElement = screen.getByRole("rec");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Select a record");
});
test('renders Add', () => {
    render(<Add />);
    const linkElement = screen.getByRole("button");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Submit");
});


});