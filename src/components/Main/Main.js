import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'

export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>

    </Routes>
  )
}