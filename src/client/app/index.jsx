import React from 'react';
import {render} from 'react-dom';
import {DungeonGenerator} from './dungeonGenerator.jsx';
class App extends React.Component {
	constructor(props){
		super(props);
		this.state={height:50,width:50,scale:20};
	}
	submitParams(){

		this.setState({height:this.refs.txtHeight.value,width:this.refs.txtWidth.value});
		
	}
  render () {

    return <div>
    			<input ref='txtHeight' placeholder='height' type='text'/>
    			<input ref='txtWidth' placeholder='width' type='text'/>
    			<button onClick={this.submitParams.bind(this)}>Generate Dungeon</button>
    			<div>
    				<DungeonGenerator gridHeight={this.state.width} gridWidth={this.state.height} scale={this.state.scale} />
    			</div>
           </div>;
  }
}

render(<App/>, document.getElementById('app'));
