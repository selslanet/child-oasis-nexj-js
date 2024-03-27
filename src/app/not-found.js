import React from 'react'

function Error() {
  return (
    <>
    {/* 404 Error Page */}
    <section className="error-section">
      <div className="container">
        <div className="error-all-info">
          <div className="text">
            <h1>404</h1>
            <p>we are sorry for the inconvinience! please try again later...</p>
          </div>
          <div className="custom-button">
            <a href="/" className="custom-btn">
              back to home
            </a>
          </div>
          <div className="image">
            <img src="images/404.png" alt="Image" />
          </div>
        </div>
      </div>
    </section>
    {/* End 404 Error Page */}
  </>
  
  )
}

export default Error;
