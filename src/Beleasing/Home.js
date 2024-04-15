import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Button from 'react-bootstrap/Button';

// img
import sedan from '../Beleasing Img/sedan car.webp'
import hatchback from '../Beleasing Img/hatchback car.webp'
import combi from '../Beleasing Img/combi car.webp'
import suv from '../Beleasing Img/suv car.webp'
import bmwcommodoipsum from '../Beleasing Img/bmw commodo ipsum.webp'
import fordenimnibhlitora from '../Beleasing Img/ford enim nibh litora.webp'
import lamborghinirutrumlibero from '../Beleasing Img/lamborghini rutrum libero.webp'
import audimiddel from '../Beleasing Img/middel audi car.webp'
import audi from '../Beleasing Img/main car.webp'
import incar from '../Beleasing Img/car in.webp'
import phonecar from '../Beleasing Img/phone with car.webp'
import img1 from '../Beleasing Img/img1.webp'



//icon
import { FaArrowRight } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

// import { AiOutlineSafetyCertificate } from "react-icons/ai";
// import { GrRefresh } from "react-icons/gr";


const Home = () => {

  return (
    <div>
      {/* main img */}
      <Container fluid className=' bele-img mt-1'>
        <Row className=' m-0'>
          <div className="col-8 pd">
            <h2 className=" text-white fs-md-1 fs-6 mb-md-5 mb-2">WE'LL FIND FOR YOU THE <br></br> BEST CAR FOR LEASING</h2>
            <Button href='/all-cars' variant="" className='b-color text-white rounded-0 border-0 ps-md-5 ps-3 pe-md-5 pe-3 pt-md-3 pt-2 pb-md-3 pb-2'>CHECK YOUR CAR <FaArrowRight className='ms-3' /></Button>{' '}
          </div>
          <div className="col-md-4 pd justify-content-end d-flex d-md-block d-none">
            <div className=' border ps-5 pe-5 pt-4 '>
              <div className="d-flex pt-4 pb-4 border-bottom ">
                <FaStar className='text-white' />
                <FaStar className='text-white ms-2' />
                <FaStar className='text-white ms-2' />
                <FaStar className='text-white ms-2' />
                <FaStar className='text-white ms-2' />
              </div>
              <p className='mt-4 mb-0 text-white'>SALES QUALITY</p>
            </div>
          </div>
        </Row>
        <Row className='pb-5 '>
          <div className="col-4 d-md-block d-none">
            <h6 className="pt-4 mb-4 border-top text-white">1. CHOOSE FROM 1,200 NEW CARS</h6>
          </div>
          <div className="col-4 d-md-block d-none">
            <h6 className="pt-4 mb-4 border-top text-white">2. CHOOSE EQUIPMENT</h6>
          </div>
          <div className="col-4 d-md-block d-none">
            <h6 className="pt-4 mb-4 border-top text-white">3. CONTACT US</h6>
          </div>
        </Row>
      </Container>

      {/* 4 car with hover  */}
      <Container fluid className='pt-5'>
        <Row className='align-items-center'>
          <div className='col-lg-6 col-12 hov-up'>
            <div className="hov-up">
              <div className='d-md-flex'>
                <div className='me-3'>
                  <img src={sedan} width="260px" height="145px" alt="" />
                </div>
                <div className='pt-2'>
                  <h3 className='fs-2 color'>SEDAN</h3>
                  <p className=''>Ipsum lacus quis risus nisl enim. Dignissim non gravida vitae maecenas auctor mus volutpat vitae.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-12'>
            <div className="hov-up">
              <div className='d-md-flex'>
                <div className='me-3'>
                  <img src={hatchback} width="260px" height="145px" alt="" />
                </div>
                <div className='pt-2'>
                  <h3 className='fs-2 color'>HATCHBACK</h3>
                  <p className=''>Amet nibh sagittis massa eget vehicula sed dui. Vitae neque luctus sit porta eros platea ultrices. Et magna..</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-12 pt-4'>
            <div className="hov-up">
              <div className='d-md-flex'>
                <div className='me-3'>
                  <img src={combi} width="260px" height="145px" alt="" />
                </div>
                <div className='pt-2'>
                  <h3 className='fs-2 color'>COMBI</h3>
                  <p className=''>In tellus interdum mollis enim aenean lectus pellentesque leo. Elit enim pellentesque</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-12 pt-4'>
            <div className="hov-up">
              <div className='d-md-flex'>
                <div className='me-3'>
                  <img src={suv} width="260px" height="145px" alt="" />
                </div>
                <div className='pt-2'>
                  <h3 className='fs-2 color'>SUV</h3>
                  <p className=''>Magna tortor dui integer volutpat sed eu vel. A neque mauris cursus a fusce aliquam sagittis. Pulvinar eros.</p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>

      {/* CHOOSE FROM 1,200 NEW CARS */}
      <Container fluid className='pt-5 mt-5 bg-light pb-5'>
        <Row className='align-items-center'>
          <div className='col-8'>
            <h1 className='fs-md-1 fs-6'>CHOOSE FROM 1,200 NEW CARS</h1>
          </div>
          <div className='col-4 d-flex justify-content-end'>
            <Button href='/all-cars' variant="light rounded-0 border-0 ps-md-4 ps-2 pe-md-4 pe-2 pt-ms-2 pt-1 pb-md-2 pb-1">SEE ALL<FaArrowRight className='ms-3' /></Button>{' '}
          </div>
        </Row>
        <Row className='mt-5'>
          <div className="col-md-4 col-12 ">
            <div className='bg-white pb-4'>
              <img src={bmwcommodoipsum} width="100%" alt="" />
              <div className='pt-4 ms-4 me-4'>
                <h5 className=''>BMW COMMODO IPSUM</h5>
                <div className='d-flex mt-4 align-items-center justify-content-between'>
                  <p className='mb-0'>Check details</p>
                  <a href="/bmw-commodo-ipsum"> <FaArrowRight className='text-dark' /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 ">
            <div className='bg-white pb-4'>
              <img src={fordenimnibhlitora} width="100%" alt="" />
              <div className='pt-4 ms-4 me-4'>
                <h5 className=''>FORD ENIM NIBH LITORA</h5>
                <div className='d-flex mt-4 align-items-center justify-content-between'>
                  <p className='mb-0'>Check details</p>
                  <a href="/ford-enim-nibh-litora"> <FaArrowRight className='text-dark' /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className='bg-white pb-4'>
              <img src={lamborghinirutrumlibero} width="100%" alt="" />
              <div className='pt-4 ms-4 me-4'>
                <h5 className=''>LAMBORGHINI RUTRUM LIBERO</h5>
                <div className='d-flex mt-4 align-items-center justify-content-between'>
                  <p className='mb-0'>Check details</p>
                  <a href="/lamborghini-rutrum-libero"> <FaArrowRight className='text-dark' /></a>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>

      {/* RENTING IS PURE CONVENIENCE */}
      <Container fluid className='pb-5  bg-light'>
        <Row className='align-items-center'>
          <div className="col-lg-4 col-md-6 col-12 text-center ">
            <h2 className=' fs-1'>RENTING IS <br className='d-md-block d-none' />PURE<br /> CONVENIENCE</h2>
            <p className='mt-4 c-g'>Maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas.</p>
            <Button href='/all-cars' variant="" className='b-color text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3'>CHECK YOUR CAR <FaArrowRight className='ms-3' /></Button>{' '}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img src={audimiddel} width="100%" alt="" />
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

      {/* 2 img car */}
      <Container fluid className=' mb-md-5 mb-4 pb-md-5'>
        <Row className=''>
          <div className="col-lg-6 col-12 p-0 pe-lg-1 pe-0 position-relative">
            <img className='' src={audi} width="100%" alt="" />
            <div className='pos-t text-white ms-5'>
              <Link to="" className=""><h3 className=' text-white'>AUDI LITORA NEC AMET</h3></Link>
              <p>Neque vel nisl enim volutpat volutpat. Curabitur commodo sed justo lacus <br></br> auctor</p>
            </div>
          </div>

          <div className="col-lg-6 col-12 p-0 ps-lg-1 ps-0 position-relative ">
            <img src={incar} width="100%" alt="" />
            <div className='pos-t text-white ms-5'>
              <Link to="" className=""><h3 className=' text-white'>MERCEDES MATTIS ARCU MAXIMUST</h3></Link>
              <p>Neque vel nisl enim volutpat volutpat. Curabitur commodo sed justo lacus <br></br> auctor</p>
            </div>
          </div>
        </Row>
      </Container>

      {/* 6 car logo */}
      <Container fluid className='pb-md-5 pb-3 mb-md-5 mb-3'>
        <Container>
          <Row>
            <div className="col-md-2 col-6 mb-md-0 mb-4 ">
              <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-clients-pic6.svg" width="80%" alt="" />
            </div>
            <div className="col-md-2 col-6 mb-md-0 mb-4 ">
              <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-clients-pic2.svg" width="80%" alt="" />
            </div>
            <div className="col-md-2 col-6 mb-md-0 mb-4 ">
              <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-clients-pic3.svg" width="80%" alt="" />
            </div>
            <div className="col-md-2 col-6 mb-md-0 mb-4 ">
              <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-clients-pic4.svg" width="80%" alt="" />
            </div>
            <div className="col-md-2 col-6 mb-md-0 mb-4 ">
              <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-clients-pic5.svg" width="80%" alt="" />
            </div>
            <div className="col-md-2 col-6 mb-md-0 mb-4 ">
              <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-clients-pic1.svg" width="80%" alt="" />
            </div>
          </Row>
        </Container>
      </Container>

      {/*Video */}
      <Container fluid className='p-0 position-relative'>
        <Row className='m-0'>
          <div className=" p-0 ">
            <video className='p-0' autoPlay muted loop src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-home-pic1.mp4" width="100%"></video>
            <div className="pos-t ms-5 d-lg-block d-none">
              <h2 className=" text-white fs-1 mb-5">MEET THE NEW CROSSOVER.<br></br>FAST. CONVENIENT.<br></br> ECONOMICAL.</h2>
              <Button variant="" className='b-color text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3 '>LEARN MORE</Button>{' '}
            </div>
          </div>
        </Row>
        <Container fluid className='count mb-5'>
          <Row className=''>
            <div className='col-md-3 col-6 mb-md-0 mb-1 p-0'>
              <div className=' p-md-5 p-3 bg-white'>
                <h6 className="">ALL CARS AVAILABLE</h6>
                <span className="fs-1">1200</span>
              </div>
            </div>
            <div className='col-md-3 col-6 mb-md-0 mb-1 p-0 ps-1'>
              <div className=' p-md-5 p-3 bg-white'>
                <h6 className="">ALL CARS AVAILABLE</h6>
                <span className="fs-1">1200</span>
              </div>
            </div>
            <div className='col-md-3 col-6 mb-md-0 mb-1 p-0 ps-md-1 ps-0'>
              <div className=' p-md-5 p-3 bg-white'>
                <h6 className="">ALL CARS AVAILABLE</h6>
                <span className="fs-1">1200</span>
              </div>
            </div>
            <div className='col-md-3 col-6 mb-md-0 mb-1 p-0 ps-1'>
              <div className=' p-md-5 p-3 bg-white'>
                <h6 className="">ALL CARS AVAILABLE</h6>
                <span className="fs-1">1200</span>
              </div>
            </div>
          </Row>
        </Container>
      </Container>

      {/* HOW MUCH WILL YOU PAY? */}
      <Container fluid className='bg-light pt-5 pb-5 mt-5'>
        <Row>
          <div className="col-md-4 col-12">
            <img src={phonecar} width="100%" alt="" />
          </div>
          <div className="col-md-8 col-12">
            <h6 className="c-g">BELEASING</h6>
            <h2 className="color fs-1">HOW MUCH WILL YOU PAY?</h2>
            <div className='d-md-flex'>
              <div>
                <ul className='mt-4 ps-md-3 ps-0'>
                  <li className='mb-4'><FaPlus className='me-3' /> Integer a tellus aliquam penatibus vehicula.</li>
                  <li className='mb-4'><FaPlus className='me-3' /> Odio praesent egestas inceptos integer.</li>
                </ul>
              </div>
              <div className='ms-md-3 ms-0'>
                <ul className='mt-4 ps-md-3 ps-0'>
                  <li className='mb-4'><FaPlus className='me-3' />Tincidunt a semper fermentum praesent.</li>
                  <li className='mb-4'><FaPlus className='me-3' />Donec ullamcorper elit gravida class famestu.</li>
                </ul>
              </div>
            </div>
            <Button variant="" className='b-color mt-4 text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3'>CHECK YOUR CAR <FaArrowRight className='ms-3' /></Button>{' '}
          </div>
        </Row>
      </Container>

      {/* WHY BELEASING? */}
      <Container fluid className=' pt-md-5 pt-3 pb-md-5'>
        <Row>
          <div className="col-lg-7 col-12 pt-md-5 pt-4 order-lg-1 order-2">
            <h2 className="color fs-1 pb-2">WHY BELEASING?</h2>
            <p className='c-g'>Nullam suspendisse mauris blandit cum pharetra odio mauris lacus risus. Velit at nam venenatis nunc lorem aliquam.</p>
            <Row className='mt-mf-5 mt-0 pt-md-4 pt-0'>
              <div className="col-md-4 hov-up">
                <img className='d-md-block d-none' src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-home-icon1.svg" width="25%" alt="" />
                <h5 className="color mt-md-5 mt-2">Safety and security</h5>
                <p className='c-g'>Egestas faucibus dui sit sagittis mi. Leo tempusinit</p>
              </div>
              <div className="col-md-4 hov-up">
                <img className='d-md-block d-none' src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-home-icon2.svg" width="25%" alt="" />
                <h5 className="color mt-md-5 mt-2">Guarantee</h5>
                <p className='c-g'>Mi ultrices lobortis nullanidun tincidunt non ante in.</p>
              </div>
              <div className="col-md-4 hov-up">
                <img className='d-md-block d-none' src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-home-icon3.svg" width="25%" alt="" />
                <h5 className="color mt-md-5 mt-2">Possibility of return</h5>
                <p className='c-g'>Dignissim et cras consequat nascetur bulla tinci</p>
              </div>
            </Row>
          </div>
          <div className="col-lg-5 col-12 order-lg-2 order-1 p-0">
            <img src={img1} width="100%" alt="" />
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Home;