import React from "react";
import './styles.css';
import Pulls from './pulllist.js';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import { Link } from 'react-router-dom';

import $ from 'jquery';

export default class Headertwo extends React.Component{
constructor(props){
  super(props);
  this.state={
    repodatas : " " ,
    userdatas :  " ",

  };
}
  render(){
    let handleSubmit= ((e)=>{
   
      e.preventDefault();
      var user=($('#username').val());
          this.setState({userdatas : user});
      var repo = ($('#reponame').val());
      this.setState({repodatas : repo});
          console.log(user+" "+repo);
    
    });

      return(
      <div className ="wrapperclass">
      <Link to='/'>Fetch Issues </Link>
        <h1> Fetch Pull Requests for a Repository </h1>
        <h3> In React </h3>


        <div id="searchform">
            <form id="myForm" name="myForm" onSubmit = {handleSubmit}>
             <div>
                    <label >Enter github username:</label>
                    <input type="text" id="username" name="username"/>
                    <br/>
                    <br/>
                    <br/>
                     <label >Enter a repository of this user:</label>
                    <input type="text" id="reponame" name="reponame"/>
             </div>
             <br/>
             <br/>
             <br/>
  
        <input class="button" type="submit" value="Submit"/>
        </form>
          <Pulls repodata = {this.state.repodatas}  userdata= {this.state.userdatas} />
        </div>
        </div>
        );


  }

}
