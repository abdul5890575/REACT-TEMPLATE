import React, { useState } from 'react'
import Button from "components/Button"
import InterviewerList from "components/InterviewerList"


export default function Form(props) {

const [name, setName] = useState(props.name || "");
const [interviewer, setInterviewer] = useState(props.interviewer || null);

const handleSubmit = (event) =>{
  event.preventDefault()
  console.log('this is name',name)
  props.onSave(name,interviewer)
}

const reset = (event) =>{
  setName('')
  setInterviewer(null)
  props.onCancel()
}

const handleName = event => setName(event.target.value)

    return (
        <main className="appointment__card appointment__card--create">
        <section className="appointment__card-left">
          <form autoComplete="off">
            <input onChange = {handleName}
              className="appointment__create-input text--semi-bold"
              name="name"
              type="text"
              placeholder="Enter Student Name"
              value={name}
            />
          </form>
          <InterviewerList interviewers={props.interviewers} interviewer={interviewer} setInterviewer={setInterviewer} />
        </section>
        <section className="appointment__card-right">
          <section className="appointment__actions">
            <Button  onClick = {reset} danger>Cancel</Button>
            <Button  onClick = {handleSubmit} confirm>Save</Button>
          </section>
        </section>
      </main>
    );
  }
