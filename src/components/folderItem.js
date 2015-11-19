'use strict';

var React = require('react');
var $ = require('jquery');

// Require components
var GitRepos = require('./gitRepos');

var FolderItem = React.createClass({
  getInitialState: function () {
    return {
      folderURL: 'http://4.bp.blogspot.com/-DEy1_SkAbC4/USh-cZZozyI/AAAAAAAABCk/h40QemNn1SY/s320/leopard-folder-big.png',
      colors: ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink']
      };
  },
  componentDidMount: function () {
    $('.special.cards .image').dimmer({
      on: 'hover'
    });
  },
  render: function() {
    let folder = (
        <div className="column ui special cards">
          <div className="ui fluid card">
            <div className="blurring dimmable image">
              <div className="ui dimmer">
                <div className="content">
                  <div className="center">
                    <div className="ui inverted button" id={this.props.id} onClick={this.props.clickHandler}>Enter</div>
                  </div>
                </div>
              </div>
              <img src={this.props.src || this.state.folderURL} />
            </div>
            <div className="content">
              <a className="header">{this.props.name}</a>
            </div>
          </div>
        </div>
    );
    
    // Chose a random color
    let min = 0, max = this.state.colors.length - 1;
    let color = this.state.colors[Math.floor(Math.random() * (max - min + 1)) + min];
    let myClass = color + ' ui fluid card';
    let item = (
        <div className="column">
          <div className={myClass}>
            <a className="image">
              <img src={this.props.src} id={this.props.id} onClick={this.props.clickHandler} alt={this.props.name} />
            </a>
          </div>
        </div>
    );
    
    return this.props.isFolder ? folder : item;
  }
});

module.exports = FolderItem;
