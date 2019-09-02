import React from 'react';
import { shallow, mount } from 'enzyme'
import ExcuseComponent from './ExcuseComponent';

// Jest does not play nice with GSAP, 
// have to comment out animations to run tests

describe('ExcuseComponent', () => {

    it('It should render without errors', () => {
        const component = shallow(<ExcuseComponent />)
        const wrapper = component.find('.wrapper')
        expect(wrapper.length).toBe(1)
    })


    it('Ensures Generator button is clicked', () => {
      const onChangeMock = jest.fn()
      const wrapper = shallow(<ExcuseComponent onChangeMock={onChangeMock} />)
      const generateButton = wrapper.find('button')
      generateButton.simulate('click')
      const text = wrapper.find('h1.excuse').text()
      expect(text).not.toBe('Click Generate')
    })
    
    it('Checks category is set to "work" on mount', () => {
      const selectReason = jest.fn()
      const wrapper = mount(<ExcuseComponent selectReason={selectReason} />)
      const dropDownSelector = wrapper.find('select')
      
      expect(dropDownSelector.props().value).toBe('work')

    })

  })
