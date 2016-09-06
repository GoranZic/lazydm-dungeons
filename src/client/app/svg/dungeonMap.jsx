import React from 'react';
import {render} from 'react-dom';

export class DungeonMap extends React.Component {
	constructor(props) {
	    super(props);
  	}
  eachTile(tile,i){
  	var textYPosition=tile.position[1]+tile.height/2;
  	var rotate="rotate("+tile.rotation+","+(tile.position[0]+tile.width/2)+","+(tile.position[1]+tile.height/2)+")";
  	return <g><image key={i} xlinkHref={tile.image} x={tile.position[0]} y={tile.position[1]} width={tile.width} height={tile.height} transform={rotate}/>
  	 		<text x={tile.position[0]} y={textYPosition} font-family="Verdana" font-size="55" fill="red">
    			{tile.text}
			  </text>
  			</g>;	
  }
  render () {
    return <svg height={this.props.height} width={this.props.width} >{ this.props.tiles.map(this.eachTile)}</svg>;
  }
}

DungeonMap.defaultProps={height:600, width:600,tiles:[
	{height:100, width:100, image:'./public/images/up.png',rotation:0,position:[300,400]},
	{height:100, width:100, image:'./public/images/up.png',rotation:0,position:[300,300]},
	{height:100, width:100, image:'./public/images/up.png',rotation:0,position:[300,200]},
	{height:100, width:100, image:'./public/images/T.png',rotation:0,position:[300,100]},
	{height:100, width:100, image:'./public/images/up.png',rotation:90,position:[400,100]}

	]};
