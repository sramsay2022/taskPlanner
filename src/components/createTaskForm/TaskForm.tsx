import React, { KeyboardEvent, useState } from "react";
import { addYears, compareDesc, format, startOfYesterday } from 'date-fns'
import { Form } from 'react-bootstrap'
import { CODE_ENTER } from 'keycode-js'

import { DATE_FUTURE_LIMIT_MESSAGE, DATE_PAST_LIMIT_MESSAGE, TITLE_EMPTY_MESSAGE, TITLE_TOO_LOND_MESSAGE } from './constants'
import TextButton, { ButtonVariant } from "../styledComponents/buttons/TextButton";
import './TaskForm.css'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { createTask } from "./TaskFormSlice";
import { TaskObject } from "../types/objects";
import {getTasks} from './TaskFormSelectors'



export default function TaskForm() {

  const [titleErrMsg, setTitleErrMsg] = useState('')
  const [taskTitle, setTaskTitle] = useState("New Task")
  const [isValidTitle, setValidTitle] = useState(true)

  const [dateErrMsg, setDateErrMsg] = useState('')
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))

  const [note, setNote] = useState('')
  const [urgent, setUrgent] = useState(false)

  const isValidDate = dateErrMsg === ''
  const isValidForm = isValidTitle && isValidDate




  const dispatch = useAppDispatch()
  //const task = useAppSelector(getTasks)



  const validateDate = (date: string) => {
    const selectedDate = new Date(date)
    const todaysDate = new Date()
    const nextYear = addYears(todaysDate, 1)
    const yesterday = startOfYesterday()

    if (compareDesc(selectedDate, nextYear) < 0) {
      setDateErrMsg(DATE_FUTURE_LIMIT_MESSAGE)
    } else if (compareDesc(selectedDate, yesterday) > 0) {
      setDateErrMsg(DATE_PAST_LIMIT_MESSAGE)
    } else {
      setDateErrMsg('')
    }
  }

  const validateTitle = (title: string) => {
      if(title.length === 0){
        setValidTitle(false)
        setTitleErrMsg(TITLE_EMPTY_MESSAGE)
      }
      else if(title.length >= 100){
        setValidTitle(false)
        setTitleErrMsg(TITLE_TOO_LOND_MESSAGE)
      }
      else{
        setValidTitle(true)
        setTitleErrMsg('')
      }

  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    validateTitle(event.target.value)
    setTaskTitle(event.target.value)
    if(event.target.value === ""){
      setTaskTitle("Unnamed Task")
    }
    
  }
  const generateDataPacket = (): TaskObject => {
    return {
      id: '',
      name: taskTitle,
      date: new Date(date),
      notes: note,
      urgent: urgent
    }
  }

  const handleUrgent = () => {
    setUrgent(!urgent)
  }

  const handleSubmit = () => {
    if (isValidForm) {
      dispatch(createTask(generateDataPacket()))
      console.log("Form is valid")
      console.log(generateDataPacket())
    }
  }

  //If user inputs enter key, the form wont auto submit
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === CODE_ENTER) event.preventDefault()
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    validateDate(event.target.value)
    setDate(event.target.value)
  }


  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  return (
    <div>
    <Form onSubmit={handleSubmit} onKeyPress={handleKeyPress}className="form">
      
      <Form.Group>
        <Form.Label className="title">{taskTitle}</Form.Label>
        <Form.Control 
        placeholder="Title" 
        onChange={handleTitleChange}
        isInvalid={!isValidTitle}
        maxLength={100}
        required
        />
        <Form.Control.Feedback type="invalid">
            {titleErrMsg}
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>
         Date Due
          <Form.Control
            type="date"
            name="Task Date"
            onChange={handleDateChange}
            isInvalid={!isValidDate}
            value={date}
          />
          <Form.Control.Feedback type="invalid">
            {dateErrMsg}
          </Form.Control.Feedback>
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Check type="checkbox" label="Urgent" onChange={handleUrgent}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Notes</Form.Label>
        <Form.Control placeholder="Notes"
        onChange={handleNoteChange}
        />
      </Form.Group>
      <TextButton text="Submit"
        onClick={handleSubmit}
        disabled={!isValidForm}
        variant={
          !isValidForm ? ButtonVariant.OUTLINEDANGER : ButtonVariant.PRIMARY
        } />

    </Form>
    </div>
  )
}
