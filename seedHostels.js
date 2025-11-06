import mongoose from "mongoose";
import dotenv from "dotenv";
import Hostel from "./models/hostelModel.js";
import connectDB from "./config/db.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const hostels = [
  {
    name: "New Nana Hostel",
    gender: "Mixed",
    description:
      "Located along LDC Road, Makerere Kagugube — single, double & triple self-contained rooms; round-the-clock security.",
    location: "Makerere Kagugube, Kampala",
    roomsAvailable: 20,
    pricePerMonth: 950000,
    pictures: [
      "https://hostels.campusbee.ug/wp-content/uploads/2022/01/IMG-20220126-WA0010.jpg",
      "https://businessfocus.co.ug/wp-content/uploads/2022/02/Nana-Hostel-Exterior-Photo-by-Fahad-Muganga.png",
    ],
    contactInfo: {
      phone: "+256700123456",
      whatsapp: "+256700123456",
      email: "info@nana-hostel.com",
    },
    facilities: {
      wifi: true,
      parking: true,
      shuttle: true,
      security: true,
      selfContained: true,
      readingRoom: true,
    },
  },
  {
    name: "Makerere Garden Courts Hostel",
    gender: "Female",
    description:
      "Female-only hostel with singles and doubles, self-contained and not self-contained, with parking and shuttle service.",
    location: "Kikoni, Kampala",
    roomsAvailable: 15,
    pricePerMonth: 700000,
    pictures: [
      "https://hostels.campusbee.ug/wp-content/uploads/2022/02/IMG_20220208_185516.jpg",
      "https://ezilet.net/wp-content/uploads/2021/09/student-accommodation-housing-chait-goli-1918291-1-scaled.jpg",
    ],
    contactInfo: {
      phone: "+256702112233",
      whatsapp: "+256702112233",
      email: "contact@gardencourts.com",
    },
    facilities: {
      wifi: true,
      parking: true,
      shuttle: false,
      security: true,
      selfContained: true,
      readingRoom: false,
    },
  },
  {
    name: "Kare Hostel",
    gender: "Mixed",
    description:
      "Mixed gender hostel in Kikoni, single & double options, some self-contained, good security.",
    location: "Kikoni, Nalikka Lane, Kampala",
    roomsAvailable: 12,
    pricePerMonth: 700000,
    pictures: [
      "https://hostels.campusbee.ug/wp-content/uploads/2022/02/IMG_20220208_182102-f93f9d90.jpg",
      "https://hostels.campusbee.ug/wp-content/uploads/2022/01/IMG_20220126_191238.jpg",
    ],
    contactInfo: {
      phone: "+256705667788",
      whatsapp: "+256705667788",
      email: "info@karehostel.com",
    },
    facilities: {
      wifi: true,
      parking: false,
      shuttle: false,
      security: true,
      selfContained: true,
      readingRoom: false,
    },
  },
  {
    name: "Olympia Hostel",
    gender: "Mixed",
    description:
      "Grade A rated hostel with self-contained singles & doubles and balconies. High-end accommodation close to campus.",
    location: "Kikoni, Kampala",
    roomsAvailable: 10,
    pricePerMonth: 1500000,
    pictures: [
      "https://businessfocus.co.ug/wp-content/uploads/2022/02/Olympia-hostel.png",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/83/15/b0/hotel-olympia.jpg",
    ],
    contactInfo: {
      phone: "+256776334455",
      whatsapp: "+256776334455",
      email: "olympia@hostelsmakerere.com",
    },
    facilities: {
      wifi: true,
      parking: true,
      shuttle: true,
      security: true,
      selfContained: true,
      readingRoom: true,
    },
  },
  {
    name: "Braetd Hostel",
    gender: "Female",
    description:
      "Female-only hostel, grade A, near Makerere campus, single & double self-contained rooms with balconies.",
    location: "Wandegeya – Katanga, Kampala",
    roomsAvailable: 8,
    pricePerMonth: 1600000,
    pictures: [
      "https://campusbee.ug/wp-content/uploads/2016/06/IMG-20160601-WA0031.jpg",
      "https://campusbee.ug/wp-content/uploads/2022/01/IMG_20220126_175537.jpg",
    ],
    contactInfo: {
      phone: "+256700987654",
      whatsapp: "+256700987654",
      email: "braetdhostel@gmail.com",
    },
    facilities: {
      wifi: true,
      parking: true,
      shuttle: false,
      security: true,
      selfContained: true,
      readingRoom: true,
    },
  },
  {
    name: "Akwata Empola Hostel",
    gender: "Mixed",
    description:
      "Mixed hostel in Kikoni, primarily singles, convenient to campus, modest pricing.",
    location: "Kikoni, Kampala",
    roomsAvailable: 18,
    pricePerMonth: 800000,
    pictures: [
      "https://hostels.campusbee.ug/wp-content/uploads/2022/01/IMG_20220126_134408.jpg",
      "https://hostels.campusbee.ug/wp-content/uploads/2022/01/IMG_20220126_175537.jpg",
    ],
    contactInfo: {
      phone: "+256703556677",
      whatsapp: "+256703556677",
      email: "akwataempola@hostel.ug",
    },
    facilities: {
      wifi: true,
      parking: false,
      shuttle: false,
      security: true,
      selfContained: false,
      readingRoom: false,
    },
  },
  {
    name: "Dream World Hostel",
    gender: "Mixed",
    description:
      "Modern mixed hostel in Kikoni; offers variety of room types with shuttle service and WiFi.",
    location: "Kikoni, Kampala",
    roomsAvailable: 20,
    pricePerMonth: 1220000,
    pictures: [
      "https://hostels.campusbee.ug/wp-content/uploads/2022/02/IMG_20220208_185516-1.jpg",
      "https://hostels.campusbee.ug/wp-content/uploads/2022/02/IMG_20220208_185516-2.jpg",
    ],
    contactInfo: {
      phone: "+256789123456",
      whatsapp: "+256789123456",
      email: "dreamworld@hostel.ug",
    },
    facilities: {
      wifi: true,
      parking: true,
      shuttle: true,
      security: true,
      selfContained: true,
      readingRoom: false,
    },
  },
  {
    name: "Lady Juliana Hostel",
    gender: "Female",
    description:
      "Female-only hostel in Kikoni; doubles only, not self-contained, shared balconies, affordable.",
    location: "Kikoni, Kampala",
    roomsAvailable: 12,
    pricePerMonth: 650000,
    pictures: [
      "https://hostels.campusbee.ug/wp-content/uploads/2022/01/IMG-20220126-WA0004.jpg",
      "https://hostels.campusbee.ug/wp-content/uploads/2022/01/IMG_20220126_152607.jpg",
    ],
    contactInfo: {
      phone: "+256701445566",
      whatsapp: "+256701445566",
      email: "ladyjuliana@hostel.ug",
    },
    facilities: {
      wifi: false,
      parking: false,
      shuttle: false,
      security: true,
      selfContained: false,
      readingRoom: false,
    },
  },
  {
    name: "Olympia Hostel",
    gender: "Male",
    description:
      "Male hostel located in Kikoni, close to campus; clean rooms, self-contained and standard doubles.",
    location: "Kikoni Zone B, Kampala",
    roomsAvailable: 16,
    pricePerMonth: 900000,
    pictures: [
      "https://campusbee.ug/wp-content/uploads/2021/02/olympus-hostel.jpg",
    ],
    contactInfo: {
      phone: "+256706990011",
      whatsapp: "+256706990011",
      email: "olympus@hostel.ug",
    },
    facilities: {
      wifi: true,
      parking: true,
      shuttle: false,
      security: true,
      selfContained: true,
      readingRoom: false,
    },
  },
  {
    name: "Prince Hostel",
    gender: "Male",
    description:
      "Budget-friendly male hostel offering doubles and singles, shared bathrooms, and reliable security.",
    location: "Kikoni Zone C, Kampala",
    roomsAvailable: 14,
    pricePerMonth: 600000,
    pictures: [
      "https://hostels.campusbee.ug/wp-content/uploads/2022/01/IMG_20220126_141829.jpg",
    ],
    contactInfo: {
      phone: "+256702441144",
      whatsapp: "+256702441144",
      email: "prince@hostel.ug",
    },
    facilities: {
      wifi: false,
      parking: false,
      shuttle: false,
      security: true,
      selfContained: false,
      readingRoom: false,
    },
  },
  {
    name: "Jubilee Hostel",
    gender: "Mixed",
    description:
      "Established hostel near Makerere Main Gate; self-contained rooms, WiFi, and ample parking space.",
    location: "Makerere Kikoni, Kampala",
    roomsAvailable: 10,
    pricePerMonth: 1100000,
    pictures: [
      "https://campusbee.ug/wp-content/uploads/2018/06/jubilee-hostel.jpg",
    ],
    contactInfo: {
      phone: "+256704555222",
      whatsapp: "+256704555222",
      email: "jubilee@hostel.ug",
    },
    facilities: {
      wifi: true,
      parking: true,
      shuttle: true,
      security: true,
      selfContained: true,
      readingRoom: true,
    },
  },

  {
    name: "Nalikka Hostel",
    gender: "Female",
    description:
      "Female hostel located in Kikoni with affordable single and double rooms.",
    location: "Kikoni Zone C",
    roomsAvailable: 14,
    pricePerMonth: 800000,
    pictures: [
      "https://campusbee.ug/wp-content/uploads/2022/03/nalikka-hostel.jpg",
    ],
    contactInfo: {
      phone: "+256780998877",
      whatsapp: "+256780998877",
      email: "nalikka@hostel.ug",
    },
    facilities: {
      wifi: true,
      parking: false,
      shuttle: false,
      security: true,
      selfContained: true,
      readingRoom: false,
    },
  },
];

const seedHostels = async () => {
  try {
    await connectDB();
    await Hostel.deleteMany();
    await Hostel.insertMany(hostels);
    console.log("✅ Hostel data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding hostel data:", error);
    process.exit(1);
  }
};

seedHostels();
