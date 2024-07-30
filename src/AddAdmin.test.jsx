import { render, screen } from '@testing-library/react';
import AddAdmin from './AddAdmin';

 
jest.mock('axios');
jest.mock('react-router-dom');

describe( "AddAdmin test",() => {
test('renders Add  title ', () => {
    render(<AddAdmin />);
    const linkElement = screen.getByRole("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("ADD ADMIN");
});
 
test('renders Add  Name ', () => {
    render(<AddAdmin />);
    const linkElement = screen.getByRole("service");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Servicename");
});
 
test('renders Add  field ', () => {
    render(<AddAdmin />);
    const linkElement = screen.getByRole("sadd");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Serviceaddress :");
});
 
test('renders Add field ', () => {
    render(<AddAdmin />);
    const linkElement = screen.getByRole("cont");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Contact :");
});
 
test('renders Add field ', () => {
    render(<AddAdmin/>);
    const linkElement = screen.getByRole("but");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Submit");
});
 



});