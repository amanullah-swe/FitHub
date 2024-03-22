import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthLogin } from './userAPI';

const initialState = {
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
  userFriends: {
    friend1: "Alice",
    friend2: "Bob"
  },
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
  userError: null,
};
export const AuthLoginAsync = createAsyncThunk(
  'user/AuthLogin',
  async () => {
    const response = await AuthLogin();
    return response;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthLoginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AuthLoginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userInfo = action.payload;
        state.userError = null;
      })
      .addCase(AuthLoginAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.userError = action.error;
      })
  },
});

export const { increment, } = userSlice.actions;

export const selectUserInfo = (state) => state.user.userInfo;
export default userSlice.reducer;
