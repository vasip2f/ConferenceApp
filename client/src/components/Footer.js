import React from 'react'

function Footer() {
  return (

    <>
    <footer className='py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-5'>
                    <div className='footer-top-data d-flex  align-items-center gap-30'>
                      <img src='images/newsletter.png 'alt ='news'/>
                      <h2></h2>
                    </div>
                </div>

            </div>

        </div>
    </footer>
    <footer className='py-3'></footer>
    <footer className='py-3'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-center mb-0 text-white'> &copy; {new Date().getFullYear()} Powered by DevTeam</p>

                </div>

            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer