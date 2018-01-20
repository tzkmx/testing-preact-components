/** @jsx h */
import './style';
import { h, Component, render } from 'preact';

const isDev = process.env.NODE_ENV === 'development';


if(!isDev) {
    render(<App/>, document.body, document.body.children[0]);
}
