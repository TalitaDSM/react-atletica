import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <><Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/cadastro'>
            <Cadastro />
          </Route>
          <Route exact path='/quemsomos'>
            <QuemSomos />
          </Route>
          <Route exact path='/modalidades'>
            <Modalidades />
          </Route>
          <Route exact path='/campeonato'>
            <Campeonato />
          </Route>
          <Route exact path='/eventos'>
            <Eventos />
          </Route>
          <Route exact path='/lojavirtual'>
            <LojaVirtual />
          </Route>
          <Route exact path='/contato'>
            <Contato />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Router>
      </Container>
    </Switch><Footer /></>
  
  )
}

export default App;
