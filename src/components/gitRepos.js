'use strict';

var React = require('react');
var $ = require('jquery');

var GitRepos = React.createClass({
  getInitialState: function() {
    return {repos: []};
  },
  componentDidMount: function () {
    $.ajax({
      url: 'https://api.github.com/users/' +this.props.username + '/repos',
      dataType: 'json',
      cache: true,
      success: function(data) {
        this.setState({repos: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('https://api.github.com/users/' +this.props.username + '/repos', status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    let repos = [];
    
    if (this.state.repos.length !== 0) {
      repos = this.state.repos.map(function(repo){
        return (
           <a className="item" href={repo.html_url} key={repo.id}>
            {repo.name}
           </a>
        );
      });
    }
    
    return (
      <div className="ui link list">
        {repos}
      </div>
    );
  }
});

module.exports = GitRepos;
