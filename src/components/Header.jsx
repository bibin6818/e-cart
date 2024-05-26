import React from 'react'
import { Container,Nav,Navbar,Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '../redux/productSlice'


function Header({insideHome}) {
  const dispatch = useDispatch()
  const yourWishlist = useSelector(state=>state.wishlistReducer)
  const CartList = useSelector(state=>state.cartReducer)
  return (
    <div>
      <Navbar expand="lg" className="bg-info w-100 position-fixed top-0" style={{zIndex:'10'}}>
      <Container>

        <Navbar.Brand><Link className='fw-bolder' to={'/'} style={{color:'white',textDecoration:'none'}}><i className='fa-solid fa-truck-fast'></i>Ekart-Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto ">
            { insideHome && 
              <Nav.Link>
                <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} type="text" style={{width:'500px'}} className='rounded p-1' placeholder='Search products here !!!' />
              </Nav.Link>
            }
            <Nav.Link>
              <Link className='fw-bolder' style={{color:'white',textDecoration:'none'}} to={'/wishlist'}>
                <i className='fa-solid fa-heart text-danger me-2'></i>Wishlist 
                <Badge>{yourWishlist?.length}</Badge> 
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='fw-bolder' style={{color:'white',textDecoration:'none'}} to={'/cart'}>
                <i className='fa-solid fa-cart-plus me-2'></i>Cart 
                <Badge>{CartList?.length}</Badge>
              </Link>
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header