import React from 'react';
import { useState } from 'react';

// Import button, form and InputGroup from bootstrap
import {Form, Button, InputGroup} from 'react-bootstrap';

// Import Axios
import Axios from 'axios'

export const NewQuestComp = ({setQuestionnaireId}) => {
  const [questionOne, setQuestionOne] = useState("");
  const [questionTwo, setQuestionTwo] = useState("");
  const [questionThree, setQuestionThree] = useState("");
  const [questionFour, setQuestionFour] = useState("");
  const [questionFive, setQuestionFive] = useState("");
  const [questionSix, setQuestionSix] = useState("");
  const [questionSeven, setQuestionSeven] = useState("");
  const [questionEight, setQuestionEight] = useState("");
  const [questionNine, setQuestionNine] = useState("");
  const [questionTen, setQuestionTen] = useState("");
  const [eventId, setEventId] = useState("64025cf99f36f204c16b6d36")
  
  const handleSubmit = (e) => {
      e.preventDefault();
      Axios.post(`${process.env.REACT_APP_API_URL}/questionsRoutes/createQuestionnaire`, {
        questionOne: questionOne,
        questionTwo: questionTwo,
        questionThree: questionThree,
        questionFour: questionFour,
        questionFive: questionFive,
        questionSix: questionSix,
        questionSeven: questionSeven,
        questionEight: questionEight,
        questionNine: questionNine,
        questionTen: questionTen,
        eventId: eventId
      }).then((res) => {
        console.log(res)
        setQuestionnaireId(res.data._id)
        console.log("New Questionary Created")
      }).catch((err) => {
        console.log(err)
      })
  }  

  return (
        <Form id='loginComp'>
            <Form.Group className="mb-3" controlId="question1">
            <Form.Label><b>Q1. </b>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate...</Form.Label>
            <Form.Control type="text" placeholder="E.g. The speaker" onChange={(event) => setQuestionOne(event.target.value)} required={true}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="question2">
            <Form.Label><b>Q2. </b>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate...</Form.Label>
            <Form.Control type="text" placeholder="E.g. The venue/location" onChange={(event) => setQuestionTwo(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="question3">
            <Form.Label><b>Q3. </b>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate...</Form.Label>
            <Form.Control type="text" placeholder="E.g. The content/program" onChange={(event) => setQuestionThree(event.target.value)} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="question4">
            <Form.Label><b>Q4. </b>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate...</Form.Label>
            <Form.Control type="text" placeholder="E.g. The organization and logistics of the event" onChange={(event) => setQuestionFour(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="question5">
            <Form.Label><b>Q5. </b>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate...</Form.Label>
            <Form.Control type="text" placeholder="E.g. The technology and equipment used during the event" onChange={(event) => setQuestionFive(event.target.value)} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="question6">
            <Form.Label><b>Q6. </b>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate...</Form.Label>
            <Form.Control type="text" placeholder="E.g. The engagement/participation from the audience" onChange={(event) => setQuestionSix(event.target.value)} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="question7">
            <Form.Label><b>Q7. </b>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate...</Form.Label>
            <Form.Control type="text" placeholder="E.g. The atmosphere/vibe of the event" onChange={(event) => setQuestionSeven(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="question8">
            <Form.Label><b>Q8. </b>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate...</Form.Label>
            <Form.Control type="text" placeholder="E.g. The amenities" onChange={(event) => setQuestionEight(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="question9">
            <Form.Label><b>Q9. </b>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate...</Form.Label>
            <Form.Control type="text" placeholder="E.g. The audio" onChange={(event) => setQuestionNine(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="question10">
            <Form.Label><b>Q10. </b>On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate...</Form.Label>
            <Form.Control type="text" placeholder="E.g. The duration of the event" onChange={(event) => setQuestionTen(event.target.value)} />
            </Form.Group>
            <Button variant="warning" type="submit" onClick={handleSubmit}>
            Submit & Go to Step 3
            </Button>
        </Form>
  );
};