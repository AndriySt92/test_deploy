import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Contacts } from './pages/Contacts/Contacts'
import { Home } from './pages/Home/Home'
import { RepairWork } from './pages/RepairWork/RepairWork'
import { Services } from './pages/Services/Services'
import { Layout } from './components/Layout/Layout'
import { FacadeWorks } from './pages/FacadeWorks/FacadeWorks'
import { PlasterWorks } from './pages/PlasterWorks/PlasterWorks'
import { RoofingWorks } from './pages/RoofingWorks/RoofingWorks'
import { ProjectDevelopment } from './pages/ProjectDevelopment/ProjectDevelopment'
import { ConcreteWorks } from './pages/ConcreteWorks/ConcreteWorks'
import { PavingWorks } from './pages/PavingWorks/PavingWorks'
import { DecorativePlaster } from './pages/DecorativePlaster/DecorativePlaster'
import { Portfolio } from './pages/Portfolio/Portfolio'
import { Tips } from './pages/Tips/Tips'
import { Project } from './pages/Project/Project'
import { Tip } from './pages/Tip/Tip'

function App() { 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="services" element={<Services />} />
          <Route path="repairWorks" element={<RepairWork />} />
          <Route path="facadeWorks" element={<FacadeWorks  />} />
          <Route path="plasterWorks" element={<PlasterWorks />} />
          <Route path="roofingWorks" element={<RoofingWorks  />} />
          <Route path="projectDevelopment" element={<ProjectDevelopment  />} />
          <Route path="concreteWorks" element={<ConcreteWorks  />} />
          <Route path="pavingWorks" element={<PavingWorks  />} />
          <Route path="decorativePlaster" element={<DecorativePlaster  />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="tips" element={<Tips />} />
          <Route path="tip/:urlTitle" element={<Tip />} />
          <Route path="project/:name" element={<Project />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
