import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'



const View = () => {
  const [product,setProduct] = useState([])
  const {id} = useParams()
  console.log(product);

  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCartlist = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  console.log(userWishlist);

  useEffect(()=>{
    if(localStorage.getItem("allProducts")){
      const allProducts = JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])

  const handleWishlist = () =>{
    if(userWishlist?.includes(product)){
      alert("item already in yoour wishlist")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCartlist = () =>{
    const existingProduct = userCartlist?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      alert("Existing product incremented")
    }else{
      dispatch(addToCart(product))
    }
  }

  return (
    <>
      <Header/>
      <div style={{marginTop:'150px',height:'70vh'}} className='container d-flex align-items-center'>
        <div className="row align-items-center mb-5 w-100">
          <div className="col-lg-5">
            <img className='w-100' height={'400vh'} src={product?.thumbnail} alt="" />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <h5>PID: {product?.id}</h5>
            <h1>{product?.title}</h1>
            <h3 className='fw-bolder text-danger'>$ 450</h3>
            <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description :</span> {product?.description}</p>
            <div className='d-flex justify-content-between mt-3'>
              <button onClick={handleWishlist} className='btn btn-outline-dark'><i className=' fa-solid fa-heart text-danger'></i>ADD TO WISHLIST</button>
              <button onClick={handleCartlist} className='btn btn-outline-dark'><i className=' fa-solid fa-cart-plus text-success'></i>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View