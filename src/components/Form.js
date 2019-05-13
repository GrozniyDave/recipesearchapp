import React from "react";

const Form = props => (
  <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
    <input
      autoComplete="off"
      className="form__input"
      type="text"
      name="recipeName"
      placeholder="Ingredient"
    />
    <button className="form__button">Search</button>
  </form>
);
export default Form;
