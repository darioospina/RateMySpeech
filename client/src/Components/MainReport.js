import React from 'react'

// CSS Style Sheet
import '../Styles/DOStyles.css'

// Pie Chart
import { PieChart } from 'react-minimal-pie-chart';

// Table 
import Table from 'react-bootstrap/Table';

export const MainReport = () => {

    const questions = [
        "On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate the Speaker",
        "On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate the Event",
        "On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate the Venue",
        "On a scale of 1 to 5 with 5 as the highest and 1 as the lowest, how do you rate the Material"
    ]

    const atendees = [
        {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "555-1234",
            answers: {
            q1: "2",
            q2: "4",
            q3: "3",
            q4: "5",
            comment: "I thought the venue was excellent and the speaker was very engaging. The content was also very informative and the materials provided were very helpful."
            }
        },
        {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            phone: "555-5678",
            answers: {
            q1: "3",
            q2: "2",
            q3: "4",
            q4: "1",
            comment: "I found the venue to be a bit crowded, but the speaker was very knowledgeable and the content was well-organized. The materials provided were also very useful."
            }
        },
        {
            name: "Bob Johnson",
            email: "bob.johnson@example.com",
            phone: "555-9012",
            answers: {
            q1: "1",
            q2: "3",
            q3: "2",
            q4: "4",
            comment: "The venue was a bit difficult to find, but the speaker was excellent and the content was very interesting. The materials provided were also very well-designed."
            }
        },
        {
            name: "Sara Lee",
            email: "sara.lee@example.com",
            phone: "555-3456",
            answers: {
            q1: "5",
            q2: "1",
            q3: "3",
            q4: "2",
            comment: "The venue was well-suited for the event and the speaker was very engaging. The content was also very useful and the materials provided were of high quality."
            }
        },
        {
            name: "Tom Smith",
            email: "tom.smith@example.com",
            phone: "555-7890",
            answers: {
            q1: "4",
            q2: "5",
            q3: "1",
            q4: "3",
            comment: "The venue was very comfortable and the speaker was very knowledgeable. The content was also very interesting and the materials provided were very helpful."
            }
        },
        {
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            phone: "555-2345",
            answers: {
            q1: "3",
            q2: "2",
            q3: "4",
            q4: "1",
            comment: "I found the venue to be a bit too warm, but the speaker was very engaging and the content was very informative. The materials provided were also very useful."
            }
        },
        {
            name: "Chris Lee",
            email: "chris.lee@example.com",
            phone: "555-6789",
            answers: {
            q1: "5",
            q2: "4",
            q3: "3",
            q4: "2",
            comment: "The venue was well-organized and the speaker was excellent. The content was also very useful and the materials provided were of high quality."
            }
        }
    ]

    const data = [
        [
            { title: 'A1', value: 10/5, color: '#003FFF' },
            { title: 'A2', value: 15/5, color: '#FFC000' },
            { title: 'A3', value: 20/5, color: '#FF9600' },
            { title: 'A4', value: 20/5, color: '#FF2600' },
            { title: 'A5', value: 20/5, color: '#399FFF' }
        ],
        [
            { title: 'B1', value: 10/5, color: '#003FFF' },
            { title: 'B2', value: 9/5, color: '#FFC000' },
            { title: 'B3', value: 11/5, color: '#FF9600' },
            { title: 'B4', value: 20/5, color: '#FF2600' },
            { title: 'B5', value: 40/5, color: '#399FFF' }
        ],
        [
            { title: 'C1', value: 10/5, color: '#003FFF' },
            { title: 'C2', value: 15/5, color: '#FFC000' },
            { title: 'C3', value: 20/5, color: '#FF9600' },
            { title: 'C4', value: 20/5, color: '#FF2600' },
            { title: 'C5', value: 20/5, color: '#399FFF' }
        ],
        [
            { title: 'D1', value: 10/5, color: '#003FFF' },
            { title: 'D2', value: 9/5, color: '#FFC000' },
            { title: 'D3', value: 11/5, color: '#FF9600' },
            { title: 'D4', value: 20/5, color: '#FF2600' },
            { title: 'D5', value: 40/5, color: '#399FFF' }
        ]
    ]

    return (
            <>
            <div style={{textAlign: "center"}}>
                <h4>Event name</h4>
                <h1>The Language International Symposium</h1>
                <h4 className='reportSubtitle'>Answers</h4>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {data && data.map((question, index) => (
                <div key={index} className="questionChart">
                    {console.log(question)}
                    <div>
                    <h5 style={{textAlign: "center", marginBottom: "20px"}}>
                        {questions[index].split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                                {i === questions[index].split(' ').length - 1 
                                    ? <span style={{color: 'red'}}>{word}</span> 
                                    : <span>{word}</span>
                                }
                                {' '}
                            </React.Fragment>
                        ))}
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
                 <th>Q1</th>
                 <th>Q2</th>
                 <th>Q3</th>
                 <th>Q4</th>
                 <th>Comments</th>
             </tr>
             </thead>
             
            {atendees && atendees.map((person, index) => (
             <tbody key={index}>
             <tr>
                 <td>{index + 1}</td>
                 <td>{person.name}</td>
                 <td>{person.email}</td>
                 <td>{person.phone}</td>
                 <td>{person.answers.q1}</td>
                 <td>{person.answers.q2}</td>
                 <td>{person.answers.q3}</td>
                 <td>{person.answers.q4}</td>
                 <td>{person.answers.comment}</td>
            </tr>
            </tbody>
            ))}
            </Table>
            </>



        </div>                        
        </>
    )
}