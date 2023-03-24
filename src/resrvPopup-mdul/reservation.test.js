/**
 * @jest-environment jsdom
 */

const mockReservation = [
  { username: 'user1', date_start: '2022-01-01', date_end: '2022-01-02' },
  { username: 'user2', date_start: '2022-01-02', date_end: '2022-01-03' },
  { username: 'user3', date_start: '2022-01-03', date_end: '2022-01-04' },
];

function counterReservation() {
  return mockReservation.length;
}

describe('renderPopup', () => {
  test('checking counter for reservations', () => {
    expect(counterReservation()).toBe(3);
  });
});
