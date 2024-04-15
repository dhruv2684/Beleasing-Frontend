import React from 'react'
import { Container ,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom'
//icon
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <Container fluid className="bg-dark-blue pt-5 pb-5">
            <Row className='align-items-center pb-5 mb-5'>
              <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
                <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-footer-logo.svg" width={100} alt="" />
                <h3 className='fs-14 ms-3 mb-0 word text-white'>LUXURY CARS FOR YOU</h3>
              </div>
              <div className="col-md-6 col-12 d-flex justify-content-center mt-md-0 mt-3">
                <ul className='d-flex mb-0 me-3'>
                  <li><Link to="" className="text-white "><FaFacebookF /></Link></li>
                  <li><Link to="" className="text-white ps-4"><FaTwitter /></Link></li>
                  <li><Link to="" className="text-white ps-4"><FaYoutube /></Link></li>
                  <li><Link to="" className="text-white ps-4"><FaLinkedinIn /></Link></li>
                </ul>
              </div>
            </Row>
            <Row className='pt-md-5 pt-3 text-center'>
                <div className="col-md-3 col-sm-6 col-12 mt-md-0 mt-4  ">
                  <ul className='mb-0 ps-0'>
                    <li className='mb-2'><Link to="" className="text-white">About</Link></li>
                    <li className='mb-2'><Link to="" className="text-white">Contact us</Link></li>
                    <li className='mb-2'><Link to="" className="text-white">Accessibility</Link></li>
                    <li className='mb-2'><Link to="" className="text-white">Carreers</Link></li>
                    <li className='mb-2'><Link to="" className="text-white">Request brochure</Link></li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-12 mt-md-0 mt-4  ">
                  <p className='mb-2 text-white'>Leasing & Finance</p>
                  <ul className=' ps-0'>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Apply for credit</Link></li>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Reward & Finance programs</Link></li>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">End of lease options</Link></li>
                  </ul>
                  <p className='mb-2 text-white'>Help & Support</p>
                  <ul className='ps-0 mb-0'>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Roadside assistance</Link></li>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Navigation</Link></li>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">FAQ</Link></li>
                  </ul>
                </div>  
                <div className="col-md-3 col-sm-6 col-12 mt-md-0 mt-4  ">
                  <p className='mb-2 text-white'>Owners</p>
                  <ul className=' ps-0'>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Benefits</Link></li>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Pay my bill</Link></li>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Drivers website</Link></li>
                  </ul>
                  <p className='mb-2 text-white'>Our Brand</p>
                  <ul className='ps-0 mb-0'>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Motorsports</Link></li>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Safety technology</Link></li>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Luxury to buy</Link></li>
                  </ul>
                </div>  
                <div className="col-md-3 col-sm-6 col-12 mt-md-0 mt-4  ">
                  <p className='mb-2 text-white'>Service & Warranty</p>
                  <ul className=' ps-0'>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Maintenance schedule</Link></li>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Find a dealer</Link></li>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Beleasing tire center</Link></li>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Service by Beleasing</Link></li>
                    <li className='mb-2'><Link to="" className="text-white c-g footer">Warranty coverage</Link></li>
                  </ul>
                </div>  
            </Row>
        </Container>
    </div>
  )
}

export default Footer ;