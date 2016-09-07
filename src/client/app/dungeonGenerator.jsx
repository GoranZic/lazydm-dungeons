import React from 'react';
import {render} from 'react-dom';
import {DungeonMap} from './svg/dungeonMap.jsx';

export class DungeonGenerator extends React.Component {
	constructor(props) {

		super(props);
		this.state={dungeon:[
	{height:100, width:100, image:'./public/images/up.png',rotation:0,position:[300,400]},
	{height:100, width:100, image:'./public/images/up.png',rotation:0,position:[300,300]},
	{height:100, width:100, image:'./public/images/up.png',rotation:0,position:[300,200]},
	{height:100, width:100, image:'./public/images/T.png',rotation:270,position:[300,100]},
	{height:100, width:100, image:'./public/images/up.png',rotation:90,position:[400,100]}

	]};
  	}
  	opposite(orientation){
  		switch(orientation) {

        case 'W':
            return 'E';
            break;
        case 'E':
            return 'W';
            break;
        case 'S':
            return 'N';
            break;
        case 'N':
            return 'S';
            break;
        default:
            break;
    
      } 
  	}
    convertToDungeonTile(inTile,x,y,inText=''){
       var tile={
          height:inTile.height*this.props.scale,
          width:inTile.width*this.props.scale,
          position:[x*this.props.scale,y*this.props.scale],
          image:inTile.image,
          text:inText,
          rotation:0
        }
        return tile;
    }
    randomTile(orientation){
      //this should get a random tile by orientation
      var validTiles=this.state.tiles.filter( tile => tile.connectors.filter(connector => connector.orientation==orientation).length>0);
      
      return validTiles[Math.floor(Math.random()*validTiles.length)];
      
    }
    getNewTilePosition(oldTile,newTile,x,y,connectorIndex){
      var xModifier;
      var yModifier;
      var newTileConnector;
      //get appropriate connector from the new tile
      for (var i = newTile.connectors.length - 1; i >= 0; i--) {
         if (newTile.connectors[i].orientation==this.opposite(oldTile.connectors[connectorIndex].orientation)){
            newTileConnector=newTile.connectors[i];
         }
      }

      switch(oldTile.connectors[connectorIndex].orientation){
        case 'N':
          xModifier=oldTile.connectors[connectorIndex].distance-newTileConnector.distance;
          yModifier=(-1)*newTile.height;
          break;
        case 'S':
          xModifier=oldTile.connectors[connectorIndex].distance-newTileConnector.distance;
          yModifier=oldTile.height;
          break;
        case 'W':
          xModifier=(-1)*newTile.width;
          yModifier=oldTile.connectors[connectorIndex].distance-newTileConnector.distance;
          break;
        case 'E':
          xModifier=oldTile.width;
          yModifier=oldTile.connectors[connectorIndex].distance-newTileConnector.distance;
          break;
      }
      return [x+xModifier,y+yModifier];
      
    }
    checkCollision(map,position,tile){

      for (var x =position[0]; x < position[0]+tile.width; x++) {
          if(map[x]!=undefined){
            for (var y =position[1]; y < position[1]+tile.height; y++) {
                if(map[x][y]!=undefined){
                  if(map[x][y]==1){
                  
                    return false;

                  }
                }else{
                    return false;
                  }
            };  
          }else{return false;}
        };
      return true;
    }
    mapElement(map,position,tile){    
        for (var x =position[0]; x < position[0]+tile.width; x++) {
          if(map[x]!=undefined){
            for (var y =position[1]; y < position[1]+tile.height; y++) {
                if(map[x][y]!=undefined){
                  map[x][y]=1;
                }
            };  
          }
        };
    }
    processTile(dungeon,map,tile,x,y){
 
      for (var i = tile.connectors.length - 1; i >= 0; i--) {
          //get a tile with a connector of opposite orientation.
          var rndTile=this.randomTile(this.opposite(tile.connectors[i].orientation));
          //align it
          var position = this.getNewTilePosition(tile,rndTile,x,y,i);
        if(this.checkCollision(map,position,rndTile)){
            this.mapElement(map,position,rndTile);
            dungeon.push(this.convertToDungeonTile(rndTile,position[0],position[1]));
           this.processTile(dungeon,map,rndTile,position[0],position[1]);
        }
        
      }
    }
  	generate(props){
      var map=Array(parseInt(props.gridWidth)).fill().map(() => Array(parseInt(props.gridHeight)).fill(0));

  		var dungeon=[];
      //get a start tile
      var startTile=this.state.tiles[1];
       var startX=Math.floor(props.gridWidth/2);
       var startY=Math.floor(props.gridHeight/2);
        dungeon.push(this.convertToDungeonTile(startTile,startX,startY,'start'));
        this.mapElement(map,[startX,startY],startTile);
  		  this.processTile(dungeon,map,startTile,startX,startY); 	
  		  this.setState({dungeon:dungeon});

  	}
  	componentDidMount(){
     
      this.setState({tiles:this.props.tiles},
  		function(){this.generate(this.props);});

  	}
    componentWillReceiveProps(nextProps){
      this.setState({tiles:nextProps.tiles},
      function(){this.generate(this.props);});
    }
	render(){
		return <DungeonMap height={this.props.gridHeight*this.props.scale} width={this.props.gridWidth*this.props.scale} tiles={this.state.dungeon}/>;
	}
}
DungeonGenerator.defaultProps={tiles:[
        {
          image:"./public/images/sewer/up.PNG", 
          width:4,
          height:4, 
          connectors:[{orientation:'N',distance:2},{orientation:'S',distance:2}]
        },
        {
          image:"./public/images/sewer/T.png", 
          width:4,
          height:4, 
          connectors:[{orientation:'W',distance:2},{orientation:'S',distance:2},{orientation:'E',distance:2}]
        },
        {
          image:"./public/images/sewer/side.png", 
          width:4,
          height:4, 
          connectors:[{orientation:'W',distance:2},{orientation:'E',distance:2}]
        },
        {
          image:"./public/images/sewer/iT.png", 
          width:4,
          height:4, 
          connectors:[{orientation:'W',distance:2},{orientation:'N',distance:2},{orientation:'E',distance:2}]
        },
        {
          image:"./public/images/sewer/lT.png", 
          width:4,
          height:4, 
          connectors:[{orientation:'W',distance:2},{orientation:'N',distance:2},{orientation:'S',distance:2}]
        },
        {
          image:"./public/images/sewer/rT.png", 
          width:4,
          height:4, 
          connectors:[{orientation:'E',distance:2},{orientation:'N',distance:2},{orientation:'S',distance:2}]
        },
        {
          image:"./public/images/sewer/floor.jpg", 
          width:4,
          height:8, 
          connectors:[{orientation:'E',distance:2}]
        },
      ],
      scale:20,
      gridWidth:25,
      gridHeight:25}