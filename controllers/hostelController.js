import Hostel from "../models/hostelModel.js";

export const getHostels = async (req, res) => {
  try {
    const hostels = await Hostel.find();
    res.status(200).json(hostels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getHostelById = async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id);
    if (!hostel) return res.status(404).json({ message: "Hostel not found" });
    res.status(200).json(hostel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addHostel = async (req, res) => {
  try {
    const {
      name,
      gender,
      description,
      location,
      roomsAvailable,
      pricePerMonth,
      pictures,
      contactInfo,
      facilities,
    } = req.body;

    const exists = await Hostel.findOne({ name });
    if (exists)
      return res.status(400).json({ message: "Hostel already exists" });

    const hostel = await Hostel.create({
      name,
      gender,
      description,
      location,
      roomsAvailable,
      pricePerMonth,
      pictures: pictures || [],
      contactInfo: {
        phone: contactInfo?.phone || "",
        whatsapp: contactInfo?.whatsapp || "",
        email: contactInfo?.email || "",
      },
      facilities: {
        wifi: facilities?.wifi || false,
        parking: facilities?.parking || false,
        shuttle: facilities?.shuttle || false,
        security: facilities?.security ?? true,
        selfContained: facilities?.selfContained || false,
        readingRoom: facilities?.readingRoom || false,
      },
    });

    res.status(201).json(hostel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHostel = async (req, res) => {
  try {
    const {
      name,
      gender,
      description,
      location,
      roomsAvailable,
      pricePerMonth,
      pictures,
      contactInfo,
      facilities,
    } = req.body;

    const hostel = await Hostel.findById(req.params.id);
    if (!hostel) return res.status(404).json({ message: "Hostel not found" });

    hostel.name = name || hostel.name;
    hostel.gender = gender || hostel.gender;
    hostel.description = description || hostel.description;
    hostel.location = location || hostel.location;
    hostel.roomsAvailable = roomsAvailable ?? hostel.roomsAvailable;
    hostel.pricePerMonth = pricePerMonth ?? hostel.pricePerMonth;
    hostel.pictures = pictures?.length ? pictures : hostel.pictures;

    hostel.contactInfo = {
      phone: contactInfo?.phone || hostel.contactInfo.phone,
      whatsapp: contactInfo?.whatsapp || hostel.contactInfo.whatsapp,
      email: contactInfo?.email || hostel.contactInfo.email,
    };

    hostel.facilities = {
      wifi: facilities?.wifi ?? hostel.facilities.wifi,
      parking: facilities?.parking ?? hostel.facilities.parking,
      shuttle: facilities?.shuttle ?? hostel.facilities.shuttle,
      security: facilities?.security ?? hostel.facilities.security,
      selfContained:
        facilities?.selfContained ?? hostel.facilities.selfContained,
      readingRoom: facilities?.readingRoom ?? hostel.facilities.readingRoom,
    };

    const updatedHostel = await hostel.save();
    res.status(200).json(updatedHostel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteHostel = async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id);
    if (!hostel) return res.status(404).json({ message: "Hostel not found" });

    await hostel.deleteOne();
    res.status(200).json({ message: "Hostel deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
