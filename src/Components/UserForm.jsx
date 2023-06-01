import React from "react";
import { Field, Form,Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const UserForm = () => {
  //default Values
  const defaultValue = {
    firstName: "",
    lastName: "",
    country: "",
    gender: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  };


  const validatonSchema = yup.object().shape({
    //FirstName Validation
    firstName: yup
      .string()
      .required("First Name is Required Field!")
      .matches(
        /^[aA-zZ\s]+$/,
        "Only Capital and Small Letters are Allowed!"
      ),

    //LastName Validation
    lastName: yup
      .string()
      .required("Last Name is Required Field! ")
      .matches(/^[aA-zZ\s]+$/, "Only Capital and Small Letters are Allowed!"),

    //Hobby Validation
    country: yup.string().required("Select Coutry!"),

    //Gender Validation
    gender: yup.string().required("Select Gender!"),

    //Email Validation
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is Required Field!"),

    //Password Validation
    password: yup
      .string()
      .required("Password is Required Field!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=(.*[@$!%*#?&]))[A-Za-z\d@$!%*#?&]{10,}$/,
        "Must Contain 10 Characters, ONE Uppercase, ONE Lowercase, ONE Number and One special case Character"
      ),

    //Confirm Password Validation
    confirmPassword: yup
      .string()
      .required("Confirm Password is Required Field!")
      .oneOf([yup.ref("password"), null], "Password does not Match!"),

    //Phone Number Validation
    mobileNumber: yup
      .string()
      .required("Mobile Number is Required Field!")
      .matches(/^[6-9]\d{9}$/, {
        message: "Please enter valid number!",
        excludeEmptyString: false,
      }),

  });

  //It shows Error Message in Form...
  const ErrMsg = ({ name }) => {
    return (
      <div
        style={{
          color: "red",
          fontWeight: "600",
          fontFamily: "inherit",
          marginTop: "15px",
          marginBottom: "15px",
          fontSize: "20px",
        }}
      >
        <ErrorMessage name={name} />
      </div>
    );
  };

  const handleSubmit = (values) => {
    console.log("Form Values---", values);
    var data = {
      FirstName: values.firstName,
      LastName: values.lastName,
      Gender: values.gender,
      Country: values.country,
      MobileNumber: values.mobileNumber,
      Email: values.email,
      Passsword: values.password,
      confirmPassword: values.confirmPassword,
    };
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="contanier my-3 mx-5 bg-light">
      <h1>
        <b className="display-4 text-center" id="headerName" data-test-id="header-Test">automation Rana-Register Form App</b>
      </h1>

      <Formik
        initialValues={defaultValue}
        validationSchema={validatonSchema}
        onSubmit={handleSubmit}
      >
        <Form className="border border-5 p-3 bg-white">
          <div class="row border border-3 mx-5 my-2 bg-light">
            <div className="col-md-6 " id="first-name-parent">
              <label
                htmlFor="firstname"
                className="form-label h4 my-3 text-dark"
                data-test-id="first-Name-Label-Test"
                id="first-name-label"
              >
                First Name
              </label>
              <Field
                name="firstName"
                id="firstname"
                placeholder="Enter your First Name"
                type="text"
                data-test-id="first-Name-Test"
                className="form-control"
              />
              <ErrMsg name="firstName" className="form-text" />
            </div>
            <div className="col-md-6" id="last-name-parent">
              <label
                htmlFor="lastname"
                className="form-label h4 my-3 text-dark "
                data-test-id="last-Name-Label-Test"
                id="last-name-label-id"
              >
                Last Name
              </label>
              <Field
                name="lastName"
                id="lastname"
                placeholder="Enter your Last Name"
                type="text"
                data-test-id="last-Name-Test"
                className="form-control"
              />
              <ErrMsg name="lastName" className="fs-4" />
            </div>
          </div>
          <div class="row border border-3 mx-5 my-2 bg-light">
            <div className="col-md-6" id="gender-parent">
              <label htmlFor="gender" className="form-label h4 my-3 text-dark" data-test-id="gender-Label-Test"  id="gender-label-id">
                Gender
              </label>
              <div className="row form-control mx-1">
                <span className="col-md-3 form-check form-check-inline" data-test-id="gender_radio_parent" id="gender-radio-id">
                  <label htmlFor="gender" className="form-check-label" id="Male">
                    Male
                  </label>
                  <Field
                    name="gender"
                    id="gender-male"
                    placeholder="select Gender"
                    type="radio"
                    value="male"
                    className="form-check-input"
                    data-test-id="maleGender"
                  />
                </span>
                <span className="col-md-4 form-check form-check-inline" data-test-id="gender_radio_parent">
                  <label htmlFor="gender" className="form-check-label " id="Female">
                    Female
                  </label>
                  <Field
                    name="gender"
                    id="gender-female"
                    placeholder="select Gender"
                    type="radio"
                    value="female"
                    className="form-check-input"
                    data-test-id="femaleGender"
                  />
                </span>
                <span className="col-md-3  form-check form-check-inline" data-test-id="gender_radio_parent">
                  <label htmlFor="gender" className="form-check-label " id="Other">
                    Other
                  </label>
                  <Field
                    name="gender"
                    id="gender-other"
                    placeholder="select Gender"
                    type="radio"
                    value="other"
                    className="form-check-input"
                    data-test-id="otherGender"
                  />
                </span>
              </div>
              <ErrMsg name="gender" />
            </div>
            <div className="col-md-6" id="country-parent">
              <label htmlFor="country" className="form-label h4 my-3 text-dark" data-test-id="country-Label-Test" id="country-label-id">
                Country
              </label>
              <Field
                name="country"
                id="country"
                placeholder="Select Your Country"
                type="select"
                data-test-id="countryTest"
                className="form-control"
                as="select"
              >
                <option value="" label="Select Country" />
                <option value="Russia" label="Russia" />
                <option value="Australia" label="Australia" />
                <option value="Finland" label="Finland" />
                <option value="Switzerland" label="Switzerland" />
                <option value="India" label="India" />
                <option value="Oman" label="Oman" />
                <option value="Singapore" label="Singapore" />
                <option value="Canada" label="Canada" />
                <option
                  value="United States of America"
                  label="United States of America"
                />
                <option value="United Kingdom" label="United Kingdom" />
                <option value="Pakistan" label="Pakistan" />
                <option value="Nepal" label="Nepal" />
                <option value="Bhutan" label="Bhutan" />
                <option value="Sri Lanka" label="Sri Lanka" />
                <option value="China" label="China" />
                <option value="Germany" label="Germany" />
              </Field>
              <ErrMsg name="country" className="form-text" />
            </div>
          </div>
          <div class="row border border-3 mx-5 my-2 bg-light">
            <div className="col-md-6 bg-light" id="mobile-number-parent">
              <label
                htmlFor="mobilenumber"
                className="form-label h4 my-3 text-dark"
                data-test-id="mobileNumberLabelTest"
              >
                Mobile Number
              </label>
              <Field
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Enter your Mobile Number"
                type="text"
                data-test-id="mobileNumberTest"
                className="form-control"
              />
              <ErrMsg name="mobileNumber" className="form-text" />
            </div>
            <div className="col-md-6 bg-light" id="email-parent">
              <label htmlFor="email" className="form-label h4 my-3 text-dark" data-test-id="emailLabelTest">
                Email
              </label>
              <Field
                name="email"
                id="email"
                placeholder="Enter your Email"
                type="email"
                data-test-id="emailTest"
                className="form-control"
              />
              <ErrMsg name="email" className="form-text" />
            </div>
          </div>
          <div class="row border border-3 mx-5 my-2 bg-light">
            <div className="col-md-6" id="password-parent">
              <label
                htmlFor="password"
                className="form-label h4 my-3 text-dark"
                data-test-id="passwordLabelTest"
              >
                Password
              </label>
              <Field
                name="password"
                id="password"
                placeholder="Enter your Password"
                type="password"
                data-test-id="passwordTest"
                className="form-control"
              />
              <ErrMsg name="password" className="form-text" />
            </div>
            <div className="col-md-6" id="confirmPass-parent">
              <label
                htmlFor="confirmpassword"
                className="form-label h4 my-3 text-dark"
                data-test-id="confirmPasswordLabelTest"
              >
                Confirm Password
              </label>
              <Field
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter your Confirm Password"
                type="password"
                data-test-id="confirmPasswordTest"
                className="form-control"
              />
              <ErrMsg name="confirmPassword" className="form-text" />
            </div>
          </div>

          <div className="d-grid gap-2 m-3" id="register-btn-parent">
            <button type="submit" id="formregisterbutton" className="btn btn-success text-white fs-5" data-test-id="registerButton">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
