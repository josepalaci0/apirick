import React from 'react'



const Cards = ({ results }) => {
  let display;
  //console.log(results)
  if (results) {
    display = results.map((X) => {
      let { id, name, image, location, status } = X;
      return (

        <div key={id} className="col-3 md- position-relative card-body">

          <div className="borde">
            <img src={image} alt="" className="img-fluid" />
            <div className="content">
              <div className="fs-4 fw-bold mb-1">{name}</div>
              
                <div className="fs-6">Last location</div>
                <div className="fs-5 mb-5">{location.name}</div>
                {(() => {
                if (status === "dead") {
                  return (
                    <div className="position-absolute bg-danger status">{status}</div>
                  )
                }
                else if (status === "Alive") {
                  return (
                    <div className="position-absolute bg-success status">{status}</div>
                  )
                }
                else {
                  return (
                    <div className="position-absolute bg-secondary status">{status}</div>
                  )
                }

              })()}
              </div>
            </div>

             
            </div>
          
      
      );
    });
  } else {
    display = "No Characters Found:/";
  }

  return <> {display}</>

};

export default Cards;
