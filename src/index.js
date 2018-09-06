import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Root from './Root';
import { AppContainer } from 'react-hot-loader'


const renderApp = Component => {
	render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.querySelector('#root')
	)
}

renderApp(Root)

if (module.hot) {
	module.hot.accept('./Root', () => renderApp(Root))
}

