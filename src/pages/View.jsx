import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
      <Header />

      <div style={{ marginTop: '150px', height: '70vh' }} className='container d-flex align-items-center w-100'>
        <div className='row align-items-center mb-5 w-100'>
          <div className='col-lg-5'>
            <img className='w-100' src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" alt="product image" />
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-6'>
            <h5>PID:4</h5>
            <h1>Title</h1>
            <h3 className='fw-bolder text-dark'> $ 450</h3>
            <p style={{ textAlign: 'justify' }}> <span className='fw-bolder'>Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id, autem architecto laudantium delectus harum laboriosam doloribus ea facere, ad ducimus, eos consequatur deleniti aspernatur hic nam voluptate distinctio quam.</p>


            <div className='d-flex justify-content-between mt-3'>
              <button className='btn btn-outline-dark'> <i className='fa-solid fa-heart text-danger'></i>Add to Wishlist </button>
              <button className='btn btn-outline-dark'> <i className='fa-solid fa-cart-plus text-success'></i>Add to Wishlist </button>

            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default View