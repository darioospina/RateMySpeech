import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Axios from 'axios'

// CSS Style Sheet
import '../Styles/DOStyles.css'

// Pie Chart
import { PieChart } from 'react-minimal-pie-chart';

// Table 
import Table from 'react-bootstrap/Table';

export const Report = () => {
    // Creating a constructor for the PieChart
    class PieChartData {
        constructor(answerNum, title, value, color) {
          this.answerNum = answerNum;
          this.title = title;
          this.value = value;
          this.color = color;
        }
    }

    // Getting the QuestionnaireID
    const location = useLocation();
    const pathName = location.pathname.split('/')
    const [questionnaireId, setQuestionnaireId] = useState(pathName[pathName.length - 1])

    // ** // SECTION SEPARATOR // ** 
    // Getting the Questions based on the QuestionnaireID
    // ** // SECTION SEPARATOR // ** 
    const [questionsSource, setQuestionsSource] = useState("");
    const [questions, setQuestions] = useState("")
    const questionOrder = [
        "questionOne",
        "questionTwo",
        "questionThree",
        "questionFour",
        "questionFive",
        "questionSix",
        "questionSeven",
        "questionEight",
        "questionNine",
        "questionTen"
      ];

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_API_URL}/questionsRoutes/getQuestionsFromOneEvent/${questionnaireId}`)
        .then((res) => {
            setQuestionsSource(res.data)
          }).catch((err) => {
            console.log(err)
          })
    }, [questionnaireId]);

    // This hook transforms the object questionsSource into an array, then if filters only the keys that include "question" in their name and removes all the empty values. Then removes the keys and finally sort the new array the questionOrder
    useEffect(() => {
        setQuestions(
            Object.entries(questionsSource)
            .filter(([key, value]) => key.includes("question") && value.trim() !== "")
            .map(([_, value]) => value)
            .sort(([a], [b]) => questionOrder.indexOf(a) - questionOrder.indexOf(b))
        )
        console.log(questions)
    }, [questionsSource]);

    
    // ** // SECTION SEPARATOR // **
    // Getting All the Answers from One Questionnaire
    // ** // SECTION SEPARATOR // **
    const [tabulatedData, setTabulatedData] = useState("")

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_API_URL}/answersRoutes/getAnswersByQuestionnaire/${questionnaireId}`)
        .then((res) => {
            setTabulatedData(res.data)
          }).catch((err) => {
            console.log(err)
          })        
    }, [])


    // ** // SECTION SEPARATOR // **
    // Getting the Data from the QuestionnaireID
    // ** // SECTION SEPARATOR // **
    const [dataSource,setDataSource] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_API_URL}/answersRoutes/getReportInfo/${questionnaireId}`)
        .then((res) => {
            setDataSource(res.data[0])
          }).catch((err) => {
            console.log(err)
          })        
    }, [])
    
    useEffect(() => {
        const newData = Object.keys(dataSource).map((key) => {
  
          const subarray = dataSource[key].map((obj) => {
            console.log(key + " " + dataSource[key].length)
            return {
              title: obj._id ? `${obj._id}` : `${key.slice(-1)}`,
              value: Math.round(obj.count / tabulatedData.length * 100),
              color: '#' + Math.floor(Math.random() * 16777215).toString(16) // random color
            };
          });
          return subarray;
        });
        setData(newData);
        console.log(data);
      }, [dataSource, setData]);

    
    return (
            <>
            <div style={{textAlign: "center"}}>
                <h4>Questionnaire ID</h4>
                <h1>{questionnaireId}</h1>
                <h4 className='reportSubtitle'>Answers</h4>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {data && data.map((question, index) => (
                question.length > 1 && 
                <div key={index} className="questionChart">
                    <div>
                    <h5 style={{textAlign: "center", marginBottom: "20px"}}>
                    On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate <span style={{color: 'red'}}>{questions[index]}</span>
                    </h5>
                    <PieChart
                        className='pieChartStyle'
                        animate
                        animationDuration={2000}
                        animationEasing="ease-in"
                        center={[50, 50]}
                        data={question}
                        lineWidth={15}
                        lengthAngle={360}
                        paddingAngle={0}
                        radius={50}
                        startAngle={0}
                        viewBoxSize={[100, 100]}                        
                        label={(question) => question.dataEntry.title + " : " + question.dataEntry.value + "%"}
                        labelPosition={80}
                    />
                    </div>
                </div>
            ))}
        </div>
        <div style={{textAlign: "center"}}>
               <h4 className='reportSubtitle'>Tabulated Answers</h4>
        </div>
        <div style={{margin: "20px 40px 0px 40px"}}>
            <>
             <Table responsive="lg">
             <thead>
             <tr>
                 <th>#</th>
                 <th>Name</th>
                 <th>Email</th>
                 <th>Phone</th>
                 {data && data.map((question, index) => (
                    question.length > 1 &&
                    <th key={index}>Q{index + 1}</th>
                 ))}
                 <th>Comments</th>
             </tr>
             </thead>
             
            {tabulatedData && tabulatedData.map((person, index) => (
             <tbody key={index}>
             <tr>
                 <td>{index + 1}</td>
                 <td>{person.attendeeName}</td>
                 <td>{person.attendeeEmail}</td>
                 <td>{person.attendeePhone}</td>
                 {person.answerOne != null &&
                    <td>{person.answerOne}</td>
                 }
                 {person.answerTwo != null &&
                    <td>{person.answerTwo}</td>
                 }      
                 {person.answerThree != null &&
                    <td>{person.answerThree}</td>
                 }          
                 {person.answerFour != null &&
                    <td>{person.answerFour}</td>
                 }      
                 {person.answerFive != null &&
                    <td>{person.answerFive}</td>
                 }      
                 {person.answerSix != null &&
                    <td>{person.answerSix}</td>
                 }      
                 {person.answerSeven != null &&
                    <td>{person.answerSeven}</td>
                 }      
                 {person.answerEight != null &&
                    <td>{person.answerEight}</td>
                 }      
                 {person.answerNine != null &&
                    <td>{person.answerNine}</td>
                 }      
                 {person.answerTen != null &&
                    <td>{person.answerTen}</td>
                 }         
                 <td>{person.comments}</td>
            </tr>
            </tbody>
            ))}
            </Table>
            </>



        </div>                        
        </>
    )
}