import './style';
import { Component } from 'preact';
import Dimlight from './components/Dimlight';

export default class App extends Component {

	componentDidMount() {
		this.setState({op:0.5});
	}

	moreOpacity() {
		let op = this.state.op;
		this.setState({op:op + 0.1})
	}
	lessOpacity()  {
		let op = this.state.op;
		this.setState({op:op - 0.1})
	}

	render(props, {op}) {
		return (
			<div>
				<h1 onClick={this.moreOpacity.bind(this)}>Hello, World!</h1>
				<Dimlight op={op}/>
				<p onClick={this.lessOpacity.bind(this)}>Test</p>
			</div>
		);
	}
}
