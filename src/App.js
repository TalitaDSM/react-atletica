import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Acessibilidade from '.components/layouts/Acessibilidade'
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
import AcessibilidadePage from './components/pages/AcessibilidadePage'


function App() {
  return (
    <Router>
      <Acessibilidade />
      <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Inicio />
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
