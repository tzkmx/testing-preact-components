import { h, Component } from 'preact'
import { deep } from 'preact-render-spy'
import { render } from 'preact-render-to-string'
import App from './App'
import Dimlight from './Dimlight'

describe('simulate events', () => {

  it('this let us simulate things around', () => {
    let comp = <App/>
    const context = deep(comp)

    expect(context.component()).toBeInstanceOf(App)

    context.find('p').at(0).simulate('click')
    expect(render(comp)).toMatch(/Yeah baby/)
    expect(context.contains(<Dimlight op={0.5}></Dimlight>)).toBeTruthy()

    context.find('h1').simulate('click')

    expect(context.find(<Dimlight/>).attr('op')).toBeCloseTo(0.6, 2)

    context.find('h1').simulate('click')

    expect(context.find(<Dimlight/>).attr('op')).toBeCloseTo(0.7, 2)

    context.find('p').at(1).simulate('click')
    context.find('p').at(1).simulate('click')
    context.find('p').at(1).simulate('click')
    context.find('p').at(1).simulate('click')

    expect(context.find(<Dimlight/>).attr('op')).toBeCloseTo(0.3, 2)
  })

})




