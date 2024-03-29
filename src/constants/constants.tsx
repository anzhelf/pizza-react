export const URL = 'https://64bae2425e0670a501d6b934.mockapi.io/items';

export type SortItem = {
  name: string;
  sortProperty: string;
};

export const sortList: SortItem[] = [
  { name: 'популярности (DESC)', sortProperty: 'rating' },
  { name: 'популярности (ASC)', sortProperty: '-rating' },
  { name: 'цене (DESC)', sortProperty: 'price' },
  { name: 'цене (ASC)', sortProperty: '-price' },
  { name: 'алфавиту (DESC)', sortProperty: 'title' },
  { name: 'алфавиту (ASC)', sortProperty: '-title' },
];
