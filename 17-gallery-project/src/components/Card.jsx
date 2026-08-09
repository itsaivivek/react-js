import React from 'react'

const Card = ({elem}) => {
    return (
        <div>
            <div className='w-60 h-45 overflow-hidden rounded-xl'>
                <a href={elem.url} target='_blank'>
                    <img className='h-full w-full object-cover' src={elem.download_url} alt=""/>
                </a>
            </div>
            <h2 className='dark:text-white text-xl font-bold'>{elem.author}</h2>
        </div>
    )
}

export default Card
