import React from "react";
import "./form.css";

function Form(props) {
  return (
    <div className="form">
      <form onSubmit={props.getWeather}>
        <input name="city" type="text" placeholder="City..." />
        <input name="country" type="text" placeholder="Country.." />
        <button>Get Weather</button>
      </form>
    </div>
  );
}
export default Form;
