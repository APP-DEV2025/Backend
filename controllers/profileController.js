import Profile from "../models/profileModel.js";

export const createOrUpdateProfile = async (req, res) => {
  try {
    const { name, gender, about, pictures, contactInfo } = req.body;

    let profile = await Profile.findOne({ user: req.user._id });

    if (profile) {
      profile.name = name || profile.name;
      profile.gender = gender || profile.gender;
      profile.about = about || profile.about;
      profile.pictures = pictures || profile.pictures;
      profile.contactInfo = contactInfo || profile.contactInfo;

      const updatedProfile = await profile.save();
      return res.json(updatedProfile);
    }

    const newProfile = await Profile.create({
      user: req.user._id,
      name,
      gender,
      about,
      pictures,
      contactInfo,
    });

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
