"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const notificationPreferencesSchema = {
    email: Boolean,
    app: Boolean,
    sms: Boolean
};
const unitsSchema = {
    weight: String,
    height: String
};
const privacySchema = {
    profileVisibility: Boolean,
    dataSharing: Boolean
};
const userSchema = new mongoose_1.default.Schema({
    id: String,
    name: String,
    email: String,
    phone: String,
    age: Number,
    gender: String,
    password: String,
    height: {
        value: {
            type: Number,
            default: 0,
        },
        unit: {
            type: String,
            default: "feet",
            enum: ['inches', 'centimeters', 'feet']
        }
    },
    weight: {
        value: {
            type: Number,
            default: 0
        },
        unit: {
            type: String,
            default: "kilograms",
            enum: ['pounds', 'kilograms']
        }
    },
    profession: String,
    fitnessGoals: [String],
    activityLevel: String,
    medicalConditions: [String],
    preferredWorkouts: [String],
    dietaryPreferences: [String],
    notificationPreferences: notificationPreferencesSchema
});
exports.User = mongoose_1.default.models.User || mongoose_1.default.model('User', userSchema);