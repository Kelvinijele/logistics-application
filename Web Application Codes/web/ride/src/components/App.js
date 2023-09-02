import React, { Component } from 'react';
// import ReactDom from 'react-dom'

import Nav from './Nav';
// import Footer from './Footer';
import './css/main.css';
import Ride from './Ride';

export class App extends Component {
	render() {
		return (
			<div className='bodyjs'>
				<Nav />

				<Ride />
				{/* <Footer/> */}
			</div>
		);
	}
}

export default App;
