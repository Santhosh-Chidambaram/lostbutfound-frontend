import React from 'react'
import './App.css'
import { Topnav } from './components/main/Topnav'
import { useEffect } from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import { Logincard } from './components/Auth/Logincard'
import { Registercard } from './components/Auth/Registercard'


import {Route, Switch} from 'react-router-dom'
const App = () => {
	useEffect(() => {
		M.AutoInit()
	})
	return (
		<>
			<Topnav />

      <section className='background'>
        <Switch>
          <Route path='/' exact component={Logincard} />
          <Route path='/login' exact component={Logincard} />
          <Route path='/register' exact component={Registercard} />
        </Switch>
				
			</section>
		</>
	)
}

export default App
