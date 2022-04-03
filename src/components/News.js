import React, { Component } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.data,
            loading: false,
            offset: 9,
            total: 0
        }
    }
    async componentDidMount() {
        this.setState({ loading: true })
        let url = await fetch(`http://api.mediastack.com/v1/news?access_key=bcb497264acce94cd9659872b0b8a11c&offset=9&offset=${this.state.offset}&categories=${this.props.categories}`)
        let jsonData = await url.json()
        this.setState({
            data: jsonData.data,
            loading: false,
            offset: 9,
            total: jsonData.total
        })
        console.log(this.state.data.length)
    }

    fetchMoreData = async () => {
        this.setState({ offset: this.offset + 9 })
        let url = await fetch(`http://api.mediastack.com/v1/news?access_key=bcb497264acce94cd9659872b0b8a11c&offset=9&offset=${this.state.offset}&categories=${this.props.categories}`)
        let jsonData = await url.json()
        this.setState({
            data: this.state.data.concat(jsonData.data),
            loading: false,
            offset: 9,
            total: jsonData.total
        })


    };

    render() {
        return (

            <>
                {
                    this.state.loading && <div className="container text-center">
                        <Loader />
                    </div>
                }
                {
                    this.state.data && <InfiniteScroll
                        dataLength={this.state.data.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.data.length !== this.state.total}
                        loader={<Loader />}
                    >
                        <div className="container">
                            <div className="row">
                                {this.state.data && this.state.data.map((element) => {
                                    return <div className="col-4 my-3" key={element.title}>
                                        <NewsItem title={element.title ? element.title.slice(0, 60) : 'Unknown title'} description={element.description ? element.description.slice(0, 160) : 'No description'} imageUrl={element.image ? element.image : 'https://static.yabiladi.com/files/articles/3b33e3b1bf50cc6596ff6173b264b9a420210801153520150.jpg'} sourceUrl={element.url ? element.url : '/'} pubDate={
                                            element.published_at.slice(0, 9)
                                        } pubTime={element.published_at.slice(11, 16)} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>

                }
            </>
        )
    }
}
export default News
