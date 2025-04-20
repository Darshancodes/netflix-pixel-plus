import { faker } from '@faker-js/faker';

interface Content {
  id: string;
  title: string;
  description: string;
  image: string;
  year: number;
  rating: string;
  duration: string;
  genres: string[];
}


const PEXELS_IMAGE_IDS = [
  '3945317', // Dark city
  '2873486', // Movie theater
  '2510428', // Abstract lights
  '2774556', // Cinema
  '436413',  // Theater
  '2873476', // Film projector
  '2873489', // Movie screen
  '1117132', // Sunset scene
  '2468773', // City lights
  '1738434', // Nature scene
  '1670977', // Urban scene
  '2873479', // Film reel
  '2873482', // Cinema seats
  '2873485', // Movie poster
  '2873488', // Theater interior
  '2873491', // Film camera
  '2873494', // Stage lights
  '2873497', // Audience
  '2873500', // Spotlight
  '2873503'  // Theater curtain
];

export const generateMockContent = (seed: string, count: number): Content[] => {
  // Use seed to make the content generation deterministic
  faker.seed(seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0));
  
  const ratings = ['TV-MA', 'TV-14', 'TV-PG', 'R', 'PG-13', 'PG'];
  const genres = [
    'Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Fantasy', 
    'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Western',
    'Documentary', 'Animation'
  ];
  
  return Array.from({ length: count }, (_, i) => {
    // Get a random image ID from our verified list
    const imageId = PEXELS_IMAGE_IDS[Math.floor(faker.number.float() * PEXELS_IMAGE_IDS.length)];
    
    // Choose 2-3 genres
    const contentGenres = faker.helpers.arrayElements(
      genres, 
      faker.number.int({ min: 2, max: 3 })
    );
    
    return {
      id: faker.string.uuid(),
      title: faker.word.words({ count: { min: 1, max: 3 } }),
      description: faker.lorem.paragraph(),
      image: `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&w=800`,
      year: faker.number.int({ min: 2010, max: 2024 }),
      rating: faker.helpers.arrayElement(ratings),
      duration: `${faker.number.int({ min: 1, max: 3 })}h ${faker.number.int({ min: 1, max: 59 })}m`,
      genres: contentGenres,
    };
  });
};