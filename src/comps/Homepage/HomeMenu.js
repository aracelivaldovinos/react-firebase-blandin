import { Container, Row } from "react-bootstrap";

const HomeMenu = () => {
  return ( 
    <section className="menu" id="menu">
      <Container>
        <div class="section-title">
          <h2>
            Check out the <span>Menu</span>
          </h2>
          <p>
            <a href="/menu">View more</a>
          </p>
        </div>
        <Row>
          <h2>
            <span>Cakes</span>
          </h2>
          <div className="row menu-container">
            <Row>
              <div className="col-lg-6 menu-item">
                <div class="menu-content">
                  <p>
                    6" Round/Square (12 servings)
                  </p>
                  <span>$40+</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item">
                <div class="menu-content">
                  <p>
                    10" Round/Square (28 servings)
                  </p>
                  <span>$60+</span>
                </div>
              </div>
            </Row>
          </div>
          <div class="cake-info">
            •••PLEASE INQUIRE FOR ADDITIONAL SIZES•••
            FOR TIERED, SCULPED, AND GRAVITY DEFYING CAKES PLEASE INQUIRE FOR A QUOTE ON THE PARTICULAR DESIGN YOU ARE INTERESTED IN
          </div>
        </Row>
        <h2>
          <span>Cupcakes</span>
        </h2>
        <div className="row menu-container">
          <Row>
            <div class="col-lg-6 menu-item">
              <div class="menu-content">
                <p>Texas Size Cupcakes (2.5 std cupcakes in 1)</p><span>$25+/dozen</span>
              </div>
            </div>
            <div class="col-lg-6 menu-item">
              <div class="menu-content">
                <p>Tipsy Cupcakes (infused with your favorite alcohol)</p><span>$35+/dozen</span>
              </div>
            </div>
          </Row>
        </div>
        <h2>
          <span>Number & Cake Letters</span>
        </h2>
        <div className="row menu-container">
          <Row>
            <div class="menu-item">
              <div class="menu-content">
                <p>Approx. 15" x 12" Double layered with filling (15-20 servings)</p><span>$25+/dozen</span>
              </div>
            </div>
          </Row>
        </div>
        <h2>
          <span>Cakepops</span>
        </h2>
        <div className="row menu-container">
          <Row>
            <div class="col-lg-6 menu-item">
              <div class="menu-content">
              <p>Classic Pops</p><span>$28+/dozen</span>              </div>
            </div>
            <div class="col-lg-6 menu-item">
              <div class="menu-content">
                <p>Fancy Pops (infused with your favorite alcohol)</p><span>$40+/dozen</span>
              </div>
            </div>
          </Row>
        </div>
        <h2>
          <span>Cupcakes Cakes</span>
        </h2>
        <div className="row menu-container">
          <Row>
            <div class="col-lg-6 menu-item">
              <div class="menu-content">
                <p>24 Count</p><span>$38+</span>
              </div>
            </div>
            <div class="col-lg-6 menu-item">
              <div class="menu-content">
                <p>36 Count</p><span>$50+/dozen</span>
              </div>
            </div>
          </Row>
        </div>
        <h2>
          <span>Cookie Cakes</span>
        </h2>
        <div className="row menu-container">
          <Row>
            <div class="col-lg-6 menu-item">
              <div class="menu-content">
                <p>12" Chocolate Chip</p><span>$20+</span>
              </div>
            </div>
            <div class="col-lg-6 menu-item">
              <div class="menu-content">
                <p>12" Sugar Cookie</p><span>$20+/dozen</span>
              </div>
            </div>
          </Row>
        </div>
      </Container>

    </section>
   );
}
 
export default HomeMenu;