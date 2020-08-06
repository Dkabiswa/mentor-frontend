import React, {useState} from 'react';
import Header from '../components/header';
import QuestionCard from '../components/questionCard';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 1,
    title: "How to start a bussiness",
    owner: "Erias kagawa",
    tag: "Economics",
    description: "This is a wider card with supporting text below as a natural lead-in This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer to additional content. This content is a little bit longer",
    answers: 4,
    likes: 10
  },
  {
    id: 2,
    title: "How to start a bussiness",
    owner: "Erias kagawa",
    tag: "Funding",
    description: "This is a wider card with supporting text below as a natural lead-in This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer to additional content. This content is a little bit longer",
    answers: 4,
    likes: 10
  },
  {
    id: 3,
    title: "How to start a bussiness",
    owner: "Erias kagawa",
    tag: "Startup",
    description: "This is a wider card with supporting text below as a natural lead-in This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer to additional content. This content is a little bit longer",
    answers: 4,
    likes: 10
  },
  {
    id: 4,
    title: "How to start a bussiness",
    owner: "Erias kagawa",
    tag: "Economics",
    description: "This is a wider card with supporting text below as a natural lead-in This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer to additional content. This content is a little bit longer",
    answers: 4,
    likes: 10
  }
]

const Discussions = () => {
  const [activeDiv, setActiveDiv] = useState(0)
  const [displayQuestions, setDisplayQuestions] = useState(questions)
  const tags = ['All', 'Economics', 'Bussiness', 'Startup', 'Funding']
  const quest = (questions) => {
    return questions.map((question) => <QuestionCard question={question} key={question.id}/>)
  }

  const sideList = (tags) => {
    return tags.map((tag, index) => <div
      key={index + tag[0]}
      onClick={()=>handleClick(index, tag)}
      className={`list-group-item list-group-item-action ${activeDiv===index? 'active' : ''}`}
    >{tag}</div>)
  }

  const handleClick = (i, t) => {
    setActiveDiv(i)
    const q = t==='All'? questions : questions.filter(question => question.tag === t)
    setDisplayQuestions(q)
  }
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="slim-pagetitle ">Discussions</h1>
        <div class="row mt-4">
          <div class="col-md-3">
            <Link to="/" className="btn btn-primary mb-3">NEW TOPIC</Link>
            <div class="list-group" id="list-tab">
              {sideList(tags)}
            </div>
          </div>
          <div class="col-md-8">
            {questions.length? quest(displayQuestions): <div>no questions</div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Discussions;