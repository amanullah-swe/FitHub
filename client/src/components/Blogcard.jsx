import React from 'react'
import { Link } from 'react-router-dom'

function Blogcard({ author, date, likes, shares, title, content }) {
    return (
        <Link to={'/blog'}>
            <div className="blog-card">
                <div className="wrapper">
                    <time className="publish-date" dateTime="2022-02-24">
                        <span className="span">{date}</span>
                    </time>
                    <div>
                        <div className="card-author">
                            <a href="#" className="card-link">
                                By: <span className="span">{author}</span>
                            </a>
                        </div>
                        <ul className="card-meta-list">
                            <li className="card-meta-item">
                                <p className="item-text">{likes} Likes</p>
                            </li>
                            <li className="card-meta-item">
                                <p className="item-text">{shares} Share</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <h3 className="h3">
                    <a href="#" className="card-title">{title}</a>
                </h3>
                <p className="card-text">
                    {content}
                </p>
            </div>
        </Link>
    )
}

export default Blogcard