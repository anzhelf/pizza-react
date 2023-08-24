import React from 'react';
import ContentLoader from 'react-content-loader';
import '../PizzaBlock/PizzaBlock.scss';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="142" cy="98" r="98" />
    <rect x="0" y="216" rx="10" ry="10" width="280" height="29" />
    <rect x="0" y="263" rx="10" ry="10" width="280" height="85" />
    <rect x="0" y="370" rx="15" ry="15" width="113" height="40" />
    <rect x="165" y="370" rx="15" ry="15" width="113" height="40" />
  </ContentLoader>
);

export default Skeleton;
