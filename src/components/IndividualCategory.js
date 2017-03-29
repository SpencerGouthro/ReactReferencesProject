import React, { Component } from 'react';
import picture from '../me.jpg';

class IndividualCategory extends Component {
  render() {
    return (
    	<div className="appCategoryItem">
			<div className="card col-sm-2">
	          <img className="card-img-top img-responsive" src={picture} alt="altPlaceholderName"/>
	          <div className="card-block">
	            <h4 className="card-title">{this.props.title}</h4>
	            <p className="card-description">{this.props.desc}</p>
	            <a href="#" className="btn btnMoreInfo btn-primary btn-block">More Info</a>
	          </div>
	        </div>
	    </div>
	   	
    );
  }
}

export default IndividualCategory;