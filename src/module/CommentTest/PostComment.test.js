/**
 * @jest-environment jsdom
 */

const todoArr = [];
const input = document.createElement('input');
input.value = 'Chris';
const message = document.createElement('textarea');
message.value = 'I hate this one';

const obj = {
  item_id: 'item1',
  username: input.value,
  comment: message.value,
};

function createComment() {
  if (input.value.length > 0 && message.value.length > 0) {
    for (let i = 0; i < todoArr.length; i += 1) {
      todoArr[i].index = i + 1;
    }
    todoArr.push(obj);
  }
}

describe('createComment', () => {
  test('createComment', () => {
    createComment();
    expect(todoArr.length).toBe(1);
  });
});
