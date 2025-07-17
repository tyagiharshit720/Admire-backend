import jwt from 'jsonwebtoken';

export const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ msg: 'Unauthorized: No token', success: false });
    }

    const authorized = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to req
    req.userId = authorized.id;
    req.userRole = authorized.role || null; // role will be undefined/null for normal users if not included

    next();
  } catch (error) {
    console.error(`Auth middleware -> ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};
export const authorizeAdmin = (req, res, next) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ msg: 'Access denied. Admins only.', success: false });
  }
  
  next();
};
