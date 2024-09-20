export type Category =
  | "Wooden Cottage"
  | "Wooden Cafe"
  | "Wooden House"
  | "Wooden Pergola/Gazebo";

export interface ProjectData {
  id: number;
  images: string[];
  title: string;
  description: string;
}

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
      Area: ["14*23 sqft", "/svg/areaIcon.svg"],
      Floors: ["1", "/svg/floorIcon.svg"],
      "Vastu complaint": ["False", "/svg/fireIcon.svg"],
      Price: ["Rs. 42,00,000/-", "/svg/priceIcon.svg"],
      "No. of bedrooms": ["1", "/svg/bedroomIcon.svg"],
      "No. of deck": ["2", "/svg/bedroomIcon.svg"],
      "No. of hall": ["0", "/svg/hallIcon.svg"],
      "No. of kitchen": ["0", "/svg/kitchenIcon.svg"],
      "Type of construction": ["Resort", "/svg/constructionIcon.svg"],
    },
    floors: {
      "1st Floor": {
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
    category: "Wooden Pergola/Gazebo",
    floorCount: 1,
    bedroomCount: 2,
    projectDetails: {
      Area: ["12*21 sqft", "/svg/areaIcon.svg"],
      Floors: ["1", "/svg/floorIcon.svg"],
      "Vastu complaint": ["False", "/svg/fireIcon.svg"],
      Price: ["Rs. 10,00,000/-", "/svg/priceIcon.svg"],
      "No. of bedrooms": ["1", "/svg/bedroomIcon.svg"],
      "No. of deck": ["1", "/svg/bedroomIcon.svg"],
      "No. of hall": ["0", "/svg/hallIcon.svg"],
      "No. of kitchen": ["0", "/svg/kitchenIcon.svg"],
      "Type of construction": ["Resort", "/svg/constructionIcon.svg"],
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
];

export const projectsData: ProjectData[] = [
  {
    id: 1,
    images: [
      "/001/3Dviews/003.jpg",
      "/001/3Dviews/004.jpg",
      "/001/3Dviews/005.jpg",
      "/001/3Dviews/006.jpg",
      "/001/3Dviews/007.jpg",
      "/001/3Dviews/008.jpg",
      "/001/3Dviews/009.jpg",
      "/001/3Dviews/010.jpg",
    ],
    title: "Our First project",
    description: "We had so much fun",
  },
  {
    id: 2,
    images: [
      "/001/3Dviews/003.jpg",
      "/001/3Dviews/004.jpg",
      "/001/3Dviews/005.jpg",
      "/001/3Dviews/006.jpg",
      "/001/3Dviews/007.jpg",
      "/001/3Dviews/008.jpg",
      "/001/3Dviews/009.jpg",
      "/001/3Dviews/010.jpg",
    ],
    title: "Our Second project",
    description: "We literally did nothing",
  },
];

export default modelsData;
