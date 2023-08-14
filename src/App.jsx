import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  //узнаем адрес странички /
  const pathname = window.location.pathname;
  const [items, setItems] = React.useState([]);
  //для отображения скелетона во время загрузки
  const [isLoading, setIsLoadig] = React.useState(true);
  const URL = 'https://64bae2425e0670a501d6b934.mockapi.io/items';

  React.useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      })
      .catch((e) => console.error('error:', e))
      .finally(() => {
        setIsLoadig(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        {/* <Content /> */}
        {/* {items.map((obj) => isLoading ? <h1>Skeleton</h1> : <h2>pizza</h2>)} */}
      </div>
    </div>
  );
}

export default App;

//data card
//Skeleton
