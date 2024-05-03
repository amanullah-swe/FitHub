import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { Request, Response, NextFunction } from "express";


interface DecodedJwtPayload {
    userId: string;
    // Other claims you might be extracting from the token (e.g., roles)
}

// Middleware function to check authentication
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    try {
        // Get the token from the cookie (assuming you're using cookie-parser)
        const token: string = req.cookies.token
        if (!token) return res.status(401).json({ message: "token expired, sing in again" })
        // Verify the token using your secret key
        const decoded: any = jwt.verify(token, 'your-secret-key');
        // If the token is valid, set the user ID in the request object
        req.body.userId = decoded.userId;
        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.log(error);
        // If the token is invalid or missing, send a 401 Unauthorized response
        return res.status(401).json({ message: 'Authentication failed' });
    }
};
