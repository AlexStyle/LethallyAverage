import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import GrainOverlay from './components/UI/GrainOverlay'
import Home from './pages/Home'
import HomeBasics from './pages/HomeBasics'
import MultiFamily from './pages/MultiFamily'
import IoTSecurity from './pages/IoTSecurity'
import Checklist from './pages/Checklist'
import Threats2026 from './pages/Threats2026'
import ScamPlaybook from './pages/ScamPlaybook'
import SocialMediaSafety from './pages/SocialMediaSafety'
import WhenItHappens from './pages/WhenItHappens'
import StayLegal from './pages/StayLegal'
import About from './pages/About'
import Community from './pages/Community'
import CareerPaths from './pages/CareerPaths'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import StudyGuide from './pages/StudyGuide'
import WeeklyStories from './pages/WeeklyStories'
import WeeklyStoryDetail from './pages/WeeklyStoryDetail'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const location = useLocation()

  return (
    <>
      <GrainOverlay />
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/security/home-basics" element={<HomeBasics />} />
            <Route path="/security/multifamily" element={<MultiFamily />} />
            <Route path="/security/iot" element={<IoTSecurity />} />
            <Route path="/security/checklist" element={<Checklist />} />
            <Route path="/security/threats-2026" element={<Threats2026 />} />
            <Route path="/security/scams" element={<ScamPlaybook />} />
            <Route path="/security/social-media" element={<SocialMediaSafety />} />
            <Route path="/security/when-it-happens" element={<WhenItHappens />} />
            <Route path="/security/stay-legal" element={<StayLegal />} />
            <Route path="/weekly-stories" element={<WeeklyStories />} />
            <Route path="/weekly-stories/:slug" element={<WeeklyStoryDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="/career-paths" element={<CareerPaths />} />
            <Route path="/study-guide" element={<StudyGuide />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App
