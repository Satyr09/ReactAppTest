import React from "react";
import './styles.css';
import Communitydata from './communitydata.js';
import ReactDOM from 'react-dom';

import $ from 'jquery';

export default class Community extends React.Component{
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
      <div className ="container-fluid">
        <h1> Fetch Community Profile </h1>
       <br/>
       <br/>


        <div id="searchform">
            <form id="myForm" name="myForm" onSubmit = {handleSubmit}>
             <div className="align-center">  
                    <div className="col-xs-4 col-xs-offset-4">
                    <label >Enter github username:</label>
                    <input id="username" type="text" className="form-control" name="username"/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                     <div className="col-xs-4 col-xs-offset-4">
                     <label >Enter a repository of this user:</label>
                    <input  id="reponame"  type="text" className="form-control" name="reponame"/>
                     </div>

             </div>
             <br/>
             <br/>
             <br/>
             <br/>
  
        <input class="button" type="submit" value="Submit!"/>
        </form>
          <Communitydata repodata = {this.state.repodatas}  userdata= {this.state.userdatas} />
        </div>
        </div>
        );


  }

}
