"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Middleware function to check authentication
const authMiddleware = (req, res, next) => {
    try {
        // Get the token from the cookie (assuming you're using cookie-parser)
        const token = req.cookies.token;
        if (!token)
            return res.status(401).json({ message: "token is measing login agian" });
        // Verify the token using your secret key
        const decoded = jsonwebtoken_1.default.verify(token, 'your-secret-key');
        // If the token is valid, set the user ID in the request object
        req.body.userId = decoded.userId;
        // Proceed to the next middleware or route handler
        next();
    }
    catch (error) {
        console.log(error);
        // If the token is invalid or missing, send a 401 Unauthorized response
        return res.status(401).json({ message: 'Authentication failed' });
    }
};
exports.authMiddleware = authMiddleware;
