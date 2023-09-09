import React from 'react'
import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap"
//prettier
const Login = () => {
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
                        <h2>Login</h2>
                        <Form.Control type='email' placeholder='Email' style={{margin:'1rem 0'}} />
                        <Form.Control type='password' placeholder='Password' style={{margin:'1rem 0'}}/>
                        <Button variant='primary' type='submit' style={{margin:'1rem 0'}}>
                            Login
                        </Button>
                        <Alert variant='danger'><p>An error occured.</p></Alert>
                    </Stack>
                </Col>
            </Row>
        </Form>
    </>
  )
}

export default Login
