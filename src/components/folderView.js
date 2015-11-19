'use strict';

var React = require('react');
var $ = require('jquery');
var FolderItem = require('./folderItem');

var FolderView = React.createClass({
  folderClickHandler: function (e) {
    console.log(e);
  },
  render: function() {
    let folders = [];
    let items = [];
    let myself = this;
    
    if (typeof this.props.folders !== 'undefined') {
      folders = this.props.folders.map(function(folder){
        return (
           <FolderItem key={folder.key} clickHandler={myself.props.folderClickHandler} name={folder.name} id={folder.id} isFolder={true}/>
        );
      });
    }
    
    if (typeof this.props.items !== 'undefined') {
      items = this.props.items.map(function(item){
        return (
           <FolderItem src={item.imgURL} key={item.key} clickHandler={myself.props.itemClickHandler} name={item.name} id={item.id} isFolder={false}/>
        );
      });
    }
    
    return (
      <div className="ui five column grid">
        {folders}
        {items}
      </div>
    );
  }
});

module.exports = FolderView;
