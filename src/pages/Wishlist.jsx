import React from 'react'
import Header from '../Components/Header'
import { Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'


const Wishlist =() => {

  const ourWishlist = useSelector(state=>state.wishlistReducer)
  const ourCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()

  const handleCart = (product)=>{
    const existingProduct = ourCart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      alert("Existing product incremented")
    }else{
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))

    }
  }
  return (
    <div>
      <Header/>
      <div style={{marginTop:'100px'}} className="conatainer-fluid">
        {
          ourWishlist?.length>0?
          <div>
            <h3 className='text-danger ms-2'>Your Wishlist</h3>
            <Row className='my-5'>
              {
                ourWishlist?.map(product=>(
                  <Col key={product?.id} className='mb-5 me-2 ms-2' sm={12} md={6} lg={4} xl={3} >
                    <Card className='shadow rounded' style={{ width: '18rem' }}>
                      <Card.Img height={'180px'} variant="top" src={product?.thumbnail} />
                      <Card.Body className='text-center'>
                        <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
                        <div className="d-flex justify-content-around mt-3">
                          <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn btn-outline-dark'><i  className="fa-solid fa-heart-circle-xmark text-danger"></i></button>
                          <button onClick={()=>handleCart(product)} className='btn btn-outline-dark'><i  className="fa-solid fa-cart-plus text-success"></i></button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </div>
          :
          <div className='text-center text-danger'>
            <img style={{width:'400px'}} src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg" alt="" />
            <h3>Your wishlist is empty!!</h3>
          </div>
        }
      </div>
    </div>
  )
}

export default Wishlist