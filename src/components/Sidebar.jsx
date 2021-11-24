import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
// import dog1 from "../images/dog1.png"




const Sidebar = ({showSidebar, closeSidebar, dog}) => {
    
    console.log (dog);
            
    return (
            
                <>

                    <Offcanvas show={showSidebar} onHide={closeSidebar} key={dog.id}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <div className="animalss">
                                <img src={dog.image} alt="" />
                                <h2>{dog.name}</h2>

                            </div>
                    
                        </Offcanvas.Body>
                    </Offcanvas>
                </>


    )
}

export default Sidebar
