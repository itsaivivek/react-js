import React from 'react'
import Card from './Card'

const CardContainer = (props) => {
    return (
        <div>
            <h4 className='text-2xl font-medium'>Last minute offers</h4>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 py-4 max-[530px]:flex max-[530px]:flex-wrap max-[530px]:justify-center'>
                {props.destination.map((elem, idx) => {
                    return <div key={idx}>
                        <Card img={elem.img} destinationHotel={elem.destinationHotel} rating={elem.rating} location={elem.location} price={elem.price} />
                    </div>

                }
                )}


            </div>
        </div>
    )
}

export default CardContainer
