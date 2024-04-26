import React from 'react'

function Testomonialcard({ image, author, title, description }) {
    return (
        <div className="course-card border rounded-lg">
            <figure className="card-banner " style={{ width: 350, height: 300 }}>
                <img src={image} width={350} height={300} loading="lazy" alt="Children Nutrition and Cooking" className="img-cover" />
            </figure>
            <div className="card-content">
                <p className="card-author">
                    <a href="#" className="card-link">
                        By: <span className="span">{author}</span>
                    </a>
                </p>
                <h3 className="h3">
                    <a href="#" className="card-title">{title}</a>
                </h3>
                <p className='section-text'>{description}</p>
            </div>
        </div>
    )
}

export default Testomonialcard