import React from 'react'
import Header from '../components/Header'
const Cart = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: '150px' }} className='container'>
        <div className='cart'>
          <h1>Cart Summary</h1>
          <div className="row-mt-4"></div>
          <div className="col-lg-8">
            <table className="table shadow">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>...</th>
              </tr>
              </thead>  
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Iphone</td>
                  <td><img width={'50px'} src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" alt="" /></td>
                  <td> 
                    <div className="d-flex">
                      <button className='btn fw-bolder'>-</button>
                      <input value={10} style={{width:'50px', height:'30px', textAlign:'center', marginTop:'6px'}} className='fw-bolder me-1 ms-1' type="text" readOnly />
                      <button className='btn fw-bolder'>+</button>
                    </div>
                  </td>
                  <td>$450</td>
                  <td><button className='btn'><i className="fa-solid fa-trash text-danger"></i></button> </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>    
      
    </>
  )
}

export default Cart