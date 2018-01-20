import { h, Component } from 'preact'
import { deep } from 'preact-render-spy'
import { render } from 'preact-render-to-string'
import App from './App'
import Dimlight from './Dimlight'

describe('simulate events', () => {

  it('this let us simulate things around', () => {
    let comp = <App/>
    const context = deep(comp)
    /*
    import { render,shallowRender } from 'preact-render-to-string'
    Funny thing related to setState and componentDidMount:
    console.log(shallowRender(comp)) returns tags declared, but...
    console.log(render(comp)) returns <undefined> 'cause
    componentDidMount has not run yet, simulating click runs it
     */

    expect(context.component()).toBeInstanceOf(App)

    // simulating a click is needed in order to run componentDidMount
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
    // fails: expect(context.contains(<Dimlight op={0.4}></Dimlight>)).toBeTruthy()
    // because it becomes: 0.30000000000000004
  })

})

/*
 context.find('[onClick]').simulate('click');

 expect(context.find('p').attr('style')).toBe({opacity:0.6});
 */



