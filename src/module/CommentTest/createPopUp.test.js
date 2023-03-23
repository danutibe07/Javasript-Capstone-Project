const mockData = [
  {
    id: 1,
    name: 'Show 1',
    image: { medium: 'https://example.com/image1.jpg' },
  },
  {
    id: 2,
    name: 'Show 2',
    image: { medium: 'https://example.com/image2.jpg' },
  },
];

function createPopUp(id) {
  const item = mockData.find((item) => item.id === id);
  return item;
}

describe('CreatePopUP', () => {
  test('TestPopUp', () => {
    const result = createPopUp(2);
    expect(result.name).toBe('Show 2');
  });
});
