import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, sourceUrl, pubDate, pubTime } = this.props
        return (
            <div className="container">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title"> <a href={sourceUrl} target="_blank" rel="noreferrer" className="text-decoration-none text-dark"> {title} </a></h5>
                        <p className="card-text">{description}</p>
                        <a href={sourceUrl} className="btn btn-dark" rel="noreferrer" target="_blank">Read more</a>
                        <p className="m-2"><strong>Date : </strong> {pubDate}  | <strong>Time : </strong> <span>{pubTime}</span></p>
                      
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
