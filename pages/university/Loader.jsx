import React from 'react'

function Loader() {
  return (
    <>
    <div className='d-flex align-items-center justify-content-center'>
        <div className="spinner-grow spinner-grow-sm text-primary mx-2 spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-primary mx-2 spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm text-primary mx-2 spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
}

export default Loader