import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import { CreatePlant } from '../../pages/CreatePlant'

export const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route path="/CreatePlant" element={<CreatePlant />}></Route>
    </Routes>
  )
}