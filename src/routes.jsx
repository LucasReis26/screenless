import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function AppRoutes(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage/>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes;
