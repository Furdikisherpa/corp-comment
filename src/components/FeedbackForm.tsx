import React from 'react'
import { useState } from 'react';
// import  MAX_CHARACTERS  from '../lib/constant'

export default function FeedbackForm() {

  const [text, setText] = useState("");

  // const charCount = MAX_CHARACTERS - text.length;

  // const handleChange = (e) =>{
  //   const newText = e.target.value;
  //   if(newText.length > MAX_CHARACTERS) return;
  //   setText(newText);
  // }

  return (
    <form className='form'>
        <textarea
         name='' 
         placeholder='' 
         spellCheck={false} 
         id='feedback-textarea'
         value={text}
        //  onChange={handleChange}
        //  maxLength={MAX_CHARACTERS}
         />

        <label htmlFor='feedack-textarea' >
            Enter your feedback here, remember to #hastag the 
        </label>
            <div>
                <p className='italic'>150</p>
                <button>Submit</button>
            </div>
    </form>
  )
}
