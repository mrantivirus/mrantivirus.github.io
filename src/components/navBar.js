'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = React.createClass({
  render: function() {
    return (
      <div className="ui fixed menu">
        <div className="ui container">
			   <a href="https://github.com/Mr-Antivirus" className="header item">
				  <img className="logo" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"/>
				  @Mr-Antivirus
         </a>
			   <a href="./index.html" className="item">Home</a>
			   <a href="./folders.html" className="item">Folders</a>
			   <a href="#" className="item">About</a>
		    </div>
      </div>
    );
  }
});

module.exports = NavBar;
