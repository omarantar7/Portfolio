import React, { useRef, useState } from "react";
import classes from "./ContactMe.module.css";
import LoadingAnimation from "../UI/LoadingAnimation";

const ContactForm: React.FC<{ alertMessage: () => void }> = (props) => {
  const [state, setState] = useState({ isLoading: false, error: null });
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const enteredName = nameRef.current!.value;
    const enteredEmail = emailRef.current!.value;
    const enteredSubject = subjectRef.current!.value;
    const enteredMessage = messageRef.current!.value;
    const entered = {
      enteredName,
      enteredEmail,
      enteredMessage,
      enteredSubject,
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
    {!state.error && props.alertMessage()}
  };
  return (
    <form className={classes.frm} onSubmit={submitHandler}>
      <div>
        <input
          className={classes.inp}
          placeholder="Name"
          type="text"
          ref={nameRef}
          required
        />
        <input
          className={classes.inp}
          placeholder="E-mail"
          type="email"
          ref={emailRef}
          required
        />
      </div>
      <input
        className={classes.inp}
        placeholder="Subject"
        type="text"
        ref={subjectRef}
        required
      />
      <textarea
        className={classes.inp}
        style={{ height: "7rem" }}
        placeholder="Message"
        ref={messageRef}
        required
      />
      <button>
        {state.isLoading ? <LoadingAnimation /> : "Submit"}
      </button>
      {state.error ? <h1>{state.error}</h1> : ''}
    </form>
  );
};

export default ContactForm;
