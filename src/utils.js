import jwt from 'jsonwebtoken';

export const generateToke = (userID) => {
  return jwt.sign({id:userID}, process.env.JWT_SECRET, { expiresIn: '7d' });
};
