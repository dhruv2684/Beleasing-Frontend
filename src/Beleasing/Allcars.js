import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//icon
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Allcars = () => {
  return (
    <div>
      {/*  */}
      <Container fluid>
        <Row className='align-items-center'>
          <div className="col-md-7 col-12">
            <h2 className="fs-1">ALL CARS</h2>
            <p className='c-g'>Sociosqu aliquam velit ullamcorper dui cras ex elementum consectetur fusce taciti eros</p>
          </div>
          <div className="col-md-5">
            <img className='mt-4' src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/03/beleasing2-category5.webp" width="100%" alt="" />
          </div>
        </Row>
      </Container>

      {/* CHOOSE FROM 1,200 NEW CARS */}
      <Container fluid className='pt-md-5 pt-3 mt-md-5 mt-3 bg-light pb-5'>
        <Row className='mt-5 g-lg-4 g-2'>
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className='bg-white pb-4 position-relative hov-link'>
              <Link to="/bmw-commodo-ipsum"><img className="" src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-product-pic1.webp" width="100%" alt="" /></Link>
              <Link to="/bmw-commodo-ipsum" className='link-pos bg-white p-2  rounded-circle'><FaLink className='text-dark' /></Link>
              <div className='pt-4 ms-4 me-4'>
                <h5 className=''>BMW COMMODO IPSUM</h5>
                <p className='c-g'><span className='c-g pb-2'>$</span>1,990.00</p>
                <div className='d-flex border-top pt-3 align-items-center justify-content-between'>
                  <p className='mb-0'>Check details</p>
                  <a href=""> <FaArrowRight className='text-dark' /></a>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-4 col-md-6 col-12 ">
            <div className='bg-white pb-4  position-relative hov-link'>
              <Link to="/ford-enim-nibh-litora"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-product-pic2.webp" width="100%" alt="" /></Link>
              <Link to="/ford-enim-nibh-litora" className='link-pos bg-white p-2  rounded-circle'><FaLink className='text-dark' /></Link>
              <div className='pt-4 ms-4 me-4'>
                <h5 className=''>FORD ENIM NIBH LITORA</h5>
                <p className='c-g'><span className='c-g pb-2'>$</span>3,500.00</p>
                <div className='d-flex border-top pt-3 align-items-center justify-content-between'>
                  <p className='mb-0'>Check details</p>
                  <a href=""> <FaArrowRight className='text-dark' /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 ">
            <div className='bg-white pb-4  position-relative hov-link'>
              <Link to="/lamborghini-rutrum-libero"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-product-pic3.webp" width="100%" alt="" /></Link>
              <Link to="/lamborghini-rutrum-libero" className='link-pos bg-white p-2  rounded-circle'><FaLink className='text-dark' /></Link>
              <div className='pt-4 ms-4 me-4'>
                <h5 className=''>LAMBORGHINI RUTRUM LIBERO</h5>
                <p className='c-g'><span className='c-g pb-2'>$</span>13,200.00</p>
                <div className='d-flex border-top pt-3 align-items-center justify-content-between'>
                  <p className='mb-0'>Check details</p>
                  <a href=""> <FaArrowRight className='text-dark' /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 ">
            <div className='bg-white pb-4  position-relative hov-link'>
              <Link to="/mercedes-conubia-blandit-sem-neque"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-product-pic4.webp" width="100%" alt="" /></Link>
              <Link to="/mercedes-conubia-blandit-sem-neque" className='link-pos bg-white p-2  rounded-circle'><FaLink className='text-dark' /></Link>
              <div className='pt-4 ms-4 me-4'>
                <h5 className=''>MERCEDES CONUBIA BLANDIT SEM NEQUE</h5>
                <p className='c-g'><span className='c-g pb-2'>$</span>15,000.00</p>
                <div className='d-flex border-top pt-3 align-items-center justify-content-between'>
                  <p className='mb-0'>Check details</p>
                  <a href=""> <FaArrowRight className='text-dark' /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 ">
            <div className='bg-white pb-4  position-relative hov-link'>
              <Link to="/bmw-proin-commodo-interdum"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-product-pic5.webp" width="100%" alt="" /></Link>
              <Link to="/bmw-proin-commodo-interdum" className='link-pos bg-white p-2  rounded-circle'><FaLink className='text-dark' /></Link>
              <div className='pt-4 ms-4 me-4'>
                <h5 className=''>BMW PROIN COMMODO INTERDUM</h5>
                <p className='c-g'><span className='c-g pb-2'>$</span>3,800.00</p>
                <div className='d-flex border-top pt-3 align-items-center justify-content-between'>
                  <p className='mb-0'>Check details</p>
                  <a href=""> <FaArrowRight className='text-dark' /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 ">
            <div className='bg-white pb-4 position-relative hov-link'>
              <Link to="/mercedes-mattis-arcu-maximus"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-product-pic6.webp" width="100%" alt="" /></Link>
              <Link to="/mercedes-mattis-arcu-maximus" className='link-pos bg-white p-2  rounded-circle'><FaLink className='text-dark' /></Link>
              <div className='pt-4 ms-4 me-4'>
                <h5 className=''>MERCEDES MATTIS ARCU MAXIMUS</h5>
                <p className='c-g'><span className='c-g pb-2'>$</span>3,800.00</p>
                <div className='d-flex border-top pt-3 align-items-center justify-content-between'>
                  <p className='mb-0'>Check details</p>
                  <a href=""> <FaArrowRight className='text-dark' /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 ">
            <div className='bg-white pb-4 position-relative hov-link'>
              <Link to="/audi-litora-nec-amet"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-product-pic7.webp" width="100%" alt="" /></Link>
              <Link to="/audi-litora-nec-amet" className='link-pos bg-white p-2  rounded-circle'><FaLink className='text-dark' /></Link>
              <div className='pt-4 ms-4 me-4'>
                <h5 className=''>AUDI LITORA NEC AMET</h5>
                <p className='c-g'><span className='c-g pb-2'>$</span>3,800.00</p>
                <div className='d-flex border-top pt-3 align-items-center justify-content-between'>
                  <p className='mb-0'>Check details</p>
                  <a href=""> <FaArrowRight className='text-dark' /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 ">
            <div className='bg-white pb-4 position-relative hov-link'>
              <Link to="/mercedes-etiam-quam"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-product-pic9.webp" width="100%" alt="" /></Link>
              <Link to="/mercedes-etiam-quam" className='link-pos bg-white p-2  rounded-circle'><FaLink className='text-dark' /></Link>
              <div className='pt-4 ms-4 me-4'>
                <h5 className=''>MERCEDES ETIAM QUAM</h5>
                <p className='c-g'><span className='c-g pb-2'>$</span>1,890.00</p>
                <div className='d-flex border-top pt-3 align-items-center justify-content-between'>
                  <p className='mb-0'>Check details</p>
                  <a href=""> <FaArrowRight className='text-dark' /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 ">
            <div className='bg-white pb-4 position-relative hov-link'>
              <Link to="/bmw-cubilia"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-product-pic8.webp" width="100%" alt="" /></Link>
              <Link to="/bmw-cubilia" className='link-pos bg-white p-2  rounded-circle'><FaLink className='text-dark' /></Link>
              <div className='pt-4 ms-4 me-4'>
                <h5 className=''>BMW cubilia class</h5>
                <p className='c-g'><span className='c-g pb-2'>$</span>2,115.00</p>
                <div className='d-flex border-top pt-3 align-items-center justify-content-between'>
                  <p className='mb-0'>Check details</p>
                  <a href=""> <FaArrowRight className='text-dark' /></a>
                </div>
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

export default Allcars;