import React from 'react'
import { Navbar , Container} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Container className="m-3 mx-3">
                <Navbar expand="lg" variant="light" bg="white ">
                    <Container>
                        <Navbar.Brand href="#" className="fs-1 display-1">Search</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </div>
    )
}

export default Header
