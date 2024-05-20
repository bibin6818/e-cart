import React from 'react'
import Header from '../components/Header'
import { Row, Col, Card } from 'react-bootstrap'


const Wishlist = () => {
  return (
    <>
      <div>
        <Header />
        <div style={{ marginTop: '150px' }} className='container-fluid'>
          <h3 className='text-danger'>Your Wishlist </h3>
          <Row className="my-5">
            <Col className='mb-5 me-2' sm={12} md={6} lg={4} xl={3}>
              <Card className='shadow rounded' style={{ width: '18rem' }}>
                <Card.Img height={'180px'} variant="top" src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" />
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <div className='text-center mt-3'>

                    <div className='d-flex justify-content-around mt-3'>
                      <button className='btn'><i className='fa-solid fa-heart-circle-xmark text-danger'></i></button>
                      <button className='btn'><i className='fa-solid fa-cart-plus text-success'></i></button>

                    </div>
                  </div>
                </Card.Body>
              </Card>

            </Col>
          </Row>

        </div>
      </div>
    </>
  )

}

export default Wishlist