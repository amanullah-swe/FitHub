"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../../models/user");
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Find user by email
            const { email, password } = req.body;
            if (!email || !password)
                return res.status(400).json({ message: "invalid inputs " });
            const user = yield user_1.User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            // Check if password is correct
            const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Invalid password' });
            }
            const token = jsonwebtoken_1.default.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '7d' });
            // Set the JWT token as a cookie
            res.cookie('token', token, {
                path: '/', // Set the path to '/'
                httpOnly: true,
                maxAge: 3600000,
                secure: true,
                sameSite: 'none'
            });
            //  generate token and cookies and send to the user 
            return res.status(201).json({ message: "login successful", });
        }
        catch (error) {
            console.log(error);
            return res.status(504).json({ error });
        }
    });
}
exports.login = login;
