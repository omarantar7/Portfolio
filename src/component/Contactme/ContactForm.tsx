import React, { useRef, useState } from "react";
import classes from "./ContactMe.module.css";
import LoadingAnimation from "../UI/LoadingAnimation";
import useInput from "../../hooks/use-input";
import { TiWarningOutline } from "react-icons/ti";

const isNotEmpty = (value: string) => value.trim() !== "";
const isEmail = (value: string) => value.includes("@" && ".");
const ContactForm: React.FC<{ alertMessage: () => void }> = (props) => {
  const [state, setState] = useState({ isLoading: false, error: null });

  const messageRef = useRef<HTMLTextAreaElement>(null);
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: subjectValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetsubject,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (firstNameIsValid && subjectIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    const enteredMessage = messageRef.current!.value;
    const entered = {
      firstNameValue,
      emailValue,
      subjectValue,
      enteredMessage,
    };
    setState((prev) => {
      return { ...prev, isLoading: true };
    });
    await fetch(
      "https://portfilio-f425b-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(entered),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).catch((err) => {
      setState((prev) => {
        return { ...prev, error: err.message };
      });
    });
    setState((prev) => {
      return { ...prev, isLoading: false };
    });
    {!state.error && props.alertMessage();}
    resetFirstName();
    resetEmail();
    resetsubject();
    messageRef.current!.value = "";
  };
  const NameClasses = firstNameHasError
    ? classes.inp && classes.invalid
    : classes.inp;
  const emailClasses = emailHasError
    ? classes.inp && classes.invalid
    : classes.inp;
  const subjectClasses = subjectHasError
    ? classes.inp && classes.invalid
    : classes.inp;
  return (
    <form className={classes.frm} onSubmit={submitHandler}>
      <div>
        <div>
          <input
            className={NameClasses}
            placeholder="Name*"
            type="text"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p style={{ color: "red" }}>
              <TiWarningOutline />
              name shouldn't be empty
            </p>
          )}
        </div>
        <div>
          <input
            className={emailClasses}
            placeholder="E-mail*"
            type="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p style={{ color: "red" }}>
              <TiWarningOutline />
              email is valid
            </p>
          )}
        </div>
      </div>
      <input
        className={subjectClasses}
        placeholder="Subject*"
        type="text"
        value={subjectValue}
        onChange={subjectChangeHandler}
        onBlur={subjectBlurHandler}
      />
      {subjectHasError && (
        <p style={{ color: "red" }}>
          <TiWarningOutline />
          subject shouldn't be empty
        </p>
      )}

      <textarea
        className={classes.inp}
        style={{ height: "7rem" }}
        placeholder="Message"
        ref={messageRef}
      />
      <button disabled={!formIsValid}>
        {state.isLoading ? <LoadingAnimation /> : "Submit"}
      </button>
      {state.error ? <h1>{state.error}</h1> : ""}
    </form>
  );
};

export default ContactForm;
