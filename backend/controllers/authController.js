const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    if (!email || !name) {
      throw new Error("Email or Name is missing");
    }
    const user = await User.findOne({ email });

    if (user) {
      res.status(200).json({
        status: "success",
        success: true,
        id: user.id,
        email: user.email,
        name: user.name,
        token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN,
        }),
      });
    } else {
      const newUser = await User.create({ email, name });
      if (newUser) {
        res.status(200).json({
          status: "success",
          success: true,
          data: {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            token: jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
              expiresIn: process.env.JWT_EXPIRES_IN,
            }),
          },
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      success: false,
      message: error.message,
      data: {},
    });
  }
};
