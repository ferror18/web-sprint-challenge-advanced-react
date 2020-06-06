import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});
// Arrange
    const container = render(<CheckoutForm />);
//Act
    //First Name
    const fnl = screen.getByText(/first name:/i)
    const fn = screen.getByPlaceholderText(/john/i)
    fireEvent.change(fn, {target: {value: 'tirion'}})
    //Last Name
    const lnl = screen.getByText(/last name:/i)
    const ln = screen.getByPlaceholderText(/snow/i)
    fireEvent.change(ln, {target: {value: 'lanister'}})
    //address
    const adrl = screen.getByText(/address:/i)
    const adr = screen.getByPlaceholderText(/4 Privet Drive, Surrey/i)
    fireEvent.change(adr, {target: {value: 'casterly rock'}})
    //city
    const ctl = screen.getByText(/city:/i)
    const ct = screen.getByPlaceholderText(/el dorado/i)
    fireEvent.change(ct, {target: {value: 'lanisport'}})
    //state
    const stl = screen.getByText(/state:/i)
    const st = screen.getByPlaceholderText(/california/i)
    fireEvent.change(st, {target: {value: 'westerlands'}})
    //zip
    const zl = screen.getByText(/zip:/i)
    const z = screen.getByPlaceholderText(/12345/i)
    fireEvent.change(z, {target: {value: '93105'}})


//Assert
    //fisrt name
    expect(fnl).toBeInTheDocument()
    expect(fn).toBeInTheDocument()
    expect(fn.value).toBe("tirion")
    //lastname
    expect(lnl).toBeInTheDocument()
    expect(ln).toBeInTheDocument()
    expect(ln.value).toBe('lanister')
    //address
    expect(adrl).toBeInTheDocument()
    expect(adr).toBeInTheDocument()
    expect(adr.value).toBe('casterly rock')
    //city
    expect(ctl).toBeInTheDocument()
    expect(ct).toBeInTheDocument()
    expect(ct.value).toBe('lanisport')
    //state
    expect(stl).toBeInTheDocument()
    expect(st).toBeInTheDocument()
    expect(st.value).toBe('westerlands')
    //zip
    expect(zl).toBeInTheDocument()
    expect(z).toBeInTheDocument()
    expect(z.value).toBe('93105')


test("form shows success message on submit with form details", () => {});
    
// //Act
// //Arrange
//     fireEvent.click(screen.getByTestId(/myForm/i), 'Submmit', 1)

//     const name = screen.getByTestId('name')
//     const address = screen.getByTestId('address')
//     const cityStateZip = screen.getByTestId('cityStateZip')
// //Assert
//     //fisrt name
//     expect(name).toContainEqual(fn.value)
//     //lastname
//     expect(name).toContainEqual(ln.value)
//     //address
//     expect(address).toContainEqual(adr.value)
//     //city
//     expect(cityStateZip).toContainEqual(ct.value)
//     //state
//     expect(cityStateZip).toContainEqual(st.value)
//     //zip
//     expect(cityStateZip).toContainEqual(z.value)