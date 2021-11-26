const HomeGallery = () => {
  return ( 
    <section className="gallery" id="gallery">
      <div className="container-fluid">
        <div className="section-title">
          <h2>Some photos from the <span>Gallery</span></h2>
          <p>
            <a href="/gallery">View more</a>
          </p>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-4 shadow p-3 mb-5">
            <div className="gallery-item">
              <a href="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" class="gallery-lightbox">
                <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 shadow p-3 mb-5">
            <div className="gallery-item">
              <a href="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" class="gallery-lightbox">
                <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 shadow p-3 mb-5">
            <div className="gallery-item">
              <a href="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" class="gallery-lightbox">
                <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 shadow p-3 mb-5">
            <div className="gallery-item">
              <a href="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" class="gallery-lightbox">
                <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default HomeGallery;