const mockData = [
  {
    id: 1,
    url: 'https://www.tvmaze.com/shows/248/transporter-the-series',
    name: 'Transporter: The Series',
  },

  {
    id: 2,
    url: 'https://www.tvmaze.com/shows/239/anger-management',
    name: 'Anger Management',
  },

  {
    id: 2,
    url: 'https://www.tvmaze.com/shows/244/strange-empire',
    name: 'Strange Empire',
  },
];

describe('Testing the API Request and response', () => {
  test('Retrieving data from the API', async () => {
    expect(mockData[2].id).toBe(2);
  });
});
