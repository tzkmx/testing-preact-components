# testing-preact-components
Experimenting with approaches to TDD for Preact

[![Build Status](https://travis-ci.org/tzkmx/testing-preact-components.svg?branch=master)](https://travis-ci.org/tzkmx/testing-preact-components)

A few things are worth to note about `preact-render-spy` and `renderToString` issues:

A component that declares `componentDidMount` lifecycle method:

- shallowRender(component) returns tags declared, but...
- render(component) returns undefined because has not been mounted yet
- simulating a click runs the mount, thus render returns right html

About properties in the vnodes:

- the passed properties of state are undefined
- simulating a click is needed, again to run componentDidMount

As many times floats have teached us, exact equality is dangerous, thus:

    expect(context.contains(<Dimlight op={0.3}></Dimlight>)).toBeTruthy()

Probably gonna fail, because the actual value could be something like: 0.30000000000000004

Then, it's more safe matching by _closeness_:

    expect(context.find(<Dimlight/>).attr('op')).toBeCloseTo(0.3, 2)

