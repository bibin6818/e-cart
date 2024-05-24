import { Badge,Container,Nav,Navbar} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../redux/slices/productSlice';

const Header = ({insideHome}) => {
  const dispatch = useDispatch()
const yourWishlist = useSelector(state=>state.wishlistReducer)

  return (
    <Navbar expand="lg" className="bg-primary w-100 position-fixed top-0" style={{zIndex:'10'}}>
    <Container>
      <Navbar.Brand>
       <Link className='fw-bolder' to={'/'} style={{color:'white',textDecoration:'none'}}><i className="fa-solid fa-truck-fast"> &nbsp; </i>FF Store</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            {insideHome &&
          <Nav.Link >
            <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'500px'}} type="text" className='rounded p-1 form-control border' placeholder='Search Products Here!!!' />
          </Nav.Link>}
          <Nav.Link>
            <Link className='fw-bolder' style={{color:'white',textDecoration:'none'}} to={'/Wishlist'}><i className="fa-solid fa-heart text-danger"> &nbsp; </i> Wishlist &nbsp;<Badge bg="light">{yourWishlist?.length}</Badge> </Link>
          </Nav.Link>

          
       
        <Nav.Link>
            <Link className='fw-bolder' style={{color:'white',textDecoration:'none'}} to={'/Cart'}>
            <i className="fa-solid fa-cart-shopping text-danger"> &nbsp; </i>Cart &nbsp; <Badge bg="light">8</Badge></Link></Nav.Link>

          
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header