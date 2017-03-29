import React, { Component } from 'react';
import IndividualCategory from './IndividualCategory';
import { axios } from 'react-axios'

class CategoriesList extends Component {
	constructor() {
		super();
		this.state = {
			categoriesArray: [
				{
					title: 'Spencer', 
					desc: 'Description of Spencer',
					photo: ''
				}, 
				{
					title: 'Andrew', 
					desc: 'Description of Spencer',
					photo: ''
				}
			]
		};
	}

  	render() {
    	return (
	    	<div className="appCategoriesList">
		     	<h1>Categories Page</h1>
		        {this.state.categoriesArray.map((el, i) => {
		        	return <IndividualCategory title={el.title} desc={el.desc} key={i}/>

		        })
		    }
		    </div>
    );
  }

  componentDidMount() {
	  	return axios.get('http://localhost:3001/categories').then(function(result) {
	  		return result.data;
	  	}).catch(function(err) {
			console.warn('Error in axios maybe idk', err);
		})
	  }
}

export default CategoriesList;