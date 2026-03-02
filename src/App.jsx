import { useState, useEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes.jsx'

import { LoadingScreen } from "./loading.jsx"

function App() {
	const [initialLoading, setInitialLoading] = useState(true)

	const handleLoadingComplete = () => {
		setInitialLoading(false)
	}

	if (initialLoading) {
		return <LoadingScreen onComplete={handleLoadingComplete} />
	}

	return (
		<BrowserRouter>
			<AppRoutes/>
		</BrowserRouter>
	)
}

export default App
