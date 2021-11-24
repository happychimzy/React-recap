import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


const Mytabs = () => {
    return (
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-2 mx-3">
                <Tab eventKey="home" title="All">
                </Tab>
                <Tab eventKey="profile" title="Result">
                </Tab>
            </Tabs>
        </div>
    )
}

export default Mytabs
