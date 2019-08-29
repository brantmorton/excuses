import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



test('add', () => {
  expect(1 + 2).toBe(3)
})

describe('ExcuseComponent', () => {
  it('Ensures Generator button is clicked', () => {
    const wrapper = shallow(<App />)
    const generateButton = wrapper.find('button.btn')
    generateButton.simulate('click')
    const text = wrapper.find('h1').text()
    expect(text).not.toBe('Generate')
  })
})
