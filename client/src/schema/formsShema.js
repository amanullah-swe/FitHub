import { number, object, ref, string } from 'yup';
let loginSchema = object({
    email: string().email().required('enter a valide email'),
    password: string().min(8).max(16).required('Enter a valid password'),
});

export const signupSchema = object({
    name: string().required('Enter a name'),
    email: string().email().required('Enter a valide email'),
    profession: string().required('Enter your profession'),
    age: number().required('enter a valid age'),
    gender: string().required('enter you gender'),
    // city: string().min(6).max(99).required('Enter a city'),
    password: string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .max(16, 'Password is too loong - should be 16 chars maximum.'),
    confirmPassword: string().required('No confirm password provided.').oneOf([ref('password'), null], 'Passwords must match'),
    phone: number().required('Enter Mobile number')
});


export const personalInformaionSchema = object({
    name: string().required('Enter a name'),
    email: string().email().required('Enter a valide email'),
    profession: string().required('Enter your profession'),
    gender: string().required('enter you gender'),
    phone: number().required('Enter Mobile number')
});

export const healthInformaionSchema = object({
    caloriesGoal: number().required('provide calorie goal'),
    proteinGoal: number().required('provide protein goal'),
    age: number().required('enter valid age'),
    height: object().shape({
        value: number().required('Height value is required'),
        unit: string().required('Height unit is required'),
    }),
    weight: object().shape({
        value: number().required('Weight value is required'),
        unit: string().required('Weight unit is required'),
    }),
});


const nonNegative = number().test(
    'isNonNegative',
    'Value must be non-negative',
    (value) => value >= 0
);
export const createMealSchema = object().shape({
    name: string().required('Name is required'),
    description: string().optional(), // Optional field
    serving_size: number().required('Serving size is required').test(
        'isNonNegative',
        'Value must be non-negative',
        (value) => value >= 0
    ),
    protein: number().required('Protein is required').test(
        'isNonNegative',
        'Value must be non-negative',
        (value) => value >= 0
    ),
    calories: number().required('Calories are required').test(
        'isNonNegative',
        'Value must be non-negative',
        (value) => value >= 0
    ),
    carbohydrates: number().required('Carbohydrates are required').test(
        'isNonNegative',
        'Value must be non-negative',
        (value) => value >= 0
    ),
    fiber: number().required('Fiber is required').test(
        'isNonNegative',
        'Value must be non-negative',
        (value) => value >= 0
    ),
    fat: number().required('Fat is required').test(
        'isNonNegative',
        'Value must be non-negative',
        (value) => value >= 0
    ),
    cholesterol: number().required('Cholesterol is required').test(
        'isNonNegative',
        'Value must be non-negative',
        (value) => value >= 0
    ),
    sugar: number().required('Sugar is required').test(
        'isNonNegative',
        'Value must be non-negative',
        (value) => value >= 0
    ),
});