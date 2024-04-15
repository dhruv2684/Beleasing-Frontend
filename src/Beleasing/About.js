import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//icon
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div>
      {/* main img */}
      <Container fluid className=' bele-img-1'>
        <Row className=' m-0'>
          <div className="col-6 pd">
            <h2 className=" text-white fs-1 mb-5 bg-color word p-4 ms-3">WE HAVE BEEN LEASING <br></br> CARS FOR OVER 15 YEARS.</h2>
          </div>
        </Row>
        <Row className='pb-5 m-0 '>
          <div className="col-4 p-0 d-md-block d-none">
            <h6 className="pt-4 mb-4 border-top text-white">1. CHOOSE FROM 1,200 NEW CARS</h6>
          </div>
          <div className="col-4 p-0 d-md-block d-none">
            <h6 className="pt-4 mb-4 border-top text-white">2. CHOOSE EQUIPMENT</h6>
          </div>
          <div className="col-4 p-0 d-md-block d-none">
            <h6 className="pt-4 mb-4 border-top text-white">3. CONTACT US</h6>
          </div>
        </Row>
      </Container>

      {/* QUAM IN AUGUE MONTES */}
      <Container fluid className='mt-md-5 mt-3 mb-md-5 mb-3 pt-md-5 pt-4 pb-md-5 pb-3'>
        <Row className='align-items-center p-lg-0 p-4'>
          <div className="col-md-4 col-12">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-about-pic1.webp" width="100%" alt="" />
          </div>
          <div className="col-md-8 col-12 pt-2">
            <h3 className="color fs-lg-1 fs-4 p-lg-0 p-3">QUAM IN AUGUE MONTES, VARIUS DUI EU. MAECENAS NIBH MORBI AMET ALIQUAM ERAT NULLAM.</h3>
            <div className="d-lg-flex pt-lg-4 pt-2">
              <div className="col-lg-6 bg-light-pink" >
                <h4 className="p-5 mb-0 ">Quam in augue montes, varius dui eu. Maecenas nibh morbi amet.</h4>
              </div>
              <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-3">
                <p>Quam in augue montes, varius dui eu. <br className='d-lg-block d-none'></br> Maecenas nibh morbi amet aliquam erat <br></br> nullam.</p>
                <p>Turpis morbi sit nibh neque sagittis laoreet dignissim <br className='d-lg-block d-none'  ></br> cum. Phasellus rutrum tortor quam posuere diam in <br></br> sagittis. Donec fermentum cursus.</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>

      {/*  */}
      <Container fluid className='bg-light pt-5 pb-5'>
        <Row className='align-items-center'>
          <div className="col-lg-4 col-md-6 col-12 p-md-5  p-4 p-0 ">
            <h4 className="mb-lg-4 mb-0  fs-lg-2 fs-3">Lectus proin turpis lacinia volutpat. Lorem egestas diam vitae dui.</h4>
            <p>Erat nullam odio ut platea sapien quisque class dui pellentesque volutpat cubilia eleifend phasellus auctor neque diam donec tincidunt non.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-0">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-about-pic4.webp" width="100%" alt="" />
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-md-5  p-4 p-0 ">
            <h4 className="mb-lg-4 mb-0  fs-lg-2 fs-3">Amet nibh nisl consequat ullamcorper ac elementum.</h4>
            <p>Sagittis faucibus enim non tellus amet varius amet velit. Porttitor luctus mi eget erat penatibus amet donec.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-0">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-about-pic3.webp" width="100%" alt="" />
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-md-5  p-4 p-0 ">
            <h4 className="mb-lg-4 mb-0  fs-lg-2 fs-3">Adipiscing ullamcorper vitae a curabitur bibendum aliquam fermentum.</h4>
            <p>Et placerat arcu turpis nulla habitasse maecenas viverra vel vulputate. In eget egestas integer cras laoreet id sed morbi.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 p-0 ">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-about-pic2.webp" width="100%" alt="" />
          </div>
        </Row>
      </Container>

      {/* WHY BELEASING? */}
      <Container fluid className='mt-md-5 mt-3 pt-md-5 pt-3 pb-md-5'>
        <Row>
          <div className="col-lg-7 col-12 pt-md-5 pt-4 order-2">
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
          <div className="col-lg-5 col-12 order-1 p-0">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-home-pic4-500x435.webp" width="100%" alt="" />
          </div>
        </Row>
      </Container>

      {/*  */}
      <Container fluid className='mt-md-5 mt-4 mb-md-5 mb-3'>
        <Row>
          <h3 className='text-center fs-md-2 fs-4'>FERMENTUM PORTTITOR NUNC MOLESTIE INTEGER <br></br> LACINIA. EST RISUS MAURIS ADIPISCING LACUS <br></br> CONSECTETUR IPSUM. QUIS LECTUS LACUS VESTIBULUM <br></br> IN.</h3>
          <div className="d-md-flex mt-md-5 mt-3 pt-md-5 pt-3">
            <div className="col-md-6 col-12">
              <ul className='p-0'>
                <li className='pb-md-5 pb-3'> <FaCheckCircle className='fs-4 me-2' /> Viverra in pellentesque massa justo commodo.</li>
                <li className='pb-md-5 pb-3'> <FaCheckCircle className='fs-4 me-2' /> Imperdiet interdum morbi urna nibh interdum. Nunc leo congue.</li>
                <li className='pb-md-5 '> <FaCheckCircle className='fs-4 me-2' /> Feugiat faucibus nec malesuada a. In nec a neque lorem potenti.</li>
              </ul>
            </div>
            <div className="col-md-6 col-12">
              <ul className='p-0'>
                <li className='pb-md-5 pb-3'> <FaCheckCircle className='fs-4 me-2' /> Viverra in pellentesque massa justo commodo.</li>
                <li className='pb-md-5 pb-3'> <FaCheckCircle className='fs-4 me-2' /> Imperdiet interdum morbi urna nibh interdum. Nunc leo congue.</li>
                <li className='pb-md-5 pb-3'> <FaCheckCircle className='fs-4 me-2' /> Feugiat faucibus nec malesuada a. In nec a neque lorem potenti.</li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default About;