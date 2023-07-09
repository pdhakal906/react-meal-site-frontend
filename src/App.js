import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import CategoryDetails from './pages/CategoryDetails'
import AboutPage from './pages/AboutPage'
import DetailsPage from './pages/DetailsPage'
import SearchPage from './pages/SearchPage'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/meals/:category' element={<CategoryDetails />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/mealdetails/:id' element={<DetailsPage />} />
          <Route path='/search/:query' element={<SearchPage />} />
          <Route path='*' element={<NotFound />} />



        </Route>


      </Routes>
    </>

  )

}

export default App
