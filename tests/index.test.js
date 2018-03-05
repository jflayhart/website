import React from 'react'
import { render } from 'react-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { App } from '../src/index'

configure({ adapter: new Adapter() })
jest.mock('react-dom')

describe('index', () => {
  it('should render valid JSX', () => {
    render(<App />, document.createElement('div'))
  })

  it('should implement material theme provider', () => {
    const wrapper = shallow(<App />)
    // to be or not to be? make sure to use jest "toBe" NOT enzyme/mocha "to.be" (otherwise undefined)
    expect(wrapper.find('MuiThemeProvider').exists()).toBe(true)
  })
})
