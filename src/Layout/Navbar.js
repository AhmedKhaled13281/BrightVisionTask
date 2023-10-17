import React from "react";
import { Stack, Container, Button , Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = ({ children }) => {
  return (
    <div>
    {/* <Stack direction="horizontal" className="bg-dark p-2" style={{position : "fixed" , width : "100%" , top : 0}} gap={3}> */}
    <Navbar fixed="top" expand="lg" className="bg-dark p-2 mb-4">
        <div className="p-2 text-white">
          <Link to="/">
          <h3 className="fst-italic text-warning">Bright Vision</h3>
          </Link>
        </div>
        <div className="p-2 ms-auto">
          <Button variant="btn btn-outline-primary">Sign Out</Button>
        </div>
      {/* </Stack> */}
      </Navbar>
      <Container style={{marginTop : "110px"}}>{children}</Container>

    </div>
  );
};

export default NavBar;
