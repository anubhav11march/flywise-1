import React from 'react'
import Classes from '../../styles/loader.module.css'

function Loader() {
  return (
    <>
    {/* <div className='d-flex align-items-center justify-content-center'>
        <div className="spinner-grow spinner-grow-sm text-primary mx-2 spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-primary mx-2 spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-primary mx-2 spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      <div className="col-3 mt-4">
        <div className={Classes.snippet} >
          <div className={Classes.stage}>
            <div className={Classes.dotFlashing}></div>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default Loader