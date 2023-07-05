// import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Zoom } from 'react-reveal'

export const ItemsList = ({items}) => {
    
    const itemsList = items.map((item)=>{
        return(
            <Col key={item.id} sm="12" className="mb-3">
                <Card className="d-flex flex-row" style={{ backgroundColor: '#F8F8F8' }}>
                    <Card.Img className="item-image" variant="top" src={item.imageURL} />
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between">
                            <div className="item-title">{item.title}</div>
                            <div className="item-price">{item.price}</div>
                        </Card.Title>
                        <Card.Text className="py-2">
                            <div className="item-description">{item.description}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
  return (
    <Row> 
        <Zoom>         
            {itemsList}
        </Zoom>     
    </Row>

)}
