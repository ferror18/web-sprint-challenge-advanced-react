import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

const CheckoutForm = (props) => {
// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook
  const [
    handleChanges, 
    handleSubmit, 
    showSuccessMessage, 
    setShowSuccessMessage,
    values,
    setValues,
  ] = useForm()


  return (
    <>
      <form data-testid="myForm" onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            placeholder='john'
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            placeholder='snow'
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
            placeholder='4 Privet Drive, Surrey'
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} placeholder='El dorado'/>
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} placeholder='California'/>
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} placeholder='12345'/>
        </label>
        <button type='submit'>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p data-testid='name'>
            {values.firstName} {values.lastName}
          </p>
          <p data-testid='address'>{values.address}</p>
          <p data-testid='cityStateZip'>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
