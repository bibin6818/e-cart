import React from 'react'
import Header from '../components/Header'
import { Row, Col, Card } from 'react-bootstrap'
import { useSelector ,useDispatch } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishListSlice'

const Wishlist = () => {
  const dispatch = useDispatch()

  const ourWishlist = useSelector(state=>state.wishlistReducer)

  return (
    <>
     
        <Header />
        <div style={{ marginTop: '150px' }} className='container-fluid'>
          {ourWishlist?.length>0?
         <div>
            <h3 className='text-black'>YOUR WISHLIST</h3>
            <Row className="my-5">
              {ourWishlist?.map((product)=>(
                
                
              
              <Col key={product?.id} className='mb-5 me-2' sm={12} md={6} lg={4} xl={3}>

                <Card className='shadow rounded' style={{ width: '18rem' }}>
                  <Card.Img height={'180px'} variant="top" src={product?.thumbnail} />
                  <Card.Body>
                    <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
                    <div className='text-center mt-3'>
  
                      <div className='d-flex justify-content-around mt-3'>
                        <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn'><i className='fa-solid fa-heart-circle-xmark text-danger'></i></button>
                        <button className='btn'><i className='fa-solid fa-cart-plus text-success'></i></button>
  
                      </div>
                    </div>
                  </Card.Body>
                </Card>
  
              </Col>
                ))}
            </Row>
         </div>
:
        <div style={{height:'60vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3613108-3020773.png" alt="" />
          <h3 className='text-danger'>Your wishlist is empty!!!</h3>
        </div>
        }
      </div>


    </>
  )

}

export default Wishlist
