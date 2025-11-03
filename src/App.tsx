import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Movements from './pages/Movements'
import { AppBar, Toolbar, Typography, Container } from '@mui/material'

export default function App() {
  return (
    <div className="min-h-screen">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Spendr
          </Typography>
          <nav>
            <Link to="/" className="mr-4 text-white">
              Home
            </Link>
            <Link to="/movements" className="text-white">
              Movements
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movements" element={<Movements />} />
        </Routes>
      </Container>
    </div>
  )
}
