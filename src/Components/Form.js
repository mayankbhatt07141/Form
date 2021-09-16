import { React, useState } from "react";
import "./Form.css";
function Form() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [matchpass, setMatchpass] = useState(false);
  let valid = false;

  return (
    <div className="form-container">
      <div className="values-container">
        {submitted && valid && matchpass ? (
          <div className="success-message">Success!Thanks for registering</div>
        ) : null}
        {submitted && !matchpass ? <span>ERROR!password mismatch</span> : null}
        <input
          className="input-field"
          value={values.firstname}
          placeholder="First Name"
          onChange={(event) =>
            setValues({ ...values, firstname: event.target.value })
          }
        />
        {submitted && !values.firstname ? (
          <span>Please enter First name</span>
        ) : null}
        <input
          className="input-field"
          value={values.lastname}
          placeholder="last Name"
          onChange={(event) =>
            setValues({ ...values, lastname: event.target.value })
          }
        />
        {submitted && !values.lastname ? (
          <span>Please enter last name</span>
        ) : null}
        <input
          className="input-field"
          value={values.email}
          placeholder="E-mail"
          onChange={(event) =>
            setValues({ ...values, email: event.target.value })
          }
        />
        {submitted && !values.email ? <span>Please enter email </span> : null}
        <input
          className="input-field"
          type="password"
          value={values.password}
          placeholder="Password"
          onChange={(event) =>
            setValues({ ...values, password: event.target.value })
          }
        />
        {submitted && !values.password ? (
          <span>Please enter Password</span>
        ) : null}
        <input
          className="input-field"
          type="password"
          value={values.confirmpassword}
          placeholder="Confirm Password"
          onChange={(event) =>
            setValues({ ...values, confirmpassword: event.target.value })
          }
        />
        {submitted && !values.confirmpassword ? (
          <span>Please enter Password again</span>
        ) : null}
        <button
          type="submit"
          className="sub-btn"
          onClick={(event) => {
            event.preventDefault();
            setSubmitted(true);
            if (
              values.firstname &&
              values.lastname &&
              values.email &&
              values.password &&
              values.confirmpassword
            ) {
              valid = true;
            }

            if (values.password === values.confirmpassword) {
              setMatchpass(true);
            }
            if (valid) {
              console.log(values.firstname);
              console.log(values.lastname);
              console.log(values.email);
              console.log(values.password);
              console.log(values.confirmpassword);
            }
            console.log(valid);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
