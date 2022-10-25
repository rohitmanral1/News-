import React, { Component } from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import News from './News'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      language : 'hi',
      pageSize : 8 ,
      search : ''
      
    }
  }
  changeSize = (data) =>{
   console.log("data:",data)
    this.setState({pageSize:data})
  }
  changeLanguage = (data) =>{
    this.setState({language:data})
  }
  changeSearch=(data)=>{
    
    // alert(data)
    this.setState({search:data})
    
  
  }
  render() {
    return (
     <>
    <BrowserRouter>
    <Navbar changeLanguage = {this.changeLanguage}  changeSize={this.changeSize} changeSearch={this.changeSearch}/>
    <Routes>
      <Route path='/'   element = {<News search={this.state.search} pageSize={this.state.pageSize}  language={this.state.language}  q='All'/>}/>
      <Route path='/politics' element = {<News search={this.state.search} pageSize={this.state.pageSize}  language={this.state.language} q='Politics'/>}/>
      <Route path='/science'  element = {<News search={this.state.search} pageSize={this.state.pageSize}  language={this.state.language} q='Science'/>}/>
      <Route path='/covid'  element = {<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language}  q='Covid'/>}/>
      <Route path='/technology'  element = {<News search={this.state.search} pageSize={this.state.pageSize}  language={this.state.language} q='Technology'/>}/>
      <Route path='/entertainment'element = {<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language}   q='Entertainment' />}/>
      <Route path='/education'  element = {<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language}  q='Education'/>}/>
      <Route path='/sports'  element = {<News search={this.state.search} pageSize={this.state.pageSize}  language={this.state.language} q='Sports'/>}/>
      <Route path='/cricket'  element = {<News search={this.state.search} pageSize={this.state.pageSize}  language={this.state.language} q='Cricket'/>}/>
      <Route path='/crime'  element = {<News search={this.state.search} pageSize={this.state.pageSize}  language={this.state.language} q='Crime'/>}/>
      <Route path='/business'  element = {<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language}  q='Business'/>}/>
      <Route path='/jokes'  element = {<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language}  q='Jokes'/>}/>

    </Routes>
    <Footer/>
    
    
    </BrowserRouter>
     
     </>
    )
  }
}
