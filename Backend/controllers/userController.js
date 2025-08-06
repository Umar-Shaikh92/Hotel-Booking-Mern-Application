import User from "../models/User.js";

// CREATE
// export const createUser = async (req, res, next) => {
//   const newUser = new User(req.body);
//   try {
//     const savedUser = await newUser.save();
//     res.status(200).json(savedUser);
//   } catch (error) {
//     next(error);
//   }
// };

// UPDATE
export const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};

// DELETE
export const deleatUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been Deleted.");
  } catch (error) {
    next(error);
  }
};

// GET
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// GET ALL
export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
