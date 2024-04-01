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
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const MONGODB_URI = process.env.MONGODB_URI || "";
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env ' +
        'Refer to the documentation for instructions on setting up environment variables.');
}
let cachedDb = null;
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        if (cachedDb) {
            console.log('Reusing cached database connection');
            return cachedDb;
        }
        try {
            const db = yield mongoose_1.default.connect(MONGODB_URI);
            console.log('Connected to MongoDB');
            cachedDb = db;
            return db;
        }
        catch (error) {
            console.error('Error connecting to MongoDB:', error);
            process.exit(1); // Terminate the process if connection fails
        }
    });
}
exports.default = connect;
