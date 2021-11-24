import React from 'react'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import dog1 from "../images/dog1.png"
import dog2 from "../images/dog2.png"
import dog3 from "../images/dog3.png"
import dog4 from "../images/dog4.png"
import dog5 from "../images/dog5.png"
import dog6 from "../images/dog6.png"
import dog7 from "../images/dog7.png"
import dog8 from "../images/dog8.png"
import dog9 from "../images/dog9.png"
import dog10 from "../images/dog10.png"
import dog11 from "../images/dog11.png"
import dog12 from "../images/dog12.png"

import { Col, Card, } from 'react-bootstrap'
import Sidebar from './Sidebar'





const Mycard = () => {
    const dogs = [
        {
            name: "dog",
            image: dog1,
            id: 1
        },
        {
            name: "dogbull",
            image: dog2,
            id: 2
        },

        {
            name: "dogcat",
            image: dog3,
            id: 3
        },

        {
            name: "dogkin",
            image: dog4,
            id: 4
        },
        {
            name: "dogkeepy",
            image: dog5,
            id: 5
        },
        {
            name: "dogkeepy",
            image: dog6,
            id: 6
        },
        {
            name: "dogkeepy",
            image: dog7,
            id: 7
        },
        {
            name: "dogkeepy",
            image: dog8,
            id: 8
        },
        {
            name: "dogkeepy",
            image: dog9,
            id: 9
        },
        {
            name: "dogkeepy",
            image: dog10,
            id: 10
        },
        {
            name: "dogkeepy",
            image: dog11,
            id: 11
        },

        {
            name: "dogkeepy",
            image: dog12,
            id: 12
        },
    ]

    const [appear, setAppear] = useState(false);
    const handleClose = () => { setAppear(false) ; setShow(false);}

    const [show, setShow] = useState(false);
    const handleShow = (dog) => { setShow(true); console.log (dog);``}


    return (
        <div className="container">
            <div className="row">
                {
                    dogs.map((dog) => (
                        <Col md={4} key={dog.id} className="mb-3">
                            <Card onClick={handleShow}>
                                <Card.Img variant="top" src={dog.image} />
                                <h4>{dog.name}</h4>

                            </Card>
                         


                            {
                                appear ? <Modal show={appear} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>{dog.name}</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>  : ""   
                               
                            }
                            
                            {
                                
                                show && <Sidebar showSidebar={show} closeSidebar={handleClose} dog={dog}/>
                             }
                        </Col>
                      
                        
                    ))
                }

            </div>
            <Button onClick={() => { setAppear(true) }} variant="primary" size="lg" active className="justify-content-end ">
                Search
            </Button>
        </div>

    )
}

export default Mycard
