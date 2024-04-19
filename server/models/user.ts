import mongoose from 'mongoose';

const notificationPreferencesSchema = {
    email: Boolean,
    app: Boolean,
    sms: Boolean
};
const privacySchema = {
    profileVisibility: Boolean,
    dataSharing: Boolean
};

const userSchema = new mongoose.Schema({
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
    caloriesGoal: {
        type: Number,
        default: 0
    },
    proteinGoal: {
        type: Number,
        default: 0
    },
    profession: String,
    fitnessGoals: [String],
    activityLevel: {
        type: String,
        default: ''
    },
    medicalConditions: [String],
    preferredWorkouts: [String],
    dietaryPreferences: [String],
    notificationPreferences: notificationPreferencesSchema
});


export const User = mongoose.models.User || mongoose.model('User', userSchema);
