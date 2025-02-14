import React from 'react';
import { useState } from 'react';
import './Form.css';

function Form() {
    let [formData, setFormData] = useState({
        username:"",
        remarks: "",
        rating:5
    });

    let handleInputChange = (event) =>{
        setFormData((currData) => {
            return {...currData, [event.target.name]:event.target.value}
        });
    };
    let handleSubmit=()=>{
        console.log(formData);
        event.preventDefault();
        setFormData({
            username:"",
        remarks: "",
        rating:5
        });
    };

  return (
    <div className='maindiv'>
    <h4>Give a comment!</h4>
    <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="username">Username</label>
        <input 
        placeholder ="username" 
        type="text" 
        value ={formData.username}
         onChange={handleInputChange}
         id="username"
         name="username"
         />
        <br></br><br></br>
        <label htmlFor="remarks">remarks</label>
        <textarea 
        placeholder="add few remarks"
        value={formData.remarks} 
        onChange={handleInputChange}
        id="remarks"
        name="remarks"
        >
        </textarea>
        <br></br><br></br>
        <label htmlFor="rating">Rating</label>
        <input
         placeholder="rating"
          type="number"
           value={formData.rating} 
           min={1} 
           max={5} 
           id="rating"
          onChange={handleInputChange}
          name="rating" />
        <br></br><br></br>
        <button>Add Comment</button>
    </form>
    </div>
  );
}

export default Form