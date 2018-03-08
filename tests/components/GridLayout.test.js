import React from 'react'
import { render } from 'react-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GridLayout from '../../src/components/GridLayout'

configure({ adapter: new Adapter() })
jest.mock('react-dom')

describe('GridLayout', () => {
  it('should render valid JSX', () => {
    render(<GridLayout><div /></GridLayout>, document.createElement('div'))
  })

  it('requires children elements', () => {
    const wrapper = shallow(<GridLayout><div /></GridLayout>)
    // to be or not to be? make sure to use jest "toBe" NOT enzyme/mocha "to.be" (otherwise undefined)
    expect(wrapper.find('div').exists()).toBe(true)
  })
})
