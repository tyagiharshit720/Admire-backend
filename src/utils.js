import jwt from 'jsonwebtoken';

export const generateToken = (userID, role = null) => {
  const payload = { id: userID };
  if (role) {
    payload.role = role; // Include role only if provided
  }

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// export const generateToeknAdmin = (userID, role) => {
//   return jwt.sign({ id: userID, role: role }, process.env, JWT_SECRET, {
//     expiresIn: '7d',
//   });
// };
