import { render, screen } from '@testing-library/react';

import EditAdmin from './EditAdmin';

 
jest.mock('axios');
jest.mock('react-router-dom');

describe( "EditAdmin test",() => {
test('renders EditAdmin  title ', () => {
    render(<EditAdmin />);
    const linkElement = screen.getByRole("heading");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Update Admin Data");
});
 
test('renders EditAdmin  id ', () => {
    render(<EditAdmin />);
    const linkElement = screen.getByRole("a");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("AID :");
});
 
test('renders EditAdmin field ', () => {
    render(<EditAdmin />);
    const linkElement = screen.getByRole("servicename");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Servicename :");
});
 
test('renders EditAdmin field ', () => {
    render(<EditAdmin />);
    const linkElement = screen.getByRole("serviceaddress");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Serviceaddress :");
});
 
test('renders EditAdmin field ', () => {
    render(<EditAdmin/>);
    const linkElement = screen.getByRole("contact");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Contact :");
});
test('renders EditAdmin field ', () => {
    render(<EditAdmin/>);
    const linkElement = screen.getByRole("butn");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Update");
});

 



});