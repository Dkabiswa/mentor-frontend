import React from 'react';

const QuestionCard = ({ question }) => {
  return (
    <>
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-12">
            <div class="card-body">
              <h5 class="card-title">{question.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{question.owner}</h6>
              <p class="card-text">{question.description.substring(0, 100) + '...'}</p>
              <p class="card-text text-muted"><small>{question.tag}</small></p>
              <div className="row">
              <p class="card-text col-2">{question.answers} Answers</p>
              <p class="card-text col-2">{question.likes} <i class="fa fa-user-circle-o"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </>
  )
}

export default QuestionCard;