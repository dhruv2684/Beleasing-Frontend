import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//icon
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <div>

      <Container fluid className='sticky bg-white '>
          <Row className='align-items-center'>
            <div className='col-6 d-flex align-items-center'>
                <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2022/12/beleasing2.svg" alt="" />
                <h3 className='fs-6 ms-3 mb-0 word color'>LUXURY CARS FOR YOU</h3>
            </div>
            <div className='col-6 justify-content-end d-flex pe-0 aaaa'>
              <ul className='d-flex  align-items-center mb-0'>
                <li><Link to="/" className="text-black p-4 bele-hov fw">HOME</Link></li>
                <li><Link to="/all-cars" className="text-black p-4 bele-hov fw  menu-hov-bele">OFFER <FaAngleDown /></Link>
                  <div className="menu mt-3 pt-4">
                    <Row>
                        <h4 className="ms-3 mb-3">CHOOSE FROM 1,200 NEW CARS</h4>
                        <div className="w20 mb-5 figure">
                         <Link to="/sedan"> <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-category3.webp" width="100%" alt="" /></Link>
                         <Link to="/sedan "><h6 className="text-dark text-center">SEDAN</h6></Link> 
                        </div>
                        <div className="w20 mb-4 figure">
                          <Link to="/hatchback"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-category4.webp" width="100%" alt="" /></Link>
                          <Link to="/hatchback "><h6 className="text-dark text-center">HATCHBACK</h6></Link>
                        </div>
                        <div className="w20 mb-4 figure">
                          <Link to="/combi"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-category1.webp" width="100%" alt="" /></Link>
                          <Link to="/combi "><h6 className="text-dark text-center">COMBI</h6></Link>
                        </div>
                        <div className="w20 mb-4 figure">
                          <Link to="/suv"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-category2.webp" width="100%" alt="" /></Link>
                          <Link to="/suv "><h6 className="text-dark text-center">SUV</h6></Link>
                        </div>
                        <div className="w20 mb-4 figure">
                          <Link to="/all-cars"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/03/beleasing2-category5.webp" width="100%" alt="" /></Link>
                          <Link to="/all-cars "><h6 className="text-dark text-center">ALL CARS</h6></Link>
                        </div>
                    </Row>
                  </div>
                </li>
                <li><Link to="/about" className="text-black p-4 bele-hov fw">ABOUT</Link></li>
                <li><Link to="/contact" className="text-black p-4 bele-hov fw">CONTACT</Link></li>
              </ul>
            </div>
          </Row>
      </Container>


    </div>
  )
}

export default Header;