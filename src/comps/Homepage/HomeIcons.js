import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeIcons = ({handleIcons}) => {
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
          <Link to='/gallery/cake' onClick={()=>handleIcons("Cake")}>
            <div className="box">
              <span>Cakes</span>
              <p className="font-icons">
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-cake-carnival-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="cake-icon"/>
              </p>
            </div>
          </Link>
        </Col>
        <Col className="col-lg-4 mt-4 mt-lg-0">
          <Link to='/gallery/cupcakes' onClick={()=>handleIcons("Cupcakes")}>
            <div className="box">
              <span>Cupcakes</span>
              <p className="font-icons">
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-cupcake-mother-day-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="cupcake-icon"/>
              </p>
            </div>
          </Link>
        </Col>
        <Col className="col-lg-4 mt-4 mt-lg-0">
          <Link to='/gallery/number & letter cakes' onClick={()=>handleIcons("Number & Letter cakes")}>
            <div class="box">
              <span>Number & Letter Cakes</span>
              <p class="font-icons">
                <img src="https://img.icons8.com/ios/48/000000/sentence-case.png" alt="Number & Letter cakes"/>
              </p>
            </div>
          </Link>
        </Col>
        <Col className="col-lg-4 mt-4 mt-lg-0">
          <Link to='/gallery/cakepops' onClick={()=>handleIcons("Cakepops")}>
            <div class="box">
              <span>Cakepops</span>
              <p class="font-icons">
                <img src="https://img.icons8.com/external-prettycons-flat-prettycons/47/000000/external-lollipop-holidays-prettycons-flat-prettycons.png" alt="cakepops-icon"/>
              </p>
            </div>
          </Link>
        </Col>
        <Col className="col-lg-4 mt-4 mt-lg-0">
          <Link to='/gallery/cupcake cakes' onClick={()=>handleIcons("Cupcake Cakes")}>
            <div class="box">
              <span>Cupcake Cakes</span>
              <p class="font-icons">
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/50/000000/external-cake-sweet-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="cakecupcakes-icon"/>              </p>
            </div>
          </Link>
        </Col>
        <Col className="col-lg-4 mt-4 mt-lg-0">
          <Link to='/gallery/cookie cakes'  onClick={()=>handleIcons("Cookie Cakes")}>
            <div class="box">
              <span>Cookie Cakes</span>
              <p class="font-icons">
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-cookies-sweet-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png" alt="cookie-cakes"/>
              </p>
            </div>
          </Link>
        </Col>
      </Row>
    </section>
   );
}
 
export default HomeIcons;