import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">

      <div className="navigation__list">
        <a className="navigation__link">Все</a>
      </div>

      <div>
        <p>Сортировка по:</p>
        <span>популярности</span>
      </div>

    </nav>
  );
}

export default Navigation;