import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">MinhaMarca</div>
        <ul className="nav-links">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
