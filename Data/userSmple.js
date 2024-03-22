const sampleUserData = {
    id: "user123",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    age: 25,
    gender: "Male",
    height: {
        value: 70,
        unit: "inches"
    },
    weight: {
        value: 160,
        unit: "pounds"
    },
    profileImage: 'url',
    profession: "Software Developer",

    fitnessGoals: ["Weight Loss", "Strength Training"],
    activityLevel: "Moderate",
    medicalConditions: ["None"],
    FriendsCount: 2,
    preferences: {
        preferredWorkouts: ["Cardio", "Yoga"],
        dietaryPreferences: ["Vegetarian"],
        notificationPreferences: {
            email: true,
            app: true,
            sms: false
        }
    },
    settings: {
        units: {
            weight: "pounds",
            height: "inches"
        },
        privacy: {
            profileVisibility: "Public",
            dataSharing: true
        },
        notificationPreferences: {
            email: true,
            app: true,
            sms: false
        }
    },
};

module.exports = sampleUserData;
