// import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const Category = () => {
  return (
    <div>
         <Row className="my-2 mb-5">
            <Col className="d-flex justify-content-center">
                <div>
                    <button style={{ border: "1px solid #b45b35" }} className="btn mx-2">All</button>
                </div>
                <div>
                    <button style={{ border: "1px solid #b45b35" }} className="btn mx-2">breakfast</button>
                </div>   
                <div>
                    <button style={{ border: "1px solid #b45b35" }} className="btn mx-2">Lunch</button>
                </div>   
                <div>
                    <button style={{ border: "1px solid #b45b35" }} className="btn mx-2">Dinner</button>
                </div>   
            </Col>
        </Row>
    </div>
  )
}
