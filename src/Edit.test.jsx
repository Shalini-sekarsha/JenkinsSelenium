import { render, screen } from '@testing-library/react';

import Edit from './Edit';

 
jest.mock('axios');
jest.mock('react-router-dom');

describe( "Edit test",() => {
test('renders Edit  title ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Update User's Data");
});
 
test('renders Edit  id ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("id");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("ID :");
});
 
test('renders Edit field ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("name");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Name :");
});
 
test('renders Add field ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("address");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Address :");
});
 
test('renders Edit field ', () => {
    render(<Edit/>);
    const linkElement = screen.getByRole("shipment");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Shipment-city :");
});
test('renders Edit field ', () => {
    render(<Edit/>);
    const linkElement = screen.getByRole("packagetype");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Package-type :");
});
test('renders Edit field ', () => {
    render(<Edit/>);
    const linkElement = screen.getByRole("butt");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Update");
});
 



});