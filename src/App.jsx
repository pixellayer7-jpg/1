import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Process from './components/Process'
import Faq from './components/Faq'
import About from './components/About'
import Deliverables from './components/Deliverables'
import Legal from './components/Legal'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyCta from './components/StickyCta'

const LANG_KEY = 'pixelayer-landing-lang'

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const q = params.get('lang')
      if (q === 'en' || q === 'zh') return q
      const s = localStorage.getItem(LANG_KEY)
      if (s === 'en' || s === 'zh') return s
    } catch {
      /* ignore */
    }
    return 'en'
  })

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    document.title =
      lang === 'zh'
        ? 'PixelLayer L.L.C — 前端与 Web 开发'
        : 'PixelLayer L.L.C — Frontend & Web Development'
  }, [lang])

  const skipMain = lang === 'en' ? 'Skip to content' : '跳到正文'
  const skipContact = lang === 'en' ? 'Skip to contact' : '跳到联系'

  return (
    <>
      <a href="#main-content" className="skip-link">
        {skipMain}
      </a>
      <a href="#contact" className="skip-link skip-link--second">
        {skipContact}
      </a>
      <Hero lang={lang} setLang={setLang} />
      <main id="main-content">
        <Stats lang={lang} />
        <Services lang={lang} />
        <Projects lang={lang} />
        <TechStack lang={lang} />
        <Process lang={lang} />
        <About lang={lang} />
        <Deliverables lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
      </main>
      <Legal lang={lang} />
      <Footer lang={lang} />
      <StickyCta lang={lang} />
    </>
  )
}
