import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//iconn
import { FaArrowRight } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom'
//icon
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
  return (
    <div>
      {/*  */}
      <Container fluid className=' bele-img-2'>
        <Row className=' m-0'>
          <div className="col-4 pd ">
            <h2 className=" text-white text-center fs-md-1 fs-6 mb-5 bg-color word p-4 ms-3">ANY QUESTIONS? CONTACT US..</h2>
          </div>
        </Row>
      </Container>

      {/*  */}
      <Container fluid>
        <Row className='align-items-center'>
          <div className="col-lg-4 col-md-6 col-12 p-lg-5 p-3">
            <h6 className="">AVAILABLE CARS</h6>
            <h3><a href="" className='color fs-2'>+61 (0) 3 8376 6284</a></h3>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-lg-5 p-3">
            <h6 className="">KINDS OF CARS</h6>
            <h3><a href="" className='color fs-2'>noreply@envato.com</a></h3>
          </div>
          <div className="col-lg-4 col-12 p-lg-5 p-3">
            <ul className='d-flex mb-0 me-3 justify-content-md-center ps-0'>
              <li><Link to="" className="fs-4 color "><FaFacebookF /></Link></li>
              <li><Link to="" className="fs-4 color ps-5"><FaTwitter /></Link></li>
              <li><Link to="" className="fs-4 color ps-5"><FaYoutube /></Link></li>
              <li><Link to="" className="fs-4 color ps-5"><FaLinkedinIn /></Link></li>
            </ul>
          </div>
        </Row>
      </Container>

      {/*  */}
      <Container fluid className='bg-light mt-md-5 mt-3 pt-md-5 pt-3'>
        <Row>
          <div className="col-lg-6 col-12 pt-5 pb-lg-5 ">
            <div className="bg-white p-5">
              <h3 className="fs-2 mb-3">LEVEL 13, 2 ELIZABETH VICTORIA <br></br> 3000, AUSTRALIA</h3>
              <span className='c-g '>Monday - Friday: 8am - 5pm	</span>
              <img className='mt-5 text-center' src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-contact-pic1.webp" width="100%" alt="" />
            </div>
          </div>

          <div className="col-lg-6 col-12 pt-lg-5 pb-5 ">
            <div className="bg-white p-5">
              <h3 className="fs-2 mb-3">HAVE A QUESTION?<br></br>WRITE TO US!</h3>
              <div className='mt-5 '>
                <form>
                  <div class="pb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">Full Name</label> */}
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name"></input>
                  </div>
                  <div class="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">Phone</label> */}
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone*"></input>
                  </div>
                  <div class="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-mail"></input>
                  </div>
                  <div class="mb-4">
                    {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your message'></textarea>
                  </div>
                  <Button variant="" className='b-color text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3 mb-2'>SEND A MESSAGE</Button>{' '}
                </form>
              </div>
            </div>
          </div>

        </Row>
      </Container>

      {/* RENTING IS PURE CONVENIENCE */}
      <Container fluid className='pb-md-5 pb-3  bg-light'>
        <Row className='align-items-center'>
          <div className="col-lg-4 col-md-6 col-12 text-center ">
            <h2 className=' fs-1'>RENTING IS <br className='d-md-block d-none' />PURE<br /> CONVENIENCE</h2>
            <p className='mt-4 c-g'>Maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas.</p>
            <Button variant="" className='b-color text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3'>CHECK YOUR CAR <FaArrowRight className='ms-3' /></Button>{' '}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-about-pic1-500x438.webp" width="100%" alt="" />
          </div>
          <div className="col-lg-4  col-12 text-center">
            <ul className=' p-0'>
              <p className='fw-bold fs-5'><FaArrowCircleRight className='me-3' /> Service and full care included</p>
              <p className='fw-bold fs-5'><FaArrowCircleRight className='me-3' /> Possibility of changing the car to a <br className='d-md-none d-block' /> <span className='ms-lg-5 ms-md-1 '>newer one on a regular basis</span></p>
              <p className='fw-bold fs-5'><FaArrowCircleRight className='me-3' /> Predictable costs of operating the car</p>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Contact;