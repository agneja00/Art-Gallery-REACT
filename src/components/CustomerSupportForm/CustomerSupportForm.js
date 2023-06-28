import "./CustomerSupportForm.css"
import Topic from "../Topic/Topic";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import { useState } from "react";

const CustomerSupportForm = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [errorMessageFullName, setErrorMessageFullName] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessageTextArea, setErrorMessageTextArea] = useState("")


  const handleChangeFullName = (event) => {
    setFullName(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangeMessage = (event) => {
    setMessage(event.target.value)
  }

  const validateForm = () => {
    if (!fullName) {
      setErrorMessageFullName('You need to fill input!')
    } else {
      setErrorMessageFullName("")
    }

    if (!email) {
      setErrorMessageEmail('You need to fill input!')
    } else {
      setErrorMessageEmail("")
    }

    if (!message) {
      setErrorMessageTextArea('You need to fill input!')
    } else {
      setErrorMessageTextArea("")
    }
  }

  const clearForm = () => {
    setFullName('')
    setEmail('')
    setMessage('')
  }

  const onSave = () => {
    validateForm()
    if (fullName && email && message) {
      const user = {
        fullName: fullName,
        email: email,
        message: message,
      }
      console.log(user)
    }
    clearForm()
  } // skirtingi errorai, atskira funkcija validacijai


  return (
    <>
      <Topic title="Contact customer support" text="We take every request into a consideration and we will reach out to you as fast as possible" />
      <div className="form-container">
        <div className="form">
          <Input value={fullName} placeholder="Full Name" label="Full Name:" type="text" id="fullName" onChange={handleChangeFullName} error={errorMessageFullName} />
          <Input value={email} placeholder="Email" label="Email:" type="email" id="email" onChange={handleChangeEmail} error={errorMessageEmail} />
          <TextArea value={message} placeholder="Your message to us" label="Your message to us:" id="message" onChange={handleChangeMessage} error={errorMessageTextArea} />
          <Button label="Save" onClick={onSave} />
        </div>
      </div>
    </>
  )
}

export default CustomerSupportForm;