import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css' ;
export default class Communitydata extends React.Component {


  


  constructor(props){
    super(props);

    this.state={
  Description : "",
  CodeOfConduct : ""
    };
          this.handleClick = this.handleClick.bind(this);

  }
      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }



componentWillReceiveProps(nextProps) {
 console.log('componentWillReceiveProps', nextProps);
 if(nextProps['userdata']!=this.state.username || nextProps['repodata']!=this.state.reponame){

 	this.state.reponame = nextProps['repodata'];
 	this.state.username = nextProps['userdata'];

 console.log(this.state.reponame+"SDASDASDASDASDASDS");

 var xhr = new XMLHttpRequest();
    var json_obj, status = false;
    var urloflink = "https://api.github.com/repos/"+this.state.username+"/"+this.state.reponame+"/community/profile"
    xhr.open("GET", urloflink, true);
    xhr.setRequestHeader("Accept", "application/vnd.github.black-panther-preview+json");

    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          status = true;
          console.log(json_obj);
/*
          'Code Of Conduct Type' : json_obj.files.code_of_conduct.name,
          'Code Of Conduct URL' : json_obj.files.code_of_conduct.html_url,
          'Last Updated at ' : json_obj.updated_at,
          Health : json_obj.health_percentage,
          License:json_obj.files.license['name']  ,



*/

          if(json_obj.description){
          this.setState({
          Description : json_obj.description,   
       });
        }


        if(json_obj.code_of_conduct){
        if(json_obj.files.code_of_conduct.name){
            this.setState({
          'Code Of Conduct Type' : json_obj.files.code_of_conduct.name,  
       });

        }
      }
        if(json_obj.code_of_conduct){

        if(json_obj.files.code_of_conduct.html_url){
            this.setState({
          'Code Of Conduct URL' : json_obj.files.code_of_conduct.html_url,
       });

        }
      }

        if(json_obj.updated_at){
            this.setState({
          'Last Updated at ' : json_obj.updated_at,
       });

        }


        if(json_obj.health_percentage){
            this.setState({
          Health : json_obj.health_percentage,
       });

        }

        if(json_obj.files.license){
        if(json_obj.files.license['name'] ){
            this.setState({
          License:json_obj.files.license['name']  ,
       });

        }

      }





        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);



//------------------------------------------ Second request ----------------------------------------------------------------










    var xhr2 = new XMLHttpRequest();
    var json_obj2, status = false;
    var urloflink2 = "https://api.github.com/repos/"+this.state.username+"/"+this.state.reponame+"/traffic/views"
    xhr2.open("GET", urloflink2, true);
    xhr2.setRequestHeader("Accept", "application/vnd.github.black-panther-preview+json");

    xhr2.onload = function (e) {
      if (xhr2.readyState === 4) {
        if (xhr2.status === 200) {
          var json_obj2 = JSON.parse(xhr2.responseText);
          status = true;
          console.log(json_obj2);



          this.setState({
              'Total Views' : json_obj2.count,
              'Unique Views' : json_obj2.uniques
          


        });
        } else {
          console.error(xhr2.statusText);
        }
      }
    }.bind(this);
    xhr2.onerror = function (e) {
      console.error(xhr2.statusText);
    };
    xhr2.send(null);



















}
}



  render() 
  {

     let displayeddescripton =Object.keys(this.state).map((key,index)=>{
          let randd = this.state.reponame;
          if(this.state[key] != "" && key!='reponame' && key!='username' && this.state[key]!=null){
        return (
       <li className="list-group-item">
      
      <p><strong>{key}</strong>:  {this.state[key]} </p>
     </li>

  )
      }

}
  ); 


    return (
      <ul>
        {displayeddescripton}


      </ul>
    )


  }
}

