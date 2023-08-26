import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import { URL } from './constants/constants';

function App() {
  //узнаем адрес странички /
  const pathname = window.location.pathname;
  const [items, setItems] = React.useState([]);
  //для отображения скелетона во время загрузки
  const [isLoading, setIsLoadig] = React.useState(true);

  React.useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      })
      .catch((e) => console.error('error:', e))
      .finally(() => {
        setIsLoadig(false);
      });
    //чтоб при переходе по ссылке делался скролл вверх
    window.scroll(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<Home isLoading={isLoading} cards={items} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

//data card
//Skeleton
