import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
	return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
	return ce(
		'div',
		null,
		ce(MyTitle, { color: 'rebeccapurple', title: 'House of Cards' }),
		ce(MyTitle, { color: 'peru', title: 'Orange is the New Black' }),
		ce(MyTitle, { color: 'burlywood', title: 'Stranger Things' }),
		ce(MyTitle, { color: 'red', title: 'Altered Carbon' })
	);
};

render(ce(MyFirstComponent), document.getElementById('app'));
