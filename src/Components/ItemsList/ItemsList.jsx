// import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

export const ItemsList = () => {
  return (
    <Row>                
        <Col sm="12" className="mb-3">
            <Card className="d-flex flex-row" style={{ backgroundColor: '#F8F8F8' }}>
                <Card.Img className="item-image" variant="top" src='../../../public/1.png' />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <div className="item-title">breakfast</div>
                        <div className="item-price">120 L.E</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                        <div className="item-description">breakfast breakfast breakfast breakfast breakfast breakfast breakfast</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

        <Col sm="12" className="mb-3">
            <Card className="d-flex flex-row" style={{ backgroundColor: '#F8F8F8' }}>
                <Card.Img className="item-image" variant="top" src='../../../public/2.png' />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <div className="item-title">Lunch</div>
                        <div className="item-price">120 L.E</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                        <div className="item-description">Lunch Lunch Lunch Lunch Lunch Lunch Lunch Lunch Lunch Lunch Lunch</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

        <Col sm="12" className="mb-3">
            <Card className="d-flex flex-row" style={{ backgroundColor: '#F8F8F8' }}>
                <Card.Img className="item-image" variant="top" src='../../../public/3.png' />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <div className="item-title">Dinner</div>
                        <div className="item-price">120 L.E</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                        <div className="item-description">Dinner Dinner Dinner Dinner Dinner Dinner</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>

)}
