import React, { useState } from 'react'
import Form from './components/Form'

const App = () => {
  const [formData, setFormData] = useState({ 
    firstName: "" ,lastName:"" ,email:"",country:"",address:"",
    city:"",state:"",zip:"",isComment:false,candidate:false,offer:false,pushNotification:""
  });

  const changeHandler = (event) => {
    const { type, name, value, checked } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  const submitHandler =(event)=>{
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className=' bg-gray-200 w-full h-full flex justify-center'>
      <Form changeHandler={changeHandler} formData={formData} submitHandler={submitHandler}></Form>
    </div>
  )
}

export default App
