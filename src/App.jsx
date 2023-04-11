import { CTA, Navbar } from './components/index';
import { Clients, Footer, Header, Possibility,DownloadWays,Wallet } from './container/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Clients />
      <Possibility />
      <Wallet />
      <DownloadWays />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
