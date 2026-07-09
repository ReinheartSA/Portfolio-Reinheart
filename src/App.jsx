import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import ozeisCafeImage from './ozeis-cafe.png'
import karayoukeImage from './karayouke.png'
import halfBodyImage from './half-body.png'
import { Icons } from './icon'



function Typewriter({ as: Tag = 'p', text, className = '', speed = 35, delay = 0, showEndBlip = false }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeoutId
    let intervalId

    timeoutId = setTimeout(() => {
      let currentIndex = 0

      intervalId = setInterval(() => {
        currentIndex += 1
        setDisplayedText(text.slice(0, currentIndex))

        if (currentIndex >= text.length) {
          clearInterval(intervalId)
          setIsComplete(true)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [delay, speed, text])

  return (
    <Tag className={className}>
      <span className="typing-text" style={{ whiteSpace: 'pre-wrap' }}>
        {displayedText}
      </span>
      {!isComplete ? (
        <span className="typing-cursor" aria-hidden="true">|</span>
      ) : showEndBlip ? (
        <span className="typing-end-blip" aria-hidden="true">|</span>
      ) : null}
    </Tag>
  )
}

function App() {
  const introText = "Hello, I'm Reinheart Silalong Alinan, currently an Undergraduate IT Student with highly deep interests in web development, data engineering, & QA checks for IT security."
  const favoriteQuoteText = 'My favorite quote? Well, it goes like this...'
  const japaneseQuoteText = '"不完全だからこそ美しく、\n移ろうからこそ愛おしい――欠けた器に宿る月の影に\n、世界の静かな真実がある。"'
  const englishQuoteText = '"Because it is incomplete, it is beautiful,\nBecause it changes, it is lovely -\nIn the shadow of the moon that dwells in the broken vessel,\nThere is a quiet truth of the world."\n~Nihon no dentōteki biishiki'

  return (
    <main className="portfolio-shell">
      <div className="portfolio-layout">
        <div className="portfolio-content">
          <section className="hero-section" id="home">
            <div className="hero-copy">
              <p className="eyebrow">Short Introduction!</p>
              <Typewriter as="p" text={introText} className="hero-text hero-text--typing" speed={28} delay={4700} />
              <Typewriter as="h2" text={favoriteQuoteText} className="text-right italic hero-quote-line" speed={50} delay={11000} />
              <Typewriter as="h2" text={japaneseQuoteText} className="text-right italic hero-quote-line" speed={50} delay={14000} />
              <Typewriter
                as="h2"
                text={englishQuoteText}
                className="text-justify italic hero-quote-line"
                speed={50}
                delay={17000}
                showEndBlip
              />
            </div>

            <div className="hero-visual">
              <figure className="hero-visual__frame">
                <img src={halfBodyImage} alt="Reinheart Silalong Alinan" className="hero-section_picture" />
              </figure>
            </div>
          </section>

          <div className="section-spacer" > </div>
            <div style={{ height: '40px' }} />

          <section> 
            <div className="section-header">
              <h1 className="section-title bold text-center">My Current Primary Tech Stack</h1>
              <p className="section-subtitle text-center">These are the technologies I currently use and am most comfortable with in my web development projects.</p>
              <div className="tech-stack-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* so uuuhhhh, yeah, this part. Idk, i just felt to do it like this, even my AI said its trash, so  anyway */}
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.react} className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-5">
                </img>React
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.js}className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>Javascript
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.html} className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>HTML
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.css}className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>CSS
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.git} className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>Git
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.github}className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>Github
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.vite} className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>Vite
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.vercel}className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>Vercel
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.figma} className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>Figma
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.nextjs}className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>NextJS
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.node} className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>NodeJS
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.python}className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>Python
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.mongodb}className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>mongoDB
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.mysql} className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>MySQL
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.supabase} className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>Supabase
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.tailwind}className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>Tailwind CSS
                </div>
                <div className="tech-stack-item flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white font-semibold text-lg hover:scale-105 hover:border-white/40 transition-all duration-300">
                <img src={Icons.gsap} className="w-12 h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                </img>GSAP
                </div>
              </div>
            </div>
          </section>

          <section className="projects-section" id="projects">
            <div className="section-header">
              <h1 className="section-title bold text-center">My Projects</h1>
              <p className="section-subtitle text-center">Here are some of the projects I've worked and participated, showing my skills in programming and development </p>
            </div>
            <div className="projects-grid">
              <div className="project-card">
                <a href="https://pos-cafe-reinheart.vercel.app/" target="_blank" rel="noopener noreferrer"> 
                <h1>Ozeis Cafe</h1>
                <figure className="project-image-frame">
                  <img src={ozeisCafeImage} alt="Ozeis Cafe" className="project-image" />
                </figure>
                <p>Dibuat dengan React & Supabase untuk memudahkan manajemen pesanan di cafe.</p>
                </a>
              </div>
              <div className="project-card">
                <a href="https://karayouke.com" target="_blank" rel="noopener noreferrer">
                <h1>Karayouke</h1>
                <figure className="project-image-frame">
                  <img src={karayoukeImage} alt="Karayouke" className="project-image" />
                </figure>
                <p>Aplikasi karaoke bagi kalian yang suka bernyanyi!</p>
                </a>
              </div>
              <div className="project-card">
                <a href="https://to-be-announced.com" target="_blank" rel="noopener noreferrer"> </a>
                <h1>To be announced</h1>
                <p>Wait for more of my projects!</p>
              </div>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <h2 className="section-title">Contact Me</h2>
            <p>If you want to reach out, feel free to contact me via email or connect with me on LinkedIn.</p>
            <ul className="contact-list">
              <li>Email: <a href="mailto:reinalinan.beta@gmail.com">reinalinan.beta@gmail.com</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/reinalinan/" target="_blank" rel="noopener noreferrer">Reinheart Silalong Alinan</a></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
