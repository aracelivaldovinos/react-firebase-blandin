const Menu = () => {
  return ( 
    <div className="menu-div">
      <section className="menu" id="menu">
        <div className="container">
          <div className="section-title">
            <h2>
              Flavors
            </h2>
          </div>
          <div className="row flavor-container">
            <div className="flavor-content">
              <p>
                <span>
                  VANILLA • FRENCH VANILLA • AMARETTO • CHOCOLATE
                  • DARK CHOCOLATE • CINNAMON CHURRO • CONFETTI CAKE
                  • LEMON • STRAWBERRY • RED VELVET • PUMPKIN SPICE
                  • GERMAN CHOCOLATE • LEMON BLUEBERRY • TRES LECHES
                  • MARBLE • CARROT • BANANA • PINEAPPLE • COCONUT
                  • OREO♡ • CHOCOLATE CHIP♡ • BROWNIE♡
                </span>
              </p>
              <p className="extra-info">
                <span>♡vanilla or chocolate base</span>
              </p>
            </div>
          </div>
          <div className="section-title">
            <h2>
              Fillings
            </h2>
          </div>
          <div className="row flavor-container">
            <div className="flavor-content">
              <p>
                <span>
                  VANILLA PUDDING • CHOCOLATE PUDDING • ESPRESSO •
                  CHOCOLATE GANACHE • DULCE DE LECHE • CARAMEL • NUTELLA •
                  CHERRY • PEANUT BUTTER • ♡FRESH FRUIT • ♡PRESERVES: APPLE,
                  STRAWBERRY, BERRY, BLACKBERRY, RASPBERRY & PEACH
                </span>
              </p>
              <p className="extra-info">
                <span>
                ♡Extra
                ♡♡Extra
                </span>
              </p>
            </div>
          </div>
          <div className="section-title">
            <h2>
              Frontings
            </h2>
          </div>
          <div className="row flavor-container">
            <div className="flavor-content">
              <p>
                <span>
                  AMERICAN BUTTERCREAM • CHOCOLATE BUTTERCREAM • WHIPPED
                  ICING * CHOCOLATE WHIPPED ICING * CHOCOLATE GANACHE
                  ♡MOCHA• ♡CARAMEL • ♡SALTED CARAMEL • ♡NUTELLA • 
                  ♡STRAWBERRY • ♡HAZELNUT • ♡MINT • ♡PEANUT BUTTER
                </span>
              </p>
              <p className="extra-info">
                <span>
                  ♡Extra ♡Flavors with Buttercream or Whipped icing Base
                </span>
              </p>
            </div>
          </div>
          <div className="section-title">
            <h2>Pastries</h2>
          </div>
          <div className="row">
            <h2><span>Cakes</span></h2>
            <div className="row menu-container">
              <div className="row">
                <div className="col-lg-6 menu-item">
                  <div className="menu-content">
                    <p>6" Round/Square (12 servings)</p><span>$40+</span>
                  </div>
                </div>
                <div className="col-lg-6 menu-item">
                  <div className="menu-content">
                    <p>10" Round/Square (28 servings)</p><span>$60+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cake-info">
              <p>•••PLEASE INQUIRE FOR ADDITIONAL SIZES•••</p> 
              <p>FOR TIERED, SCULPED, AND GRAVITY DEFYING CAKES PLEASE INQUIRE FOR A QUOTE ON THE PARTICULAR DESIGN YOU ARE INTERESTED IN</p>
            </div>
          </div>
          <h2><span>Cupcakes</span></h2>
          <div className="row menu-container">
            <div className="row">
              <div className="col-lg-6 menu-item">
                <div className="menu-content">
                  <p>Texas Size Cupcakes (2.5 std cupcakes in 1)</p><span>$25+/dozen</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item">
                <div className="menu-content">
                  <p>Tipsy Cupcakes (infused with your favorite alcohol)</p><span>$35+/dozen</span>
                </div>
              </div>
            </div>
          </div>
          <h2><span>Number & Cake Letters</span></h2>
          <div className="row menu-container">
            <div className="row">
              <div className="menu-item">
                <div className="menu-content">
                  <p>Approx. 15" x 12" Double layered with filling (15-20 servings)</p><span>$25+/dozen</span>
                </div>
              </div>
            </div>
          </div>
          <h2><span>Cakepops</span></h2>
          <div className="row menu-container">
            <div className="row">
              <div className="col-lg-6 menu-item">
                <div className="menu-content">
                  <p>classNameic Pops</p><span>$28+/dozen</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item">
                <div className="menu-content">
                  <p>Fancy Pops (infused with your favorite alcohol)</p><span>$40+/dozen</span>
                </div>
              </div>
            </div>
          </div>
          <h2><span>Cupcakes Cakes</span></h2>
          <div className="row menu-container">
            <div className="row">
              <div className="col-lg-6 menu-item">
                <div className="menu-content">
                  <p>24 Count</p><span>$38+</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item">
                <div className="menu-content">
                  <p>36 Count</p><span>$50+/dozen</span>
                </div>
              </div>
            </div>
          </div>
          <h2><span>Cookie Cakes</span></h2>
          <div className="row menu-container">
            <div className="row">
              <div className="col-lg-6 menu-item">
                <div className="menu-content">
                  <p>12" Chocolate Chip</p><span>$20+</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item">
                <div className="menu-content">
                  <p>12" Sugar Cookie</p><span>$20+/dozen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default Menu;