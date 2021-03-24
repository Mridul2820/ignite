// Packages
import { Route } from "react-router-dom";

// Components & Pages
import Home from './pages/Home'
import Nav from './components/Nav'

// Styles
import GlobalStyles from './components/GlobalStyles'


const App = () => {
    return (
        <div>
            <GlobalStyles />
            
            <Nav />
            <Route path={['/game/:id', '/']}>
                <Home />
            </Route>
            
        </div>
    )
}

export default App
