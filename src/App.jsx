import { useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en') // 'en' | 'zh'

  return (
    <>
      <Hero lang={lang} setLang={setLang} />
      <Services lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} setLang={setLang} />
    </>
  )
}
