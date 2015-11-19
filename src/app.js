// Layout/main entry file for the site.
// Everything gets put together here.

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

// Require the components
var NavBar = require('./components/navBar');
var Footer = require('./components/footer');

var Layout = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        <div className="ui main text container">
          <h1 className="ui header"> lorem ipsum</h1>
          <p>
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          </p>
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
