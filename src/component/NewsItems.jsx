import React, { Component } from 'react'


export default class NewsItems extends Component {
  render() {
    return (
      <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
       <div className="card" >
  <img src={this.props.pic} className="card-img-top" height="200px" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{height:'110px'}}>{this.props.title.slice(0,60)+"..."}</h5>
    <hr/>
    <h6 style={{fontSize:"13px"}}>Source :{this.props.source}</h6> 
     <h6 style={{fontSize:"13px"}}>Date :{`${new Date(this.props.date).getDate()}/${new Date(this.props.date).getMonth()+1}/${new Date(this.props.date).getFullYear()}`}</h6>
     <hr/>
    <p className="card-text" style={{height:'100px'}}>{this.props.description.slice(0,80)+"..."}</p>
    <a href={this.props.url} className="btn section btn-sm">Full Article</a>
  </div>
</div>
      </div>
    )
  }
}
