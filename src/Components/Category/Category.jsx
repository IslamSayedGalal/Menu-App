// import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {Roll} from 'react-reveal';

export const Category = ({filterByCategory, AllCategories}) => {

    // function to filter buttons
    const clickFilter = (category)=>{
        filterByCategory(category);
    }

    const AllButtons = AllCategories.map((button)=>{
        return(
            <div>
                <button onClick={()=> clickFilter(button)} style={{ border: "1px solid #b45b35" }} className="btn mx-2">{button}</button>
            </div>
        )
    })

  return (
    <div>
         <Row className="my-2 mb-5">
            <Col className="d-flex justify-content-center">
                <Roll>
                    {
                            AllCategories.length >= 1? AllButtons : null
                    }
                </Roll>
            </Col>
        </Row>
    </div>
  )
}
