import React from 'react';
import { AnimalContextProvider } from './Contexts/AnimalContext';
import { SearchParams } from './Search/SearchParams';
import { Open } from './Open';
import { Footer } from './Footer';
import { Header } from './Header';
import { Search } from './Search/Search';
import './App.css';
import { Portfolio } from './Portfolio';

const App = (props) => {
  return (
    <div>
      <Header />
      <Open />
      <AnimalContextProvider>
        <Search />
        <Portfolio />
      </AnimalContextProvider>
      <Footer />
    </div>
  );
};

export default App;
