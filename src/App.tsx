import * as React from 'react';
import classes from './App.module.css';

import Template from './Template/Template';

class App extends React.Component {
	render() {
		return (
			<div className={classes.App}>
				<Template />
			</div>
		);
	}
}

export default App;
