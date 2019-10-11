import React from 'react'
import './App.css'
import { Topnav } from './components/main/Topnav'
import { useEffect } from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import { Logincard } from './components/Auth/Logincard'
import { Registercard } from './components/Auth/Registercard'
import { ListView } from './components/posts/ListView'

import { Route, Switch } from 'react-router-dom'

import AuthState from './context/Auth/AuthState'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

const App = () => {
	useEffect(() => {
		M.AutoInit()
	})
	return (
		<>
			<AuthState>
				<Topnav />

				<section className='background'>
					<Switch>
						<Route path='/' exact component={Logincard} />
						<Route path='/login' exact component={Logincard} />
						<Route path='/register' exact component={Registercard} />
						<Route path='/test' exact component={ListView} />
					</Switch>
				</section>
			</AuthState>
		</>
	)
}

export default App
