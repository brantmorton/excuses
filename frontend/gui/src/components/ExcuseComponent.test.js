import React from 'react';
import { shallow } from 'enzyme'
import ExcuseComponent from './ExcuseComponent';

// Jest does not play nice with GSAP, 
// have to comment out animations to run tests

describe('ExcuseComponent', () => {

    it('It should render without errors', () => {
        const component = shallow(<ExcuseComponent />)
        const wrapper = component.find('.wrapper')
        expect(wrapper.length).toBe(1)
    })

})

describe('ExcuseComponent', () => {

    it('Ensures Generator button is clicked', () => {
      const onChangeMock = jest.fn()
      const wrapper = shallow(<ExcuseComponent onChange={onChangeMock} />)
      const generateButton = wrapper.find('button')
      generateButton.simulate('click')
      const text = wrapper.find('h1.excuse').text()
      expect(text).not.toBe('Click Generate')
    })
  
  })