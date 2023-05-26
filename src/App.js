import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//import Acessibilidade from './components/layouts/Acessibilidade'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Container from './components/layouts/Container'
import Inicio from './components/pages/Inicio'
import AcessibilidadePage from './components/pages/AcessibilidadePage'
import Cadastro from './components/pages/Cadastro'
import QuemSomos from './components/pages/QuemSomos'
import Modalidades from './components/pages/Modalidades'
import Campeonatos from './components/pages/Campeonatos'
import Eventos from './components/pages/Eventos'
import LojaVirtual from './components/pages/LojaVirtual'
import Contato from './components/pages/Contato'
import LoginPage from './components/pages/LoginPage'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/" component={Inicio}>
          </Route>
          <Route exact path="/acessibilidadepage" component={AcessibilidadePage}>
          </Route>
          <Route exact path="/cadastro" component={Cadastro}>
          </Route>
          <Route exact path="/quemsomos" component={QuemSomos}>
          </Route>
          <Route exact path="/modalidades" component={Modalidades}>
          </Route>
          <Route exact path="/campeonatos" component={Campeonatos}>
          </Route>
          <Route exact path='/eventos' component={Eventos}>
          </Route>
          <Route exact path="/lojavirtual" component={LojaVirtual}>
          </Route>
          <Route exact path="/contato" component={Contato} >
          </Route>
          <Route exact path="/loginpage" component={LoginPage}>
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
