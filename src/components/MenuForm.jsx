import React, { useState } from "react";

const MenuForm = ({ inputData, onSubmit, children }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    onSubmit({ ...data });
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="FormDivOptions">
        <h3>Category</h3>
        <select
          id="category"
          name="category"

          required
          className="selectOption"
          onChange={handleChange}
        >
          <option value="Select a Category" disabled  selected hidden>
            Select a Category
          </option>
          <option value="Non Veg Starter">Non Veg Starter</option>
          <option value="Soup">Soup</option>
          <option value="Veg Starter">Veg Starter</option>
          <option value="Main Course">Main Course</option>
        </select>
      </div>
      <div>
        <h3>Item Name</h3>
        <input
          type="text"
          id="itemname"
          name="itemname"
          required
          placeholder="Enter Item Name"
        />
      </div>
      <div>
        <h3>ETA</h3>
        <input type="number" id="eta" name="eta" placeholder="Enter ETA" required/>
      </div>
      <div className="SaveBtnDiv">
        {children}
      </div>
    </form>
  );
};

export default MenuForm;
