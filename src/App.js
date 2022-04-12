import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './App.css';
import app from "./firebase.init";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const auth = getAuth(app);

function App() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('')

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  const handlePassBlur = event => {
    setPass(event.target.value);
  }
  const handleOnSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;

    }
    if (!/(?=.* [!@#$%^&*])/.test(pass)) {
      setError('Password shoud contain at least one special character!')
      return;
    }

    setValidated(true);

    createUserWithEmailAndPassword(auth, email, pass)
      .then(res => {
        const user = res.user
        setEmail(user)
        console.log(user)
      })
      .catch(error => {
        console.error(error)
      })
  }
  return (
    <div >
      <div className="registration w-50 mx-auto mt-5">
        <h1 className="text-primary">Please Register!</h1>
        <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePassBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>
          <p className="text-danger">{error}</p>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
