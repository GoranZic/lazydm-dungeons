import React, {PropTypes } from 'react';
import {render} from 'react-dom';
import {DungeonGenerator} from './dungeonGenerator.jsx';
import setUpStore from './store/setUpStore';
var store =setUpStore(); 
class App extends React.Component {
	constructor(props){
		super(props);
		this.state={height:40,width:40,scale:20};
	}
	submitParams(){
    
    var tileSet =this.props.store.getState().tiles.filter(item => item.setName==this.refs.tileSet.value)[0];

		this.setState({
                    height:this.refs.txtHeight.value,
                    width:this.refs.txtWidth.value,
                    tiles:tileSet.tiles
                  });
		
	}
  render () {

    return <div>
    			<input ref='txtHeight' placeholder='height' type='text'/>
    			<input ref='txtWidth' placeholder='width' type='text'/>
          <select name="tileSet" ref='tileSet'>
            {this.props.store.getState().tiles.map(item=>  <option value={item.setName}>{item.setName}</option>)}
          </select>
    			<button onClick={this.submitParams.bind(this)}>Generate Dungeon</button>
    			<div>
    				<DungeonGenerator tiles={this.state.tiles} gridHeight={this.state.width} gridWidth={this.state.height} scale={this.state.scale} />
    			</div>
           </div>;
  }
}
App.propTypes = {
  store: PropTypes.object.isRequired
}
render(<App store={store} />, document.getElementById('app'));
