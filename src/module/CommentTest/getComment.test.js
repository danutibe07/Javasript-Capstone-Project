/**
 * @jest-environment jsdom
 */

const mockDataResponse = [
  {
    create_date: '22_March_2022',
    username: 'Chris',
    comment: 'I dont like this serie',
  },
];
function getComment(name) {
  mockDataResponse.forEach((comment) => {
    if (comment.username === name) {
      const li = document.createElement('li');
      li.innerHTML = `
          <p>${comment.creation_date}</p>
          <h3>${comment.username}:</h3>
          <p>${comment.comment}</p>
          `;
    }
    return comment;
  });
}

describe('Comment', () => {
  test('renderComment', () => {
    getComment('Chris');
    mockDataResponse.forEach((item) => {
      expect(item.comment).toBe('I dont like this serie');
    });
  });
});
