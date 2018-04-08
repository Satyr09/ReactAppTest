import React from "react";
import './styles.css';
import Welcome from './issueslist.js';
import Header from './issues.js'
import Test from './test.js';
import Headertwo from './pull.js'
import ReactDOM from 'react-dom';
import Community from	'./community.js'
import  {Switch , Router , Route } from 'react-router'
import { HashRouter , Link , IndexRoute } from 'react-router-dom';

import $ from 'jquery';


class MainClass extends React.Component{
		render(){
			return(
				<HashRouter>
				<Switch>

					<Route exact path='/' component = {Header}/>
					<Route exact path='/pulls' component = {Headertwo}/> 
					<Route exact path= '/community' component={Community}/>
				</Switch>
				</HashRouter>
				);
		}
 

}



ReactDOM.render(
   <MainClass/>,document.getElementById('root')
);
