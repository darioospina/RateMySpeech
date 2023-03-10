import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {Carousel, Button, InputGroup} from 'react-bootstrap';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Questionnaire.css";
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

import Axios from 'axios'



const Aquestions = [
  {
    question: "On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate the Speaker?",
    options: [1,2,3,4,5],
  },
  {
    question: "On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate the Venue?",
    options: [1,2,3,4,5],
  },
  {
    question: "On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate the Speaker?",
    options: [1,2,3,4,5],
  },
  {
    question: "On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate the Duration?",
    options: [1,2,3,4,5],
  },
  {
    question: "On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate the Time of the Event?",
    options: [1,2,3,4,5],
  },
];

export const Questionnaire = () => {
  const [index, setIndex] = useState(0);
  const {questionnaireId} = useParams();
  const [questions, setQuestions] = useState("")
  //const [eventId, setEventId] = useState(null)

  useEffect(() => {
    // WORK IN PROGRESS
    Axios.get(`${process.env.REACT_APP_API_URL}/questionsRoutes/getQuestionsFromOneEvent/${questionnaireId}`)
    .then((res) => {
      //setEventId(res.data._id)
      console.log(res.data)
      setQuestions(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])





  const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
  };


  return (
    <div className="Questionnaire">
      <h3 style={{textAlign:'center'}}>Questionnaire ID: {questionnaireId}</h3>
      <Form id='loginComp' style={{width: "100%", height: "50vh"}}> {/* onSubmit={handleSubmit} */}
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect} 
        interval={null} 
        prevIcon={<BsFillArrowLeftCircleFill color="#FFC000" size={"50px"}/>} 
        nextIcon={<BsFillArrowRightCircleFill color="#FFC000" size={"50px"}/>}
        variant={'dark'}
      >  

          <Carousel.Item>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  /> {/*onChange={}*/}
            </Form.Group>
            <Form.Label>Email</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="youremail@emailprovider.com"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="phone" placeholder="Password"/>
            </Form.Group>
          </Carousel.Item>
          {questions.questionOne != ""? 
          <Carousel.Item>
            <div>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <b>{questions.questionOne}</b></div>
          </Carousel.Item> : null}
          {questions.questionTwo != ""? 
          <Carousel.Item>
            <div>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <b>{questions.questionTwo}</b></div>
          </Carousel.Item> : null}
          {/* {
            questions.map((quest) => {
              quest !== null ? (
                console.log(quest)
              ) : null
            })
          } */}
          {/* {Aquestions.map(({ question, options }, i) => (
            <Carousel.Item key={i} className="carousel-item questions-item">
              <div>{question}</div>
              <div className="options">
                {options.map((option, j) => (
                  <label key={j}>
                  <input type="radio" name={`question-${i}`} value={option} style={{display:'inline-block'}}/>
                  {option}
                  </label>
                ))}
              </div>
            </Carousel.Item>
          ))} */}
          <Carousel.Item>
              <Form.Label>Comments</Form.Label>
              <InputGroup>
                <Form.Control as="textarea" aria-label="With textarea" />
              </InputGroup>
              <Button variant="warning" type="submit">
                Submit
              </Button>
          </Carousel.Item>
        </Carousel>
      </Form>

    </div>
  );
}