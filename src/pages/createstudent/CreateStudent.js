// import area


import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'


//functonal defination area
export default function CreateStudent() {
    //2.1 hooks area
    const [teacher, setTeacher] = useState([]);

    useEffect(() => {

        // I Want to call th all teachers Apis

        fetch(`http://localhost:1337/api/teachers`, {
            method: 'GET'

        })
            .then(res => res.json())
            //make the response json readable data



            .then((data) => {
                console.log(data.data)
                setTeacher(data.data)

            })
            .catch(() => {

            });




    }, []);


    //2.2 function area
    let createStudent = () => {
        console.log("hii")


        let payload =
        {
            "data": {
                "name": document.getElementById('student').value,
                "teachers": [parseInt(document.getElementById('teacher').value)]
            }

        }

        //Our payload is ready to send the server

        fetch(`http://localhost:1337/api/students`, {
           
              method: "POST",
              headers: {
                
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
        })
            .then(res=>res.json())
            .then((data) => {
                alert('Student inserted successfully')

                console.log(data)
               

            })
            .catch((err) => {

            });
        console.log(payload)


    }




    //2.3 return statement




    return (
        <div className='container'>




            <h1 className='mt-5 text-center'>CREATE STUDENTS</h1>



            <Form.Label>SELECT TEACHER</Form.Label>
            <Form.Select id='teacher' aria-label="Default select example">

                {
                    teacher.map((cv, idx, arr) => {
                        console.log(cv)
                        return <option key={idx} value={cv.id}>{cv.attributes.name}</option>
                    })

                }


            </Form.Select>


            <br />

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>NAME</Form.Label>
                    <Form.Control id='student' type="text" placeholder="ENTER NAME" />

                </Form.Group>




                <Button variant="primary" type="button" onClick={() => { createStudent() }}>
                    Submit
                </Button>
            </Form>
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


//export area