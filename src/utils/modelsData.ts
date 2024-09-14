export type Category =
  | "Wooden Cottage"
  | "Wooden Villa"
  | "Wooden House"
  | "Wooden Gazebo"
  | "Wooden Pergola"
  | "Terrace Wooden House";

export interface Floor {
  images: string[];
  totalArea: number;
  features: string[];
}

export interface ModelData {
  id: string;
  name: string;
  category: Category;
  floorCount: number;
  bedroomCount: number;
  projectDetails: {
    [key: string]: [string, string];
  };
  floors: {
    [key: string]: Floor;
  };
  model3DPath: string;
  screenshot3D: string;
  model3DImages: string[];
  modelImagesWithLand: string[];
  walkthroughVideo: string;
  grossLivingArea: number;
  totalArea: number;
  description: string;
}

const modelsData: ModelData[] = [
  {
    id: "1",
    name: "Glass House 70 - Log Cabin",
    category: "Wooden Cottage",
    floorCount: 1,
    bedroomCount: 1,
    projectDetails: {
      Area: ["14*23 sqft", "/areaIcon.png"],
      Floors: ["1", "/floorIcon.png"],
      "Vastu complaint": ["False", "/fireIcon.png"],
      Price: ["Rs. 42,00,000/-", "/priceIcon.png"],
      "No. of bedrooms": ["1", "/bedroomIcon.png"],
      "No. of deck": ["2", "/bedroomIcon.png"],
      "No. of hall": ["0", "/hallIcon.png"],
      "No. of kitchen": ["0", "/kitchenIcon.png"],
      "Type of construction": ["Resort", "/constructionIcon.png"],
    },
    floors: {
      "1st Floor": {
        images: ["/temp.png", "/003/Ele.jpg"],
        totalArea: 322,
        features: ["Bedroom", "Front deck", "Bathroom", "Back side deck"],
      },
      "2nd Floor": {
        images: ["/003/LA.jpg", "/003/Ele.jpg"],
        totalArea: 322,
        features: ["Bedroom", "Front deck", "Bathroom", "Back side deck"],
      },
    },
    model3DPath: "/003/003.glb",
    screenshot3D: "/crop1.jpg",
    model3DImages: [
      "/003/3Dviews/1.jpg",
      "/003/3Dviews/2.jpg",
      "/003/3Dviews/3.jpg",
      "/003/3Dviews/4.jpg",
      "/003/3Dviews/5.jpg",
    ],
    modelImagesWithLand: [
      "/003/3Dviews/4.jpg",
      "/003/3Dviewswithland/1.jpg",
      "/003/3Dviewswithland/1.jpg",
      "/003/3Dviewswithland/1.jpg",
    ],
    walkthroughVideo: "/003/walkthrough.mp4",
    grossLivingArea: 69,
    totalArea: 322,
    description: "Holiday home 1 floor",
  },
  {
    id: "2",
    name: "Three houses - Very good",
    category: "Wooden Villa",
    floorCount: 1,
    bedroomCount: 2,
    projectDetails: {
      Area: ["12*21 sqft", "/areaIcon.png"],
      Floors: ["1", "/floorIcon.png"],
      "Vastu complaint": ["False", "/fireIcon.png"],
      Price: ["Rs. 10,00,000/-", "/priceIcon.png"],
      "No. of bedrooms": ["1", "/bedroomIcon.png"],
      "No. of deck": ["1", "/bedroomIcon.png"],
      "No. of hall": ["0", "/hallIcon.png"],
      "No. of kitchen": ["0", "/kitchenIcon.png"],
      "Type of construction": ["Resort", "/constructionIcon.png"],
    },
    floors: {
      "1st Floor": {
        images: ["/001/LA.jpg", "/001/Ele.jpg"],
        totalArea: 252,
        features: ["Bedroom", "Front deck", "Bathroom", "Back side deck"],
      },
    },
    model3DPath: "/001/001.glb",
    screenshot3D: "/001/3Dviewswithland/003.jpg",
    model3DImages: [
      "/001/3Dviews/003.jpg",
      "/001/3Dviews/004.jpg",
      "/001/3Dviews/005.jpg",
      "/001/3Dviews/006.jpg",
      "/001/3Dviews/007.jpg",
      "/001/3Dviews/008.jpg",
      "/001/3Dviews/009.jpg",
      "/001/3Dviews/010.jpg",
    ],
    modelImagesWithLand: [
      "/001/3Dviewswithland/003.jpg",
      "/001/3Dviewswithland/004.jpg",
      "/001/3Dviewswithland/005.jpg",
      "/001/3Dviewswithland/006.jpg",
    ],
    walkthroughVideo: "/001/walkthrough1.mp4",
    grossLivingArea: 252,
    totalArea: 294,
    description: "Holiday home 1 floor",
  },
  {
    id: "3",
    name: "30 - Log ",
    category: "Wooden Cottage",
    floorCount: 2,
    bedroomCount: 2,
    projectDetails: {
      Area: ["14*23 sqft", "/areaIcon.png"],
      Floors: ["1", "/floorIcon.png"],
      "Vastu complaint": ["False", "/fireIcon.png"],
      Price: ["Rs. 42,00,000/-", "/priceIcon.png"],
      "No. of bedrooms": ["1", "/bedroomIcon.png"],
      "No. of deck": ["2", "/bedroomIcon.png"],
      "No. of hall": ["0", "/hallIcon.png"],
      "No. of kitchen": ["0", "/kitchenIcon.png"],
      "Type of construction": ["Resort", "/constructionIcon.png"],
    },
    floors: {
      "1st Floor": {
        images: ["/temp.png", "/003/Ele.jpg"],
        totalArea: 322,
        features: ["Bedroom", "Front deck", "Bathroom", "Back side deck"],
      },
      "2nd Floor": {
        images: ["/003/LA.jpg", "/003/Ele.jpg"],
        totalArea: 322,
        features: ["Bedroom", "Front deck", "Bathroom", "Back side deck"],
      },
    },
    model3DPath: "/sample.glb",
    screenshot3D: "/crop1.jpg",
    model3DImages: [
      "/003/3Dviews/1.jpg",
      "/003/3Dviews/2.jpg",
      "/003/3Dviews/3.jpg",
      "/003/3Dviews/4.jpg",
      "/003/3Dviews/5.jpg",
    ],
    modelImagesWithLand: [
      "/003/3Dviews/4.jpg",
      "/003/3Dviewswithland/1.jpg",
      "/003/3Dviewswithland/1.jpg",
      "/003/3Dviewswithland/1.jpg",
    ],
    walkthroughVideo: "/003/walkthrough.mp4",
    grossLivingArea: 69,
    totalArea: 322,
    description: "Holiday home 1 floor",
  },
  {
    id: "4",
    name: "Wooden House 20 - Log Cabin",
    category: "Wooden Villa",
    floorCount: 1.5,
    bedroomCount: 1,
    projectDetails: {
      Area: ["14*23 sqft", "/areaIcon.png"],
      Floors: ["1", "/floorIcon.png"],
      "Vastu complaint": ["False", "/fireIcon.png"],
      Price: ["Rs. 42,00,000/-", "/priceIcon.png"],
      "No. of bedrooms": ["1", "/bedroomIcon.png"],
      "No. of deck": ["2", "/bedroomIcon.png"],
      "No. of hall": ["0", "/hallIcon.png"],
    },
    floors: {
      "1st Floor": {
        images: ["/003/LA.jpg", "/003/Ele.jpg"],
        totalArea: 450,
        features: [
          "Bedroom",
          "Front deck",
          "Bathroom",
          "Back side deck",
          "Hall",
        ],
      },
    },
    model3DPath: "/models/villa.gltf",
    screenshot3D: "/003/3Dviewswithland/screenshot.jpeg",
    model3DImages: [
      "/003/3Dviews/1.jpg",
      "/003/3Dviews/2.jpg",
      "/003/3Dviews/3.jpg",
      "/003/3Dviews/4.jpg",
      "/003/3Dviews/5.jpg",
    ],
    modelImagesWithLand: [
      "/003/3Dviewswithland/1.jpg",
      "/003/3Dviewswithland/1.jpg",
      "/003/3Dviewswithland/1.jpg",
      "/003/3Dviewswithland/1.jpg",
    ],
    walkthroughVideo: "/003/walkthrough.mp4",
    grossLivingArea: 69,
    totalArea: 322,
    description: "Holiday home 1 floor",
  },
  {
    id: "5",
    name: "Glass 22 Cabin",
    category: "Wooden Cottage",
    floorCount: 1,
    bedroomCount: 1,
    projectDetails: {
      Area: ["14*23 sqft", "/areaIcon.png"],
      Floors: ["1", "/floorIcon.png"],
      "Vastu complaint": ["False", "/fireIcon.png"],
      Price: ["Rs. 42,00,000/-", "/priceIcon.png"],
      "No. of bedrooms": ["1", "/bedroomIcon.png"],
      "No. of deck": ["2", "/bedroomIcon.png"],
      "No. of hall": ["0", "/hallIcon.png"],
      "No. of kitchen": ["0", "/kitchenIcon.png"],
      "Type of construction": ["Resort", "/constructionIcon.png"],
    },
    floors: {
      "1st Floor": {
        images: ["/temp.png", "/003/Ele.jpg"],
        totalArea: 322,
        features: ["Bedroom", "Front deck", "Bathroom", "Back side deck"],
      },
      "2nd Floor": {
        images: ["/003/LA.jpg", "/003/Ele.jpg"],
        totalArea: 322,
        features: ["Bedroom", "Front deck", "Bathroom", "Back side deck"],
      },
    },
    model3DPath: "/models/villa.gltf",
    screenshot3D: "/crop1.jpg",
    model3DImages: [
      "/003/3Dviews/1.jpg",
      "/003/3Dviews/2.jpg",
      "/003/3Dviews/3.jpg",
      "/003/3Dviews/4.jpg",
      "/003/3Dviews/5.jpg",
    ],
    modelImagesWithLand: [
      "/003/3Dviews/4.jpg",
      "/003/3Dviewswithland/1.jpg",
      "/003/3Dviewswithland/1.jpg",
      "/003/3Dviewswithland/1.jpg",
    ],
    walkthroughVideo: "/003/walkthrough.mp4",
    grossLivingArea: 69,
    totalArea: 322,
    description: "Holiday home 1 floor",
  },
  {
    id: "6",
    name: "House 1 - Log Cabin",
    category: "Wooden Villa",
    floorCount: 2,
    bedroomCount: 3,
    projectDetails: {
      Area: ["14*23 sqft", "/areaIcon.png"],
      Floors: ["1", "/floorIcon.png"],
      "Vastu complaint": ["False", "/fireIcon.png"],
      Price: ["Rs. 42,00,000/-", "/priceIcon.png"],
      "No. of bedrooms": ["1", "/bedroomIcon.png"],
      "No. of deck": ["2", "/bedroomIcon.png"],
      "No. of hall": ["0", "/hallIcon.png"],
    },
    floors: {
      "1st Floor": {
        images: ["/003/LA.jpg", "/003/Ele.jpg"],
        totalArea: 450,
        features: [
          "Bedroom",
          "Front deck",
          "Bathroom",
          "Back side deck",
          "Hall",
        ],
      },
    },
    model3DPath: "/models/villa.gltf",
    screenshot3D: "/003/3Dviewswithland/screenshot.jpeg",
    model3DImages: [
      "/003/3Dviews/1.jpg",
      "/003/3Dviews/2.jpg",
      "/003/3Dviews/3.jpg",
      "/003/3Dviews/4.jpg",
      "/003/3Dviews/5.jpg",
    ],
    modelImagesWithLand: [
      "/003/3Dviewswithland/1.jpg",
      "/003/3Dviewswithland/1.jpg",
      "/003/3Dviewswithland/1.jpg",
      "/003/3Dviewswithland/1.jpg",
    ],
    walkthroughVideo: "/003/walkthrough.mp4",
    grossLivingArea: 69,
    totalArea: 322,
    description: "Holiday home 1 floor",
  },
];

export default modelsData;
