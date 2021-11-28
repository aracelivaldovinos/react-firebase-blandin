import { Row, Col } from 'react-bootstrap';

const Icons = () => {
  return ( 
    <section className="pastry-types" id="pastry-types">
      <div className="section-title">
        <h2>Choose from the following <span>selections!</span></h2>
        <p>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. 
        </p>
      </div>
      <Row>
        <Col className="col-lg-4 mt-4 mt-lg-0">
          <div className="box">
            <span>Cakes</span>
            <p className="font-icons">
              <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-cake-carnival-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="cake-icon"/>
            </p>
          </div>
        </Col>
        <Col className="col-lg-4 mt-4 mt-lg-0">
          <div className="box">
            <span>Cupcakes</span>
            <p className="font-icons">
              <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-cupcake-mother-day-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="cupcake-icon"/>
            </p>
          </div>
        </Col>
        <Col className="col-lg-4 mt-4 mt-lg-0">
          <div class="box">
            <span>Number & Letter Cakes</span>
            <p class="font-icons">Number & Letter cakes icon</p>
          </div>
        </Col>
        <Col className="col-lg-4 mt-4 mt-lg-0">
          <div class="box">
            <span>Cakepops</span>
            <p class="font-icons">
              <img src="https://img.icons8.com/external-prettycons-flat-prettycons/47/000000/external-lollipop-holidays-prettycons-flat-prettycons.png" alt="cakepops-icon"/>
            </p>
        </div>
        </Col>
        <Col className="col-lg-4 mt-4 mt-lg-0">
          <div class="box">
            <span>Cupcake Cakes</span>
            <p class="font-icons">Cupcake cakes icon</p>
        </div>
        </Col>
        <Col className="col-lg-4 mt-4 mt-lg-0">
          <div class="box">
            <span>Cookie Cakes</span>
            <p class="font-icons">
              <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-cookies-sweet-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png" alt="cookie-cakes"/>
            </p>
        </div>
        </Col>
      </Row>

    </section>
   );
}
 
export default Icons;