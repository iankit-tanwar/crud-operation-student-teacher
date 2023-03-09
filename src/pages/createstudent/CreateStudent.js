import React from 'react'
import { Button, Form, Table } from 'react-bootstrap'

export default function CreateStudent() {
    return (
        <div className='container'>

            <h1 className='mt-5 text-center'>CREATE STUDENTS</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>NAME</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <hr />
                <Form.Select aria-label="Default select example">
                    <option>Select Teacher</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <br />


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <hr />
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>
                            <Button className='btn btn-success btn-sm me-3'> VIEW</Button>
                            <Button className='btn btn-primary btn-sm me-3'> EDIT</Button>
                            <Button className='btn btn-danger btn-sm me-3'> DELETE</Button>
                        </td>
                    </tr>

                </tbody>
            </Table>
        </div>
    )
}
