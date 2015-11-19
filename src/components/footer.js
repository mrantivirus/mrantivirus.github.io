'use strict';

var React = require('react');

// Require components
var GitRepos = require('./gitRepos');

var Footer = React.createClass({
  render: function() {
    return (
      <div className="ui vertical footer segment">
        <div className="ui center aligned container">
			<div className="ui stackable inverted divided equal height stackable grid">
				<div className="three wide column">
					<h4>About</h4>
					<div className="ui link list">
						<a className="item" href="#">Sitemap</a>
						<a className="item" href="#">Contact</a>
					</div>
				</div>
				<div className="four wide column">
					<h4>Repos</h4>
					<GitRepos username="Mr-Antivirus"/>
				</div>
				<div className="six wide column">
					<h4>About</h4>
					<div className="ui link list">
						TODO: Fill in later
					</div>
				</div>
			</div>
		</div>
      </div>
    );
  }
});

module.exports = Footer;
