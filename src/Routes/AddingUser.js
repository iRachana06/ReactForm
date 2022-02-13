import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function AddingUser() {
  const [regisrtyData, setRegistryData] = useState([]); //returns from useState imports
  const [textInput, setTextInput] = useState("");
  const [error, seterror] = useState(false);
  const addItem = (e) => {
    e.preventDefault(); //preventDefault is called on the event when submitting the form to prevent a browser reload/refresh.
    const tempData = [...regisrtyData]; //we can extract data from arrays and objects and assign them to variables
    tempData.push(textInput);
    setRegistryData(tempData);
    setTextInput("");
  };

  const removeItem = (index) => {
    let newData = [...regisrtyData];
    newData.splice(index, 1);
    setRegistryData(newData);
  };
  const editItem = (index) => {
    if (error) return;
    let newData = [...regisrtyData];
    newData[index] = textInput;
    setRegistryData(newData);
  };

  useEffect(() => {
    {
      if (textInput.length > 10) seterror(true);
      else seterror(false);
    }
  }, [textInput]);

  console.log(regisrtyData);
  return (
    <div>
      {" "}
      <br />
      <h1>Enter User Name Here</h1>
      <form onSubmit={addItem}>
        <label>
          {" "}
          Name is :
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {error ? (
        <span style={{ color: "red" }}>Max length for input is 10.</span>
      ) : null}
      {regisrtyData.map((item, index) => {
        return (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}> Remove </button>{" "}
            <button onClick={() => editItem(index)}> Edit</button>{" "}
          </li>
        );
      })}
      <br />
      <Link to="/"> Go to Home Page </Link>
    </div>
  );
}
export default AddingUser;
