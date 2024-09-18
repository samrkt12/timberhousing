export type Blog = {
  id: string;
  title: string;
  summary: string;
  mainImage: string;
  publishedDate: string; // Added publishedDate
  sections: { heading: string; content: string[]; image?: string }[];
};

const blogsData: Blog[] = [
  {
    id: "1",
    title: "Wooden house manufacturers in India",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    mainImage: "/blogs/1/main.jpg",
    publishedDate: "2023-01-15",
    sections: [
      {
        heading: "Wood and moisture",
        content: [
          "Wood is the most traditional building material in our country. Since wood is used for a variety of construction purposes - frame structures, exterior and interior wall coverings, interiors, floor coverings, molds and scaffolding and more –, it is important to know how wood behaves under different conditions. Because of their specific properties, each type of wood has its typical uses.",
          "Spruce is the type of wood that is primarily used for structural timber. For carpentry, moldings and interior panels, pine wood is usually used but spruce can also be used. Hardwood, such as oak and beech, is used in floor coverings and in furniture.",
          "The material properties of the wood vary between different types of wood. Even within the same type of wood, the variations are large depending on the plant site, but also between different trees at one and the same plant site. However, even greater variation is found within one and the same tree, for example between different heights in the tree and between the marrow and the bark-near wood as well as between spring wood and summer wood in the individual annual ring. In addition, twigs and other fiber disorders, so-called features, affect the technical properties of the wood.",
          "Normal variations for the properties density, strength and stiffness within the same type of wood in undisturbed fiber structure.",
        ],
        image: "/blogs/1/img1.jpg",
      },
      {
        heading: "Wood protection",
        content: [
          "Wood is the most traditional building material in our country. Since wood is used for a variety of construction purposes – frame structures, exterior and interior wall coverings, interiors, floor coverings, molds and scaffolding and more –, it is important to know how wood behaves under different conditions. Because of their specific properties, each type of wood has its typical uses.",
          "Spruce is the type of wood that is primarily used for structural timber. For carpentry, moldings and interior panels, pine wood is usually used but spruce can also be used. Hardwood, such as oak and beech, is used in floor coverings and in furniture. for structural timber. For carpentry, moldings and interior panels, pine wood is usually used but spruce can also be used. Hardwood, such as oak and beech, is used in floor coverings and in furniture.",
          "Wood is the most traditional building material in our country. Since wood is used for a variety of construction purposes – frame structures, exterior and interior wall coverings, interiors, floor coverings, molds and scaffolding and more –, it is important to know how wood behaves under different conditions. Because of their specific properties, each type of wood has its typical uses.",
          "Spruce is the type of wood that is primarily used for structural timber. For carpentry, moldings and interior panels, pine wood is usually used but spruce can also be used. Hardwood, such as oak and beech, is used in floor coverings and in furniture.",
        ],
        image: "/blogs/1/img2.jpg",
      },
      {
        heading: "Quality and assortment",
        content: [
          "Wood is the most traditional building material in our country. Since wood is used for a variety of construction purposes – frame structures, exterior and interior wall coverings, interiors, floor coverings, molds and scaffolding and more –, it is important to know how wood behaves under different conditions. Because of their specific properties, each type of wood has its typical uses.",
          "Spruce is the type of wood that is primarily used for structural timber. For carpentry, moldings and interior panels, pine wood is usually used but spruce can also be used. Hardwood, such as oak and beech, is used in floor coverings and in furniture. for structural timber. For carpentry, moldings and interior panels, pine wood is usually used but spruce can also be used. Hardwood, such as oak and beech, is used in floor coverings and in furniture.",
          "Wood is the most traditional building material in our country. Since wood is used for a variety of construction purposes – frame structures, exterior and interior wall coverings, interiors, floor coverings, molds and scaffolding and more –, it is important to know how wood behaves under different conditions. Because of their specific properties, each type of wood has its typical uses.",
          "Spruce is the type of wood that is primarily used for structural timber. For carpentry, moldings and interior panels, pine wood is usually used but spruce can also be used. Hardwood, such as oak and beech, is used in floor coverings and in furniture.",
          "Wood is the most traditional building material in our country. Since wood is used for a variety of construction purposes – frame structures, exterior and interior wall coverings, interiors, floor coverings, molds and scaffolding and more –, it is important to know how wood behaves under different conditions. Because of their specific properties, each type of wood has its typical uses.",
          "Spruce is the type of wood that is primarily used for structural timber. For carpentry, moldings and interior panels, pine wood is usually used but spruce can also be used. Hardwood, such as oak and beech, is used in floor coverings and in furniture.",
        ],
        image: "/blogs/1/img3.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Why do people choose prefabricated homes",
    summary:
      "Wood has excellent insulation capacity, in fact its thermal conductivity coefficient is one third of that of brick and one tenth of that of concrete.",
    mainImage: "/blogs/2/main.jpg",
    publishedDate: "2023-02-10",
    sections: [
      {
        heading: "Wood moisture",
        content: ["This is the first section of blog 2."],
      },
    ],
  },
  {
    id: "3",
    title: "Sustainable construction with wood",
    summary:
      "Wood is a renewable resource, offering several environmental advantages for modern sustainable construction.",
    mainImage: "/blogs/3/main.jpg",
    publishedDate: "2023-03-05",
    sections: [
      {
        heading: "Sustainability of wood",
        content: ["This is the first section of blog 3."],
        image: "/blogs/3/img1.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "Top 5 benefits of wooden homes",
    summary:
      "Wooden homes are gaining popularity for their aesthetic appeal, energy efficiency, and quick construction.",
    mainImage: "/blogs/4/main.jpg",
    publishedDate: "2023-04-20",
    sections: [
      {
        heading: "Aesthetic appeal",
        content: [
          "This section discusses the visual appeal of wooden homes.",
          "Another sentence in this section.",
        ],
        image: "/blogs/4/img1.jpg",
      },
      {
        heading: "Energy efficiency",
        content: [
          "This section talks about the energy-saving properties of wood.",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Wooden homes vs. brick homes: A comparison",
    summary:
      "Comparing the differences between wooden and brick homes in terms of cost, efficiency, and sustainability.",
    mainImage: "/blogs/5/main.jpg",
    publishedDate: "2023-05-15",
    sections: [
      {
        heading: "Cost comparison",
        content: [
          "This section explains the cost differences between wooden and brick homes.",
        ],
        image: "/blogs/5/img1.jpg",
      },
      {
        heading: "Sustainability",
        content: [
          "This section highlights the sustainability aspects of wooden homes.",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Why choose wood for construction?",
    summary:
      "Wood offers several benefits as a construction material, including strength, durability, and environmental benefits.",
    mainImage: "/blogs/6/main.jpg",
    publishedDate: "2023-06-01",
    sections: [
      {
        heading: "Strength and durability",
        content: ["This section discusses the structural benefits of wood."],
        image: "/blogs/6/img1.jpg",
      },
    ],
  },
];

export default blogsData;
