import React from 'react'
import Form from 'react-bootstrap/Form'

const Searchbar = () => {
    return (
        <div>
            <Form className="mx-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="dogs" />
                </Form.Group>
               
            </Form>
        </div>
    )
}

export default Searchbar
