import { PZProductI } from "@/types/product"

export const data: PZProductI[] = [
  {
    id: 100,
    slug: "61c82d33-9ce0-495b-8a18-c4ce5d340272",
    name: "Everday Hoodie",
    description:
      "A must-have addition to your Spring/Summer wardrobe. Crafted from soft, lightweight fabric, this hoodie is perfect for those cool mornings and breezy evenings. With a classic design and versatile style, it pairs effortlessly with jeans, shorts, or joggers for a laid-back yet stylish look.",
    info: [
      "Lycra fabric",
      "Relaxed fit",
      "Versatile style",
      "Ribbed cuffs and hem",
      "Perfect for wearing as loungewear or layering",
    ],
    image: [
        "/product-images/hoodie_blue2.jpg",
        "/product-images/hoodie_brown1.jpg",
      "/product-images/hoodie_black1.jpg",
      "/product-images/hoodie_black2.jpg",
      "/product-images/hoodie_blue4.jpg",
    ],
    size_chart: "/hoodie.png",
    price: 2500,
    available_stock: 136,
    collectionId: 5,
    categories: [
      {
        id: 1,
        name: "Retro_Collection",
      },
    ],
    stock: [
      {
        color: "Eeerie black",
        size: "M",
        stockQuantity: 8,
      },
      {
        color: "Santorini blue",
        size: "L",
        stockQuantity: 15,
      },
      {
        color: "Reseda Green",
        size: "XL",
        stockQuantity: 27,
      },
      {
        color: "Eerie black",
        size: "M",
        stockQuantity: 27,
      },
      {
        color: "santorini blue",
        size: "L",
        stockQuantity: 6,
      },
      {
        color: "Reseda Green",
        size: "XL",
        stockQuantity: 25,
      },
      {
        color: "Eerie black",
        size: "M",
        stockQuantity: 28,
      },
    ],
  },
  {
    id: 98,
    slug: "0ee0a46a-3761-48dd-88c0-7a0e9bee7613",
    name: "Club 2024 Polo",
    description:
      "A versatile essential for your Spring/Summer wardrobe. Crafted from lightweight, breathable fabric, this classic piece offers both style and comfort. With its timeless design and long sleeves for added sun protection, it's perfect for transitioning between seasons and staying cool on warmer days. Elevate your casual look effortlessly with this must-have staple.",
    info: [
        "Light ,warm and comfortable Polyester cotton fabric",
        "Logo embroidered on chest",
        "Half Botton for easy temperature regulation",
        "Suitable for sports or everyday wear", 
    ],
    size_chart: "/polo.png",
    image: [
        "/product-images/white.jpg",
      "/product-images/black1.jpg",
      "/product-images/black2.jpg",
      "/product-images/white2.jpg",
      "/product-images/black3.jpg",
    ],
    price: 1800,
    available_stock: 106,
    collectionId: 5,
    categories: [
      {
        id: 1,
        name: "Retro_Collection",
      },
    ],
    stock: [
      {
        color: "Pure white",
        size: "M",
        stockQuantity: 0,
      },
      {
        color: "Pure black",
        size: "L",
        stockQuantity: 7,
      },
      {
        color: "Pure white",
        size: "XL",
        stockQuantity: 8,
      },
      {
        color: "Pure black",
        size: "M",
        stockQuantity: 1,
      },
      {
        color: "Pure white",
        size: "L",
        stockQuantity: 23,
      },
      {
        color: "Pure black",
        size: "XL",
        stockQuantity: 20,
      },
      {
        color: "Pure white",
        size: "M",
        stockQuantity: 26,
      },
    ],
  },
  {
    id: 97,
    slug: "051d5d0c-e22f-47c7-b0e3-7df658789226",
    name: "Retro Wind Breaker",
    description:
      "A stylish addition to your Spring/Summer wardrobe. Inspired by vintage designs, this windbreaker combines nostalgia with modern functionality. Crafted from lightweight, water-resistant fabric, it's perfect for those unpredictable weather days. With its vibrant colors and retro details, it adds a pop of personality to any outfit. Whether you're hitting the streets or exploring the great outdoors, stay cool and protected in our Retro Windbreaker. Upgrade your spring style with this timeless piece today!",
    info: [
      "Rubberised fabric",
      "Light weight",
      "Water resistant",
      "Adjustable Drawstrings",
      "Half zip chain for easy temperature regulation",
      "Perfect for Indoor/Outdoor",
    ],
    size_chart: "/windbreaker.png",
    image: [
      "/product-images/blue.jpg",
      "/product-images/blue2.jpg",
      "/product-images/green.jpg",
      "/product-images/green2.jpg",
      "/product-images/blue3.jpg",
    ],
    categories: [
      {
        id: 1,
        name: "Retro_Collection",
      },
    ],
    price: 2250,
    available_stock: 82,
    collectionId: 5,
    stock: [
      {
        color: "Yale blue",
        size: "M",
        stockQuantity: 6,
      },
      {
        color: "Pine green",
        size: "L",
        stockQuantity: 0,
      },
      {
        color: "Yale blue",
        size: "XL",
        stockQuantity: 1,
      },
      {
        color: "Pine green",
        size: "M",
        stockQuantity: 30,
      },
      {
        color: "Yale blue",
        size: "L",
        stockQuantity: 27,
      },
      {
        color: "Pine green",
        size: "XL",
        stockQuantity: 3,
      },
      {
        color: "Yale blue",
        size: "M",
        stockQuantity: 15,
      },
    ],
  },
]
