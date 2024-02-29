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
    profession: "Software Developer",
    fitnessGoals: ["Weight Loss", "Strength Training"],
    activityLevel: "Moderate",
    medicalConditions: ["None"],
    userFriends: {
        friend1: "Alice",
        friend2: "Bob"
    },
    FriendsCount: 2,
    profileImage: 'url',
    preferences: {
        preferredWorkouts: ["Cardio", "Yoga"],
        dietaryPreferences: ["Vegetarian"],
        notificationPreferences: {
            email: true,
            app: true,
            sms: false
        }
    },
    fitnessData: {
        currentFitnessLevel: "Intermediate",
        workoutHistory: [
            {
                date: "2024-01-10",
                workoutType: "Running",
                duration: 30,
                caloriesBurned: 300
            },
            // Additional workout entries
        ],
        nutritionAnsMealHistory: [
            {
                date: "2024-01-10",
                Breakfast: [
                    {
                        name: "Oatmeal",
                        description: "A healthy breakfast option",
                        nutrients: {
                            protein: 5,
                            calories: 150,
                            carbohydrates: 30,
                            fiber: 5,
                            fat: 2,
                            cholesterol: 0,
                            sugar: 2
                        },
                        serving_sizes: {
                            servingType: "grams",
                            value: 100
                        }
                    }
                ],
                Lunch: [
                    // Similar structure as Breakfast
                ],
                Dinner: [
                    // Similar structure as Breakfast
                ],
                SnackAm: [
                    // Similar structure as Breakfast
                ],
                SnackPm: [
                    // Similar structure as Breakfast
                ],
                totalnutrients: {
                    protein: 50,
                    carbohydrates: 120,
                    fat: 20,
                    vitamin: ["Vitamin A", "Vitamin C"],
                    sugar: "15g",
                    calorie: "500"
                }
            },
            // Additional nutrition entries
        ]
    },
    settings: {
        units: {
            weight: "pounds",
            height: "inches"
        },
        privacy: {
            profileVisibility: "Public",
            dataSharing: true
        }
    },
};

module.exports = sampleUserData;
