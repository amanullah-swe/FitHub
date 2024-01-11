


const meal = {
    "name": "sandwich",
    "description": "Quinoa is a nutrient-rich grain that has been cultivated for thousands of years.",
    "nutrients": {
        "protein": "4.1g",
        "calories": "120",
        "carbohydrates": "21g",
        "fiber": "2.8g",
        "fat": "1.9g",
        "cholesterol": '0mg',
    },
    "serving_sizes": {
        "grams": 100,
        "cups": 0.92,
        "ounces": 3.5,
        "teaspoons": 19.2,
        "tablespoons": 6.4
    },
    "benefits": ["Heart Health", "Digestive Health"],
    "category": ["vegitable"],  // like vegitable or fruit
    "avoid": ["Gluten Sensitivity"],
    "warnings": ["May contain saponins, rinse before cooking."],
    "storage": "Store in a cool, dry place.",
    "images": "string",
    "origin": "South America",
    "availability": ["North America", "Europe"],
    "alternative_names": ["Quinua", "कीनोआ"]
}

const ingredients = {
    "name": "sandwich",
    "description": "Quinoa is a nutrient-rich grain that has been cultivated for thousands of years.",
    "nutrients": {
        "protein": "4.1g",
        "calories": "120",
        "carbohydrates": "21g",
        "fiber": "2.8g",
        "fat": "1.9g",
        "cholesterol": '0mg',
    },
    "serving_sizes": {
        "grams": 100,
        "cups": 0.92,
        "ounces": 3.5,
        "teaspoons": 19.2,
        "tablespoons": 6.4
    },
    "benefits": ["Heart Health", "Digestive Health"],
    "category": ["vegitable"],  // like vegitable or fruit
    "avoid": ["Gluten Sensitivity"],
    "warnings": ["May contain saponins, rinse before cooking."],
    "storage": "Store in a cool, dry place.",
    "images": ["url1", "url2"],
    "origin": "South America",
    "availability": ["North America", "Europe"],
    "alternative_names": ["Quinua", "कीनोआ"]
}


const MealList = {
    "foods": [
        {
            "name": "Quinoa",
            "description": "Quinoa is a nutrient-rich grain that has been cultivated for thousands of years.",
            "nutrients": {
                "protein": "4.1g",
                "calories": "120",
                "carbohydrates": "21g",
                "fiber": "2.8g",
                "fat": "1.9g"
            },
            "serving_sizes": {
                "grams": 100,
                "cups": 0.92,
                "ounces": 3.5,
                "teaspoons": 19.2,
                "tablespoons": 6.4
            },
            "benefits": ["Heart Health", "Digestive Health"],
            "avoid": ["Gluten Sensitivity"],
            "warnings": ["May contain saponins, rinse before cooking."],
            "storage": "Store in a cool, dry place.",
            "images": ["url1", "url2"],
            "origin": "South America",
            "availability": ["North America", "Europe"],
            "alternative_names": ["Quinua", "कीनोआ"]
        },
        {
            "name": "Salmon",
            "description": "Salmon is a fatty fish known for its rich omega-3 fatty acids and excellent protein content.",
            "nutrients": {
                "protein": "25g",
                "calories": "206",
                "carbohydrates": "0g",
                "fiber": "0g",
                "fat": "13g"
            },
            "serving_sizes": {
                "grams": 100,
                "cups": 0.45,
                "ounces": 3.5,
                "teaspoons": 18.9,
                "tablespoons": 2.8
            },
            "benefits": ["Brain Health", "Heart Health"],
            "avoid": ["Shellfish Allergy"],
            "warnings": ["Choose wild-caught salmon for optimal health benefits."],
            "storage": "Keep refrigerated.",
            "images": ["url3", "url4"],
            "origin": "Various Oceans",
            "availability": ["Worldwide"],
            "alternative_names": ["サケ", "Лосось", "سلمون"]
        },
        // ... (similar details for other foods)
    ]
}


// You can now use the 'userData' object as needed in your JavaScript code.
