// import ExportedImage from 'next/image';
import ExportedImage from 'next-image-export-optimizer';
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
            <ExportedImage unoptimized={true} src="/images/404.png" alt="ExportedImage" width={571} height={181}/>
          </div>
        </div>
      </div>
    </section>
    {/* End 404 Error Page */}
  </>
  
  )
}

export default Error;
