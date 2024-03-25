import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authLogin, authRegister, fetchUserData } from './userAPI';

const initialState = {
  data: {
    id: "",
    name: "",
    email: "",
    phone: "",
    age: 25,
    gender: "",
    profession: "",
    profileImage: '',
    height: {
      value: "",
      unit: ""
    },
    weight: {
      value: '',
      unit: ""
    },
    fitnessGoals: [],
    activityLevel: "",
    medicalConditions: [],
    preferredWorkouts: [],
    dietaryPreferences: [],
    notificationPreferences: {
      email: true,
      app: true,
      sms: false
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
  status: 'idl',
  Errors: null,
  register: {
    message: "",
    status: 'idl',
    error: ';lk'
  }

};
export const authLoginAsync = createAsyncThunk(
  'user/AuthLogin',
  async ({ email, password }) => {
    const response = await authLogin({ email, password });
    return response;
  }
);
export const authRegisterAsync = createAsyncThunk(
  'user/AuthRegister',
  async ({ name, email, phone, gender, profession, password, age }) => {
    const response = await authRegister({ name, email, phone, gender, profession, password, age });
    return response;
  }
);
export const fetchUserDataAsync = createAsyncThunk(
  'user/fetch use data',
  async ({ userId }) => {
    const response = await fetchUserData({ userId });
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
      .addCase(authLoginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authLoginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
        state.Errors = null;
      })
      .addCase(authLoginAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.Errors = action.error;
      })


      .addCase(authRegisterAsync.pending, (state) => {
        state.status = 'loading';
        state.register.status = 'loading';
      })
      .addCase(authRegisterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.register.status = 'loading',
          state.register.message = action.payload;
        state.register.error = null;
      })
      .addCase(authRegisterAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.Errors = action.error;
        state.register.error = action.error;
        state.register.status = "reject";
        state.register.message = '';
      })

      .addCase(fetchUserDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
        state.Errors = null;
      })
      .addCase(fetchUserDataAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.Errors = action.error;
      })
  },
});

export const { increment, } = userSlice.actions;

export const selectUser = (state) => state.user.data;
export const selectRegesterStatus = (state) => state.user.register;
export default userSlice.reducer;
