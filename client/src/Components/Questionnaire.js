import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {Carousel, Button, InputGroup} from 'react-bootstrap';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Questionnaire.css";
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import Axios from 'axios'

export const Questionnaire = () => {
  const [index, setIndex] = useState(0);
  const {questionnaireId} = useParams();
  const [questions, setQuestions] = useState("")

  // States for the Answers
  const [attendeeName, setAtendeeName] = useState("")
  const [attendeeEmail, setAttendeeEmail] = useState("")
  const [attendeePhone, setAtendeePhone] = useState("")
  const [answerOne, setAnswerOne] = useState("")
  const [answerTwo, setAnswerTwo] = useState("")
  const [answerThree, setAnswerThree] = useState("")
  const [answerFour, setAnswerFour] = useState("")
  const [answerFive, setAnswerFive] = useState("")
  const [answerSix, setAnswerSix] = useState("")
  const [answerSeven, setAnswerSeven] = useState("")
  const [answerEight, setAnswerEight] = useState("")
  const [answerNine, setAnswerNine] = useState("")
  const [answerTen, setAnswerTen] = useState("")
  const [comments, setComments] = useState("")

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/questionsRoutes/getQuestionsFromOneEvent/${questionnaireId}`)
    .then((res) => {
      console.log(res.data)
      setQuestions(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      Axios.post(`${process.env.REACT_APP_API_URL}/answersRoutes/createAnswer`, {
        attendeeName: attendeeName,
        attendeeEmail: attendeeEmail,
        attendeePhone: attendeePhone,
        answerOne: answerOne,
        answerTwo: answerTwo,
        answerThree: answerThree,
        answerFour: answerFour,
        answerFive: answerFive,
        answerSix: answerSix,
        answerSeven: answerSeven,
        answerEight: answerEight,
        answerNine: answerNine,
        answerTen: answerTen,
        comments: comments,
        questionsId: questionnaireId
      }).then((res) => {
        alert("Questionnarie submited. Thanks for your time and your feedback!")
      }).catch((err) => {
        console.log(err)
      })
  }


  return (
    <div className="Questionnaire">
      <h3 style={{textAlign:'center'}}>Questionnaire ID: {questionnaireId}</h3>
      <Form id='loginComp' style={{width: "100%", height: "50vh"}}>
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect} 
        interval={null} 
        prevIcon={<BsFillArrowLeftCircleFill color="#FFC000" size={"50px"}/>} 
        nextIcon={<BsFillArrowRightCircleFill color="#FFC000" size={"50px"}/>}
        variant={'dark'}
        indicators={false}
      >  

          <Carousel.Item>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" onChange={(e) => {setAtendeeName(e.target.value)}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Your email" onChange={(e) => {setAttendeeEmail(e.target.value)}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Your phone" onChange={(e) => {setAtendeePhone(e.target.value)}}/>
          </Form.Group>

          </Carousel.Item>
          {questions.questionOne != ""? 
          <Carousel.Item>
            <div>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <b>{questions.questionOne}</b></div>
            <Form.Group className="mb-3" controlId="q1Answer" style={{marginTop: '40px'}} onChange={(e) => {setAnswerOne(e.target.value)}}>
              <Form.Check inline label="1" name="q1" value={1} type={'radio'} />
              <Form.Check inline label="2" name="q1"  value={2} type={'radio'} />
              <Form.Check inline label="3" name="q1"  value={3} type={'radio'} />
              <Form.Check inline label="4" name="q1"  value={4} type={'radio'} />
              <Form.Check inline label="5" name="q1"  value={5} type={'radio'} />
            </Form.Group>
          </Carousel.Item> : null}
          {questions.questionTwo != ""? 
          <Carousel.Item>
            <div>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <b>{questions.questionTwo}</b></div>
            <Form.Group className="mb-3" controlId="q2Answer" style={{marginTop: '40px'}} onChange={(e) => {setAnswerTwo(e.target.value)}}>
              <Form.Check inline label="1" name="q2" value={1} type={'radio'} />
              <Form.Check inline label="2" name="q2"  value={2} type={'radio'} />
              <Form.Check inline label="3" name="q2"  value={3} type={'radio'} />
              <Form.Check inline label="4" name="q2"  value={4} type={'radio'} />
              <Form.Check inline label="5" name="q2"  value={5} type={'radio'} />
            </Form.Group>
          </Carousel.Item> : null}
          {questions.questionThree != ""? 
          <Carousel.Item>
            <div>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <b>{questions.questionThree}</b></div>
            <Form.Group className="mb-3" controlId="q3Answer" style={{marginTop: '40px'}} onChange={(e) => {setAnswerThree(e.target.value)}}>
              <Form.Check inline label="1" name="q3" value={1} type={'radio'} />
              <Form.Check inline label="2" name="q3"  value={2} type={'radio'} />
              <Form.Check inline label="3" name="q3"  value={3} type={'radio'} />
              <Form.Check inline label="4" name="q3"  value={4} type={'radio'} />
              <Form.Check inline label="5" name="q3"  value={5} type={'radio'} />
            </Form.Group>
          </Carousel.Item> : null}
          {questions.questionFour != ""? 
          <Carousel.Item>
            <div>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <b>{questions.questionThree}</b></div>
            <Form.Group className="mb-3" controlId="q4Answer" style={{marginTop: '40px'}} onChange={(e) => {setAnswerThree(e.target.value)}}>
              <Form.Check inline label="1" name="q4" value={1} type={'radio'} />
              <Form.Check inline label="2" name="q4"  value={2} type={'radio'} />
              <Form.Check inline label="3" name="q4"  value={3} type={'radio'} />
              <Form.Check inline label="4" name="q4"  value={4} type={'radio'} />
              <Form.Check inline label="5" name="q4"  value={5} type={'radio'} />
            </Form.Group>
          </Carousel.Item> : null}
          {questions.questionFive != ""? 
          <Carousel.Item>
            <div>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <b>{questions.questionFive}</b></div>
            <Form.Group className="mb-3" controlId="q5Answer" style={{marginTop: '40px'}} onChange={(e) => {setAnswerFive(e.target.value)}}>
              <Form.Check inline label="1" name="q5" value={1} type={'radio'} />
              <Form.Check inline label="2" name="q5"  value={2} type={'radio'} />
              <Form.Check inline label="3" name="q5"  value={3} type={'radio'} />
              <Form.Check inline label="4" name="q5"  value={4} type={'radio'} />
              <Form.Check inline label="5" name="q5"  value={5} type={'radio'} />
            </Form.Group>
          </Carousel.Item> : null}
          {questions.questionSix != ""? 
          <Carousel.Item>
            <div>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <b>{questions.questionSix}</b></div>
            <Form.Group className="mb-3" controlId="q6Answer" style={{marginTop: '40px'}} onChange={(e) => {setAnswerSix(e.target.value)}}>
              <Form.Check inline label="1" name="q6" value={1} type={'radio'} />
              <Form.Check inline label="2" name="q6"  value={2} type={'radio'} />
              <Form.Check inline label="3" name="q6"  value={3} type={'radio'} />
              <Form.Check inline label="4" name="q6"  value={4} type={'radio'} />
              <Form.Check inline label="5" name="q6"  value={5} type={'radio'} />
            </Form.Group>
          </Carousel.Item> : null}
          {questions.questionSeven != ""? 
          <Carousel.Item>
            <div>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <b>{questions.questionSeven}</b></div>
            <Form.Group className="mb-3" controlId="q7Answer" style={{marginTop: '40px'}} onChange={(e) => {setAnswerSeven(e.target.value)}}>
              <Form.Check inline label="1" name="q7"  value={1} type={'radio'} />
              <Form.Check inline label="2" name="q7"  value={2} type={'radio'} />
              <Form.Check inline label="3" name="q7"  value={3} type={'radio'} />
              <Form.Check inline label="4" name="q7"  value={4} type={'radio'} />
              <Form.Check inline label="5" name="q7"  value={5} type={'radio'} />
            </Form.Group>
          </Carousel.Item> : null}
          {questions.questionEight != ""? 
          <Carousel.Item>
            <div>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <b>{questions.questionEight}</b></div>
            <Form.Group className="mb-3" controlId="q8Answer" style={{marginTop: '40px'}} onChange={(e) => {setAnswerEight(e.target.value)}}>
              <Form.Check inline label="1" name="q8" value={1} type={'radio'} />
              <Form.Check inline label="2" name="q8"  value={2} type={'radio'} />
              <Form.Check inline label="3" name="q8"  value={3} type={'radio'} />
              <Form.Check inline label="4" name="q8"  value={4} type={'radio'} />
              <Form.Check inline label="5" name="q8"  value={5} type={'radio'} />
            </Form.Group>
          </Carousel.Item> : null}
          {questions.questionNine != ""? 
          <Carousel.Item>
            <div>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <b>{questions.questionNine}</b></div>
            <Form.Group className="mb-3" controlId="q9Answer" style={{marginTop: '40px'}} onChange={(e) => {setAnswerNine(e.target.value)}}>
              <Form.Check inline label="1" name="q9" value={1} type={'radio'} />
              <Form.Check inline label="2" name="q9"  value={2} type={'radio'} />
              <Form.Check inline label="3" name="q9"  value={3} type={'radio'} />
              <Form.Check inline label="4" name="q9"  value={4} type={'radio'} />
              <Form.Check inline label="5" name="q9"  value={5} type={'radio'} />
            </Form.Group>
          </Carousel.Item> : null}
          {questions.questionTen != ""? 
          <Carousel.Item>
            <div>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <b>{questions.questionTen}</b></div>
            <Form.Group className="mb-3" controlId="q10Answer" style={{marginTop: '40px'}} onChange={(e) => {setAnswerTen(e.target.value)}}>
              <Form.Check inline label="1" name="q10" value={1} type={'radio'} />
              <Form.Check inline label="2" name="q10"  value={2} type={'radio'} />
              <Form.Check inline label="3" name="q10"  value={3} type={'radio'} />
              <Form.Check inline label="4" name="q10"  value={4} type={'radio'} />
              <Form.Check inline label="5" name="q10"  value={5} type={'radio'} />
            </Form.Group>
          </Carousel.Item> : null}
          <Carousel.Item>
              <Form.Label>Comments</Form.Label>
              <InputGroup>
                <Form.Control as="textarea" aria-label="With textarea" onChange={(e) => {setComments(e.target.value)}}/>
              </InputGroup>
              <Button variant="warning" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
          </Carousel.Item>
        </Carousel>
      </Form>

    </div>
  );
}