import './App.css';
import React, { useState } from 'react';
import { Button } from './components/Button/Button';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Botoes } from './pages/Botoes/Botoes';
import { Cards } from './pages/Cards/Cards';
import { Hovers } from './pages/Hovers/Hovers';
import { Listas } from './pages/Listas/Listas';
import { Menu } from './pages/Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import { Mainbody } from './components/Mainbody/Mainbody';

function App() {
  const [menuVisivel, setmenuVisivel] = useState(true);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

    const mudarOpcao = () => {
        setmenuVisivel(!menuVisivel);
    };

    const atualizarCategoria = (nome) => {
      setCategoriaSelecionada(nome);
    };

  return (
    <>
    <main className='container'>
      <Button menuVisivel={menuVisivel} mudarOpcao={mudarOpcao} />
      <Navbar menuVisivel={menuVisivel} scnAtual={categoriaSelecionada} atualizarCategoria={atualizarCategoria}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/botoes' element={<Botoes/>} />
        <Route path='/cards-e-modais' element={<Cards/>} />
        <Route path='/hovers' element={<Hovers/>} />
        <Route path='/listas' element={<Listas/>} />
        <Route path='/menu' element={<Menu/>} />
      </Routes>
      <Mainbody />
    </main>
    </>
  )
}

export default App
