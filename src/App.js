import { getAuth } from "firebase/auth";
import './App.css';
import app from "./firebase.init";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
const auth = getAuth(app);

function App() {

  const [email, setEmail] = useState()

  const handleEmailBlur = event => {
    console.log(event.target.value);
  }
  const handlePassBlur = event => {
    console.log(event.target.value);
  }
  const handleOnSubmit = (event) => {
    console.log('Form Submitted');
    event.preventDefault();
  }
  return (
    <div className="registration w-50 mx-auto mt-5">
      <h1 className="text-primary">Please Register!</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePassBlur} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
