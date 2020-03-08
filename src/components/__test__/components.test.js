import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoForm from '../todo/todo-connected.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Our components are functioning', () => {
  it('Form renders', () => {
    let deck = mount(<TodoForm />);
    let h2 = deck.find('h2');
    expect(h2.exists()).toBeTruthy();
  });

  it('Our components are functioning', () => {
    let deck = mount(<TodoForm />);
    let input = deck.find('input');
    expect(input.exists()).toBeTruthy();
  });

  it('Our components are functioning', () => {
    let deck = mount(<TodoForm />);
    let span = deck.find('span');
    expect(span.exists()).toBeTruthy();
  });
});
