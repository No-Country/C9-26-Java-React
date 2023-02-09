import { Button, Form } from "react-bootstrap"

const Login = () => {
    return (
        <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">         
          <Form.Control type="email" placeholder="Enter email" />         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="DNI" />
        </Form.Group>       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}
export default Login