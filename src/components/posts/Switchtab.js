import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Tabs, Tab } from 'react-materialize'
import Listinfo from './Listinfo'

const Switchtab = () => {
	const dummy= {}
	return (
		<div
			className='container'
			style={{ paddingTop: '10px', }}
		>
			<Tabs className='tab-demo z-depth-1 tabs-fixed-width'>
				<Tab title='LOST' active >
					<Listinfo data={dummy}/>
				</Tab>
				<Tab title='FOUND'  >
					<Listinfo data={dummy}/>
				</Tab>
			</Tabs>
		</div>
	)
}

export default Switchtab
