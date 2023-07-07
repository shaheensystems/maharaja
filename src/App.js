import React from 'react';
import  './App.css';

import Navbar from './components/Navbar';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Contactus from './pages/Contactus';


import Yourorder from './pages/Yourorder';
import SignUp from './pages/signup';

import './index.css';

import Menu from './pages/Menu';


import  './logo.svg';



function App() {
return (
	<Router>
	<Navbar />
	
	
	<Routes>
		<Route path='/' exact element={<Home />} />
		
		
		
		
		<Route path='/sign-up' element={<SignUp />} />
		<Route path='/menu' element={<Menu />} />
		<Route path='/Yourorder' element={<Yourorder />} />
		<Route path='Contactus' element={<Contactus/>} />
		<Route path='/sign-up' element={<SignUp />} />
		
	</Routes>
	</Router>
);
}

export default App;
