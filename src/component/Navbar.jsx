import React, { Component } from "react";
import "../assests/css/Style.css";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      s : " "
      
    }
  }
  getData(e){
    this.setState({s: e.target.value})
    console.log('getdata:',e)
  }
  postData(e){
    e.preventDefault()
    document.getElementById('search').value=''
 this.props.changeSearch(this.state.s)
 this.setState({s: ""})
 console.log('postdata:',e)
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg background">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="#">
              DailyNews
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item text-light">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/"
                    onClick={()=>this.props.changeSearch('')}
                  >
                    All
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/politics" onClick={()=>this.props.changeSearch('')}>
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/science" onClick={()=>this.props.changeSearch('')}>
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/covid" onClick={()=>this.props.changeSearch('')}>
                    Covid
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Others
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="/technology" onClick={()=>this.props.changeSearch('')}>
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/entertainment" onClick={()=>this.props.changeSearch('')}>
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/education" onClick={()=>this.props.changeSearch('')}>
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/sports" onClick={()=>this.props.changeSearch('')}>
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/cricket" onClick={()=>this.props.changeSearch('')}>
                        Cricket
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/crime" onClick={()=>this.props.changeSearch('')}>
                        Crime
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/business" onClick={()=>this.props.changeSearch('')}>
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/jokes" onClick={()=>this.props.changeSearch('')}>
                        Jokes
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item " onClick={()=>this.props.changeLanguage('hi')} >
                        Hindi
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item " onClick={()=>this.props.changeLanguage('en')}>
                        English
                      </button>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Article Size
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item " onClick={()=>this.props.changeSize(8)}>
                        8
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item " onClick={()=>this.props.changeSize(12)}>
                        12
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item " onClick={()=>this.props.changeSize(16)}>
                        16
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item " onClick={()=>this.props.changeSize(20)}>
                        20
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <form className="d-flex w-50" role="search" onSubmit={(e)=>this.postData(e)}>
                <input onChange={(e)=>this.getData(e)}
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter Something Here"
                  aria-label="Search"
                  name="search"
                  id="search"
                />
                <button className="btn btn-outline-light" type="submit"  >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
