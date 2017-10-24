/** @jsx h */

import { h, Component } from 'preact';

export default class Dimlight extends Component {
    render({op}) {
        let style = {opacity:op};
        return (
            <p style={style}>Yeah baby</p>
        )
    }
}
