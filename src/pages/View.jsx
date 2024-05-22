import React, { useEffect,useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishList } from '../redux/slices/wishListSlice'

const View = () => {
  const [product,setProduct] = useState({})
  const {id} = useParams()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
  console.log(userWishlist);
  useEffect(()=>{
    if(localStorage.getItem("allProducts")){
      const allProducts = JSON.parse(localStorage.getItem("allProducts"))
      setProduct( allProducts.find(item=>item.id == id))
    }

  },[])

  const handleWishlist = ()=>{
    if(userWishlist?.includes(product)){
      alert("item already in your wishlist!!!")
    }else{
      dispatch(addToWishList(product))
    }
  }

  return (
    <>
      <Header />

      <div style={{ marginTop: '150px', height: '70vh' }} className='container d-flex align-items-center w-100'>
        <div className='row align-items-center mb-5 w-100'>
          <div className='col-lg-5'>
            <img className='w-100' height={'400vh'} src={product?.thumbnail} alt="product image" />
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-6'>
            <h5>PID: {product?.id}</h5>
            <h1>{product?.title}</h1>
            <h3 className='fw-bolder text-dark'> $ {product?.price}</h3>
            <p style={{ textAlign: 'justify' }}> <span className='fw-bolder'>Description:</span> {product?.description} </p>


            <div onClick={handleWishlist} className='d-flex justify-content-between mt-3'>
              <button className='btn btn-outline-dark'> <i className='fa-solid fa-heart text-danger'></i>Add to Wishlist </button>
              <button className='btn btn-outline-dark'> <i className='fa-solid fa-cart-plus text-success'></i>Add to Cart </button>

            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default View