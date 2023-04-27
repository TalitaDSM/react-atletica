import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Container from './components/layouts/Container'
import Cadastro from './components/pages/Cadastro'
import Campeonatos from './components/pages/Campeonatos'
import Contato from './components/pages/Contato'
import Eventos from './components/pages/Eventos'
import Inicio from './components/pages/Inicio'
import LoginPage from './components/pages/LoginPage'
import LojaVirtual from './components/pages/LojaVirtual'
import Modalidades from './components/pages/Modalidades'
import QuemSomos from './components/pages/QuemSomos'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
          <Route exact path="/quemsomos">
            <QuemSomos />
          </Route>
          <Route exact path="/modalidades">
            <Modalidades />
          </Route>
          <Route exact path="/campeonatos">
            <Campeonatos />
          </Route>
          <Route exact path='/eventos'>
            <Eventos />
          </Route>
          <Route exact path="/lojavirtual">
            <LojaVirtual />
          </Route>
          <Route exact path="/contato">
            <Contato />
          </Route>
          <Route exact path="/loginpage">
            <LoginPage />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
