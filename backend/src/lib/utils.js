import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevents XSS attacks cross-site scripting attacks
    sameSite: "none", //CSRF attacks cross-site reques forgery attacks
    secure: "true",
  });
  return token;
};
