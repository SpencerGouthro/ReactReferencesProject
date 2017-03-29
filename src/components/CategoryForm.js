import React, { Component } from 'react';
import Header from './Header';

class CategoryForm extends Component {
  render() {
    return (
      	<div className="appCategoryForm">
      	<Header />
        	<h1>This is the Category Form Page</h1>
			<form>
			  Category Name: 
			  <input type="text" name="categoryName"/><br/>
			  Category Description: 
			  <input type="text" name="categoryDesc"/><br/>
			  Category Picture: 
			  <input type="text" name="categoryPic"/><br/>
			  <input className="btn btn-info" type="submit" value="Submit"/>
			</form>
		</div>
    );
  }
}

export default CategoryForm;