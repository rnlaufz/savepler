import React from 'react'

 const InfoCards = () =>  {
    //  @TO_DO: counting functionality
    return (
        <div className="info-cards pos-flex-split">
            <div className="info-card content-card-out pos-flex">
                <h4>Saved</h4>
                <div className="content-money-card pos-flex">
                <span>40 000 &#8381;</span>
                </div>
            </div>
            <div className="info-card content-card-out pos-flex">
                <h4>Left</h4>
                <div className="content-money-card pos-flex">
                <span>210 000 &#8381;</span>
                </div>
              
            </div>
            <div className="info-card content-card-out pos-flex">
                <h4>Debt</h4>
                <div className="content-money-card pos-flex">
                <span>5 000 &#8381;</span>
                </div>
                
            </div>
        </div>
    )
}

export default InfoCards;