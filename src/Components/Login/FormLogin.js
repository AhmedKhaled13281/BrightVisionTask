import React, { useState , useRef} from "react";
import { Form, Button, Col } from "react-bootstrap";

const FormLogin = () => {
    const userNameRef = useRef()
    const passwordRef = useRef()
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userNameValue = userNameRef.current.value
    const passwordValue = passwordRef.current.value
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
        const data = {
            username : userNameValue,
            password : passwordValue
        }
        console.log(data);
    }

    setValidated(true);
  };

  return (
    <Col
      sm={12}
      md={6}
      lg={6}
      className="bg-secondary rounded-4 mx-auto p-3 mt-3"
    >
      <section className=" p-4 mt-3">
        <div className="text-center mb-4 ">
          <h2 className="text-white">Welcome To <i className="text-warning">Bright Vision</i> Company</h2>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="validationCustom01">
            <Form.Label className="text-white fs-5">Username</Form.Label>
            <Form.Control ref={userNameRef} required type="email" placeholder="Username" />
            <Form.Control.Feedback type={!validated ? "invalid" : "valid"}>
              {!validated ? "Please Enter a username." : "Looks Good!"}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2" controlId="validationCustom02">
            <Form.Label className="text-white fs-5">Password</Form.Label>
            <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
            <Form.Control.Feedback type={!validated ? "invalid" : "valid"}>
              {!validated ? "Please Enter a username." : "Looks Good!"}
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="mt-3 text-center " type="submit">
            Sign in
          </Button>
        </Form>
      </section>
    </Col>
  );
};

export default FormLogin;
