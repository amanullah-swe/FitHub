import mongoose from 'mongoose';

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

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String,
    age: Number,
    gender: String,
    password: String,
    height: {
        value: Number,
        unit: {
            type: String,
            enum: ['inches', 'centimeters', 'feet']
        }
    },
    weight: {
        value: Number,
        unit: {
            type: String,
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


export const User = mongoose.models.User || mongoose.model('User', userSchema);
