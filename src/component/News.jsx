import React, { Component } from "react";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }
  async getAPIData() {
    this.setState({page :1})
    if (this.props.search==='') 
    var rawdata = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page}&sortBy=publishedAt&apiKey=a9b1847a06314478bb0d1f1991675787`
    );
    else
    var rawdata = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page}&sortBy=publishedAt&apiKey=a9b1847a06314478bb0d1f1991675787`
    );

    var result = await rawdata.json();
    this.setState({
      articles: result.articles,
      totalResults: result.totalResults,
    });
  }
  componentDidMount() {
    this.getAPIData();
  }

  componentDidUpdate(old) {
    if (
      this.props.q !== old.q ||
      this.props.language !== old.language ||
      this.props.pageSize !== old.pageSize ||
      this.props.search   !== old.search
    ) {
      this.getAPIData();
    }
  }
  fetchMoreData = async() =>{
    this.setState({page :this.state.page+1})
    var rawdata = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page}&sortBy=publishedAt&apiKey=a9b1847a06314478bb0d1f1991675787`
      );
  
      var result = await rawdata.json();
      this.setState({articles:this.state.articles.concat(result.articles)})
    
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          {this.props.search?
          <h5 className="section text-center text-light p-2 mt-1">
           News Related to {this.props.search}
          </h5>:<h5 className="section text-center text-light p-2 mt-1">
            {this.props.q} News Section
          </h5>
          
          
        }
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length<this.state.totalResults}
           
          
            loader={
                            <div className='container-fluid w-100 mt-5' style={{height:"100px"}}>
                                <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            </div>
                }
                   >
            <div className="row">
              {this.state.articles.map((item, index) => {
                return (
                  <NewsItems
                    key={index}
                    title={item.title}
                    source={item.source.name}
                    description={item.description}
                    url={item.url}
                    pic={item.urlToImage}
                    date={item.publishedAt}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
