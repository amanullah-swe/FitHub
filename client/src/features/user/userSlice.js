import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/constant";
import { apiGet, apiPost, apiPut } from "../../apis/api_functions"; // ✅ Import reusable API functions

const initialState = {
  data: {
    id: "",
    name: "",
    email: "",
    phone: "",
    age: 25,
    gender: "",
    profession: "",
    profileImage: "",
    activityLevel: "",
    height: { value: "", unit: "" },
    weight: { value: "", unit: "" },
    caloriesGoal: 0,
    proteinGoal: 0,
    fitnessGoals: [],
    medicalConditions: [],
    preferredWorkouts: [],
    dietaryPreferences: [],
    notificationPreferences: {
      email: true,
      app: true,
      sms: false,
    },
    privacy: {
      profileVisibility: "Public",
      dataSharing: true,
    },
  },
  auth: false,
  status: "idl",
  requestStatus: {
    success: null,
    error: null,
  },
};

// ----------------------------- AUTH -----------------------------

export const checkAuthAsync = createAsyncThunk("user/auth/check", async () => {
  return await apiGet(`${baseUrl}/api/auth`);
});

// ----------------------------- USER DATA -----------------------------

export const fetchUserDataAsync = createAsyncThunk("user/fetch", async () => {
  return await apiGet(`${baseUrl}/api/user/id`);
});

export const updateUserPesonalInfromationAsync = createAsyncThunk(
  "user/updatePersonalInfo",
  async (userData) => {
    return await apiPut(`${baseUrl}/api/user/personal-info`, userData);
  }
);

export const updateUserHealthInfromationAsync = createAsyncThunk(
  "user/updateHealthInfo",
  async (userData) => {
    return await apiPut(`${baseUrl}/api/user/health-info`, userData);
  }
);

export const selectRegesterStatus = () => {};

// ----------------------------- SLICE -----------------------------

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearRequestStatus: (state) => {
      state.requestStatus.success = null;
      state.requestStatus.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // AUTH CHECK
      .addCase(checkAuthAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkAuthAsync.fulfilled, (state) => {
        state.status = "idle";
        state.auth = true;
      })
      .addCase(checkAuthAsync.rejected, (state) => {
        state.status = "reject";
        state.auth = false;
      })

      // FETCH USER
      .addCase(fetchUserDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
        state.requestStatus.success = "User data fetched";
      })
      .addCase(fetchUserDataAsync.rejected, (state, action) => {
        state.status = "reject";
        state.requestStatus.error = action.error.message;
      })

      // UPDATE PERSONAL INFO
      .addCase(updateUserPesonalInfromationAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserPesonalInfromationAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
        state.requestStatus.success = "Personal info updated";
      })
      .addCase(updateUserPesonalInfromationAsync.rejected, (state, action) => {
        state.status = "reject";
        state.requestStatus.error = action.error.message;
      })

      // UPDATE HEALTH INFO
      .addCase(updateUserHealthInfromationAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserHealthInfromationAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
        state.requestStatus.success = "Health info updated";
      })
      .addCase(updateUserHealthInfromationAsync.rejected, (state, action) => {
        state.status = "reject";
        state.requestStatus.error = action.error.message;
      });
  },
});

export const { clearRequestStatus } = userSlice.actions;

export const selectAuth = (state) => state.user.auth;

export default userSlice.reducer;
