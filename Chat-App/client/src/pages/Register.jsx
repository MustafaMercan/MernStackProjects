import React from 'react'
import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap"
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
//prettier
const Register = () => {

    const {registerInfo, updateRegisterInfo} = useContext(AuthContext)

  return (
    <>
        <Form>
            <Row style={{
                height:"100vh",
                justifyContent:"center",
                paddingTop:"20%"
            }}>
                <Col xs={6}>
                    <Stack gap={3}>
                        <h2>Register</h2>
                        <Form.Control type='text' placeholder='Name' style={{margin:'1rem 0'}} onChange={(event) => updateRegisterInfo({...registerInfo,name: event.target.value}) }/>
                        <Form.Control type='email' placeholder='Email' style={{margin:'1rem 0'}} onChange={(event) => updateRegisterInfo({...registerInfo,email: event.target.value}) } />
                        <Form.Control type='password' placeholder='Password' style={{margin:'1rem 0'}} onChange={(event) => updateRegisterInfo({...registerInfo,password: event.target.value}) } />
                        <Button variant='primary' type='submit' style={{margin:'1rem 0'}}>
                            Register
                        </Button>
                        <Alert variant='danger'><p>An error occured.</p></Alert>
                    </Stack>
                </Col>
            </Row>
        </Form>
    </>
  )
}

export default Register
