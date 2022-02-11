import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
	return (
		<Routes>
			<Route
				path={'/'}
				element={
					<main
						className={`absolute inset-0 grid place-items-center bg-slate-900`}
					>
						<h1
							className={`text-[10vw] font-semibold text-gray-200`}
						>
							Hello React.JS!
						</h1>
					</main>
				}
			/>
		</Routes>
	)
}

export default App
