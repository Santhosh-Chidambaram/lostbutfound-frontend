import React from 'react'
import './App.css'
import { Topnav } from './components/main/Topnav'
import { useEffect } from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import { Logincard } from './components/Auth/Logincard'
import { Registercard } from './components/Auth/Registercard'

const App = () => {
	useEffect(() => {
		M.AutoInit()
	})
	return (
		<>
			<Topnav />

			<section className='background'>
				<Registercard />
			</section>
		</>
	)
}

export default App
