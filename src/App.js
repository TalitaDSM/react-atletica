import './App.css';
import NavBar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/quemsomos' element={<QuemSomos />} />
          <Route path='/modalidades' element={<Modalidades />} />
          <Route path='/campeonato' element={<Campeonato />} />
          <Route path='/eventos' element={<Eventos />} />
          <Route path='/lojavirtual' element={<LojaVirtual />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;
