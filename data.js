var APP_DATA = {
  "scenes": [
    {
      "id": "0-shot-panoramic-composition-living-room-1",
      "name": "shot-panoramic-composition-living-room (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.18085883247317,
          "pitch": -0.05494031800113319,
          "rotation": 0,
          "target": "1-shot-panoramic-composition-bedroom"
        },
        {
          "yaw": 0.7047438443728247,
          "pitch": -0.009566080310108305,
          "rotation": 0,
          "target": "2-shot-panoramic-composition-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-shot-panoramic-composition-bedroom",
      "name": "shot-panoramic-composition-bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1483,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-shot-panoramic-composition-living-room",
      "name": "shot-panoramic-composition-living-room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -2.4978809636151755,
        "pitch": 0.20339956155523353,
        "fov": 1.4970896812780956
      },
      "linkHotspots": [
        {
          "yaw": -2.345222551104399,
          "pitch": 0.1955706206964507,
          "rotation": 0,
          "target": "0-shot-panoramic-composition-living-room-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6956203591559724,
          "pitch": 0.00010486134251586066,
          "title": "Title",
          "text": "จุดชมวิว"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
