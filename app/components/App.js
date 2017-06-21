// Hmm

var React = require('react');
var ReactDOM = require('react-dom');

var MyClass = React.createClass({
	render: function() {
		return <h1>Testing, 1, 2, 3, testing </h1>
	}
});

ReactDOM.render(<MyClass />, document.getElementById('app'));

module.exports = MyClass;