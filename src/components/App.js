import Header from './Header'
import Footer from './Footer'
import Home from '../views/Home'
import Meal from '../views/Meal'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/meal" component={Meal} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
