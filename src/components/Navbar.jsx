import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from 'gsap'

gsap.registerPlugin(ScrollToPlugin)

const Navbar = () => {
  const handleScroll = (event, targetId) => {
    event.preventDefault()

    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      gsap.to(window, {
        duration: 1.1,
        ease: 'power2.out',
        scrollTo: {
          y: targetElement,
          offsetY: 110,
          autoKill: true,
        },
        onComplete: () => {
          history.replaceState(null, '', `#${targetId}`)
        },
      })
    }
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary">
        <a className="navbar-brand" href="#home" onClick={(event) => handleScroll(event, 'home')}>
            <img className="navbar-brand__profilepic" src="/src/profil1.webp" alt="Profile Picture" />
          <span className="navbar-brand__text">Reinheart Silalong Alinan</span>
        </a>

        <ul className="navbar-menu">
          <li><a href="#home" onClick={(event) => handleScroll(event, 'home')}>Home</a></li>
          <li><a href="#projects" onClick={(event) => handleScroll(event, 'projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(event) => handleScroll(event, 'contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;