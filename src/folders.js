// Layout/main entry file for the site.
// Everything gets put together here.

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

window.$ = $;
window.jQuery = $;
window.react = React;
window.reactDom = ReactDOM;

// Require the components
var NavBar = require('./components/navBar');
var Footer = require('./components/footer');
var FolderView = require('./components/folderView');

var Layout = React.createClass({
  getInitialState: function() {
    return {folders: [], items:[], currentView:''};
  },
  getOrganizations: function () {
    $.ajax({
      url: 'https://api.github.com/organizations',
      dataType: 'json',
      cache: true,
      success: function(data) {
        let folderData = this.modelOrgAsFolder(data);
        this.setState({folders: folderData, items:[], currentView:'Organizations'});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('https://api.github.com/organizations', status, err.toString());
      }.bind(this)
    });
  },
  getOrgRepos: function (contentURL) {
    $.ajax({
      url: contentURL,
      dataType: 'json',
      cache: true,
      success: function(data) {
        let folderData = this.modelRepoAsFolder(data);
        this.setState({folders: folderData, items:[], currentView:'Respositories'});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(contentURL, status, err.toString());
      }.bind(this)
    });
  },
  getRepoUsers: function (contentURL) {
    $.ajax({
      url: contentURL,
      dataType: 'json',
      cache: true,
      success: function(data) {
        let userData = this.modelUserAsItem(data);
        this.setState({items: userData, folders: [], currentView:'Subscribers'});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(contentURL, status, err.toString());
      }.bind(this)
    });
  },
  modelOrgAsFolder: function (data) {
    return data.map(function (obj) {
      return {
        id: 'org-' + obj.id, // HACK just for example purposes
        key: obj.id,
        name: obj.login,
        contentURL: obj.repos_url
      };
    });
  },
  modelRepoAsFolder: function (data) {
    return data.map(function (obj) {
      return {
        id: 'repo-' + obj.id, // HACK just for example purposes
        key: obj.id,
        name: obj.name,
        contentURL: obj.subscribers_url
      };
    });
  },
  modelUserAsItem: function (data) {
    return data.map(function (obj) {
      return {
        id: 'user-' + obj.id, // HACK just for example purposes
        key: obj.id,
        name: obj.login,
        imgURL: obj.avatar_url,
        contentURL: obj.html_url
      };
    });
  },
  handleFolderClick: function (e) {
    let index = -1;
    
    for(var i = 0, len = this.state.folders.length; i < len; i++) {
        if (this.state.folders[i].id === e.target.id) {
            index = i;
            break;
        }
    }
    
    let contentURL = this.state.folders[index].contentURL;
    
    if (e.target.id.startsWith('org'))
      this.getOrgRepos(contentURL);
    else if (e.target.id.startsWith('repo'))
      this.getRepoUsers(contentURL);
  },
  handleItemClick: function (e) {
    let index = -1;
    
    for(var i = 0, len = this.state.items.length; i < len; i++) {
        if (this.state.items[i].id === e.target.id) {
            index = i;
            break;
        }
    }
    
    window.location = this.state.items[index].contentURL;
  },
  componentDidMount: function () {
    this.getOrganizations();
  },
  render: function() {
    return (
      <div>
        <NavBar />
        <div className="ui main text container">
          <h1 className="ui header">Folder View</h1>
          <FolderView folderName={this.state.currentView} folders={this.state.folders} items={this.state.items} folderClickHandler={this.handleFolderClick} itemClickHandler={this.handleItemClick}/>
        </div>
        <div className="ui inverted section divider"></div>
        <Footer />
      </div>
    );
  }
});

ReactDOM.render(
  <Layout />,
  document.getElementById('react')
);
