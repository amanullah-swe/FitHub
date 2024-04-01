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
exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../../models/user");
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // we will use google auth and google share email and name of the user
        const { name, email, phone, gender, profession, password, age } = req.body;
        try {
            if (!name || !email || !phone || !gender || !profession || !password || !age) {
                return res.status(400).json({ message: 'All fields are required' });
            }
            // Check if email is already registered
            const existingUser = yield user_1.User.findOne({ email: req.body.email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already registered' });
            }
            // Hash the password
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            // Create a new user
            const newUser = new user_1.User({
                name,
                email,
                phone,
                gender,
                age,
                profession,
                password: hashedPassword,
            });
            // Save the user to the database
            const savedUser = yield newUser.save();
            // Return success response
            res.status(201).json({ message: 'User registered successfully' });
        }
        catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
}
exports.register = register;
;
