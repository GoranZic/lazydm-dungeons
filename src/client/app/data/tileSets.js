const tileSets=[{setName:"castle set",  tiles:[         {
          image:"./public/images/castle/up.PNG", 
          width:5,
          height:5, 
          connectors:[{orientation:'N',distance:2},{orientation:'S',distance:2}]
        },
        {
          image:"./public/images/castle/T.png", 
          width:5,
          height:5, 
          connectors:[{orientation:'W',distance:2},{orientation:'S',distance:2},{orientation:'E',distance:2}]
        },
        {
          image:"./public/images/castle/side.png", 
          width:5,
          height:5, 
          connectors:[{orientation:'W',distance:2},{orientation:'E',distance:2}]
        },
        {
          image:"./public/images/castle/iT.png", 
          width:5,
          height:5, 
          connectors:[{orientation:'W',distance:2},{orientation:'N',distance:2},{orientation:'E',distance:2}]
        },
        {
          image:"./public/images/castle/lT.png", 
          width:5,
          height:5, 
          connectors:[{orientation:'W',distance:2},{orientation:'N',distance:2},{orientation:'S',distance:2}]
        },
        {
          image:"./public/images/castle/rT.png", 
          width:5,
          height:5, 
          connectors:[{orientation:'E',distance:2},{orientation:'N',distance:2},{orientation:'S',distance:2}]
        },
        {
          image:"./public/images/castle/stairs-S.png", 
          width:15,
          height:3, 
          connectors:[{orientation:'S',distance:1}]
        },
        {
          image:"./public/images/castle/junctionthesim.png", 
          width:5,
          height:5, 
          connectors:[{orientation:'E',distance:2},{orientation:'N',distance:2},{orientation:'S',distance:2},{orientation:'W',distance:2}]
        },
        {
          image:"./public/images/castle/room8-e.png", 
          width:6,
          height:6, 
          connectors:[{orientation:'W',distance:2}]
        },
      ]
    },
    {setName:'sewer set', tiles:[
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
        }
      ]
	}
  ];
  export default tileSets;