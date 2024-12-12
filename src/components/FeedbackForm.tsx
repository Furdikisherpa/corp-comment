import React, {  useState } from 'react';

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const MAX_CHARACTERS = 150;
  const charCount = MAX_CHARACTERS - text.length;


  const handleChange = (e) => {
    const newText = e.target.value;
    setIsError(newText.length > MAX_CHARACTERS);
    setText(newText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError) {
      console.log("Form submitted:", text);
      setText("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        name="feedback"
        placeholder="Enter your feedback here..."
        spellCheck={false}
        id="feedback-textarea"
        value={text}
        onChange={handleChange}
        maxLength={MAX_CHARACTERS}
      />
      {isError && (
        <div className="error-message">
          <p>Maximum characters exceeded.</p>
        </div>
      )}
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hastag the
      </label>
      <div>
        <p className="italic">{charCount} characters remaining</p>
        <button type="submit" disabled={isError}>Submit</button>
      </div>
    </form>
  );
}