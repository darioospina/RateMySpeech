import React from 'react'
import { ListOfEvents } from '../../Components/ListOfEvents'
import Container from 'react-bootstrap/Container';

export const AllEvents = () => {
    return (
        <div className='allevents-section'>
            <Container>
                <div className='divContainer table-events'>
                    <ListOfEvents />
                </div>
            </Container>
        </div>
    )
}