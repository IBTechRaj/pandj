import React, { useState, useEffect } from "react";
// import { TextField, Stack, Button, Checkbox } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom"
// import axios from 'axios'
import './style.css'

const ContactForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData();
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('subject', subject)
        formData.append('message', message)
        console.log(formData)

    }

    return (
        <>


            {/* 
            <div className="col-sm-8 col-md-8">
                <div className="contact-form">
                    NOTE: Update your email Id in "contact_me.php" file in order to receive emails from your contact form
                    <form name="sentMessage" id="contactForm" noValidate>
                        <div className="control-group">
                            <div className="controls">
                                <input type="text" className="form-control" placeholder="Full Name" id="name" required
                                    data-validation-required-message="Please enter your name" />
                                <p className="help-block"></p>
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="controls">
                                <input type="email" className="form-control" placeholder="Email" id="email" required
                                    data-validation-required-message="Please enter your email" />
                            </div>
                        </div>

                        <div className="control-group">
                            <div className="controls">
                                <textarea rows="10" cols="100" className="form-control" placeholder="Message" id="message" required
                                    data-validation-required-message="Please enter your message" minLength="5"
                                data-validation-minLength-message="Min 5 characters" maxLength="999"
                                style="resize: none"
                                >

                                </textarea>
                            </div>
                        </div>
                        <div id="success"></div>
                        For success/fail messages 
                        <button type="submit" className="btn btn-primary pull-right">
                            Send</button><br />
                    </form>
                </div>
            </div> */}




            <div className="row">
                <div className="col-12">
                    <div className="panel panel-default">
                        <div className="panel-heading text-center py-1">
                            <h4 className="panel-title">Contact Form</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-1" style={{ borderBlock: "2px" }}>



                <div className="col-3">

                    <div className="panel panel-default">
                        <div className="panel-body text-center">


                        </div>
                    </div>
                </div>
                <div className="col-6" >
                    <form onSubmit={handleSubmit} >

                        <div className="panel-body">
                            <div className="form-group">
                                <div className="row col-12">
                                    <label className="col-12 control-label">Full Name </label>
                                    <div className="col-sm-5" style={{ marginRight: '20px' }}>
                                        <input type="email"
                                            className="form-control"
                                            variant='outlined'
                                            color='secondary'
                                            placeholder='First '
                                            onChange={event => setFirstName(event.target.value)}
                                            value={firstName}
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-5" style={{ float: 'left' }}>
                                        <input type="email"
                                            className="form-control"
                                            variant='outlined'
                                            color='secondary'

                                            placeholder='Last '
                                            onChange={event => setLastName(event.target.value)}
                                            value={lastName}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <label className="col-sm-4 control-label">Email </label>
                                <div className="col-sm-10">
                                    <input type="email"
                                        className="form-control"
                                        // readOnly={true}
                                        variant='outlined'
                                        color='secondary'
                                        // label="Email"
                                        onChange={event => setEmail(event.target.value)}
                                        value={email}
                                        required
                                    />
                                </div>
                            </div>


                            <div className="form-group">
                                <label className="col-sm-4 control-label">Phone </label>
                                <div className="col-sm-10">
                                    <input type="tel"
                                        className="form-control"
                                        // readOnly={isDisabled}
                                        variant='outlined'
                                        color='secondary'
                                        // label="Mobile"
                                        onChange={event => setPhone(event.target.value)}
                                        value={phone}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Subject </label>
                                <div className="col-sm-10">
                                    <input type="text"
                                        className="form-control"
                                        // readOnly={isDisabled}
                                        variant='outlined'
                                        color='secondary'
                                        // label="City"
                                        onChange={event => setSubject(event.target.value)}
                                        value={subject}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Message </label>
                                <div className="col-sm-10">
                                    <textarea type="text"
                                        rows="5"
                                        className="form-control"
                                        // readOnly={isDisabled}
                                        variant='outlined'
                                        color='secondary'
                                        // label="Country"
                                        onChange={event => setMessage(event.target.value)}
                                        value={message}
                                        required
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block col-10 py-1" type="submit" onClick={handleSubmit}>
                                Send Message
                            </button>
                        </div>
                        {/* <div className="row my-5">
                            <div className="col-12">
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-primary btn-block" type="submit" onClick={handleSubmit}>
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </form>

                </div >





            </div >








        </>
    );
}

export default ContactForm;