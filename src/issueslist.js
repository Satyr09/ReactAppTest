import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css' ;
export default class Welcome extends React.Component {


  


  constructor(props){
    super(props);

    this.state={
      datalist: [],
      titlelist : [],
      currentPage: 1,
      dataPerPage: 8,
      reponame : "" , 
      username : "",
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
    var urloflink = "https://api.github.com/repos/"+this.state.username+"/"+this.state.reponame+"/issues?page=1&per_page=100"
    xhr.open("GET", urloflink, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          status = true;
          console.log(json_obj);
          let dataofavatars = [];
          let titles = [];
          for(let i=1;i<62;i++){
            
            if(!json_obj[i]){
              console.log("doesnt exist");

            }
            else{
            if(!json_obj[i].assignee){
              dataofavatars.push("none assigned");
              titles.push("fillers");
              console.log("Noone assigned for ->"+json_obj[i].url);
            }
            else{
            dataofavatars.push(json_obj[i].assignee.avatar_url);
            titles.push(json_obj[i].title);



        }
      }
    }


          this.setState({ githubdata: json_obj ,
          datalist : dataofavatars ,
          titlelist : titles,
          currentPage: 1,
          datasPerPage: 8,


        });
        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);











 }
}
  


 /* componentDidMount() {
    var xhr = new XMLHttpRequest();
    var json_obj, status = false;
    var urloflink = "https://api.github.com/repos/twosigma/"+this.state.reponame+"/issues?page=1&per_page=100"
    xhr.open("GET", urloflink, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          status = true;
          console.log(json_obj);
          let dataofavatars = [];
          let titles = [];
          for(let i=1;i<62;i++){
            
            if(!json_obj[i]){
              console.log("doesnt exist");

            }
            else{
            if(!json_obj[i].assignee){
              dataofavatars.push("none assigned");
              titles.push("fillers");
              console.log("Noone assigned for ->"+json_obj[i].url);
            }
            else{
            dataofavatars.push(json_obj[i].assignee.avatar_url);
            titles.push(json_obj[i].title);



        }
      }
    }


          this.setState({ githubdata: json_obj ,
          datalist : dataofavatars ,
          titlelist : titles,
          currentPage: 1,
          datasPerPage: 8,


        });
        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }*/

   /* componentDidUpdate(prevState, prevProps) {
       
       if( prevState.reponame !== this.state.reponame  &&  prevProps!==this.props ){
       		 var xhr = new XMLHttpRequest();
    var json_obj, status = false;
    var urloflink = "https://api.github.com/repos/twosigma/"+this.state.reponame['formdata']+"/issues?page=1&per_page=100"
    xhr.open("GET", urloflink, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          status = true;
          
          let dataofavatars = [];
          let titles = [];
          for(let i=1;i<62;i++){
            
            if(!json_obj[i]){
              //console.log("doesnt exist");

            }
            else{
            if(!json_obj[i].assignee){
              dataofavatars.push("none assigned");
              titles.push("fillers");
              console.log("Noone assigned for ->"+json_obj[i].url);
            }
            else{
            dataofavatars.push(json_obj[i].assignee.avatar_url);
            titles.push(json_obj[i].title);



        }
      }
    }


          this.setState({ githubdata: json_obj ,
          datalist : dataofavatars ,
          titlelist : titles,
          currentPage: 1,
          datasPerPage: 8,


        });
        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);


       }
    };
*/



  render() {
    let style ={
      height : '40px',
      width: '40px'
    };

        let pagenumberstyle = {
          listStyle : 'none' , 
          display: 'flex',
          cursor: 'pointer',
          justifyContent: 'center'
        }
        let pageliststyle ={
          color: 'red',
          marginRight : '0.3em' 

        }



    this.state.datalist = this.state.datalist.filter((items)=>{
        if(items === "none assigned"){
          return false;
        }
        return true;
    });
    let halflist = this.state.datalist.slice(0,8);

    this.state.titlelist = this.state.titlelist.filter((items)=>{
        if(items === "fillers"){
          return false;
        }
        return true;
    });
    

   
        let avatarlist = this.state.datalist;
       const indexOfLastData = this.state.currentPage * this.state.dataPerPage;
        const indexOfFirstData = indexOfLastData - this.state.dataPerPage;
        const currentAvatarList = avatarlist.slice(indexOfFirstData, indexOfLastData);
        const currentTitleList = this.state.titlelist.slice(indexOfFirstData, indexOfLastData);

        let displayedlist = currentAvatarList.map((item,index)=>{
        	let randd = this.state.reponame;
        	
        return (
       <li  key={index}>
        <p><img src={item} style={style}/></p>
        
        <p>{this.state.reponame['formdata']}</p>
      <p>This person was assigned as issue titled : " {currentTitleList[index]} "</p>
     </li>

  )

}
  ); 
        

             const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(avatarlist.length / this.state.dataPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li style={pageliststyle}
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });



    return (
      <div>
        <ul>{displayedlist}</ul>
        <ul style= {pagenumberstyle} >{renderPageNumbers}</ul>
      </div>
    );
  }
}

