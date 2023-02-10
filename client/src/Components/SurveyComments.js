import React from 'react'

export const SurveyComments = () => {
    return (
       <>
        <div className="form-group">
        <label htmlFor="">
          {" "}
          <b>  Write your review here </b> 
        </label>
        <textarea className="form-control" name="q3"></textarea>
      </div>
      <button
        type="button"
        className="btn btn-lg btn-warning"
        data-bs-toggle="popover"
        data-bs-title="Popover title"
        data-bs-content="Thanks! Your feedback is valuable "
      >
        Finish
      </button>
      </>   
    )
}