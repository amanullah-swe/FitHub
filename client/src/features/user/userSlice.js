import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authLogin, authRegister, fetchUserData } from './userAPI';
import { baseUrl } from '../../app/constant';
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
    activityLevel: "",
    height: {
      value: "",
      unit: ""
    },
    weight: {
      value: '',
      unit: ""
    },
    caloriesGoal: 0,
    proteinGoal: 0,
    fitnessGoals: [],
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
    error: 'lk'
  },
  requestStatus: {
    success: null,
    error: null
  }

};

// login function that handle fetching of user login
export const authLoginAsync = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    const response = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error); // Or a more specific error message from response.json()
    }
    return await response.json();
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
  async () => {
    const response = await fetchUserData();
    return response;
  }
);

export const updateUserPesonalInfromationAsync = createAsyncThunk(
  'user/updateUserPersonal-info',
  async (userData) => {
    const response = await fetch('http://localhost:8080/api/user/personal-info', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Update user failed'); // Or handle specific errors from response
    }

    return await response.json();
  }
);

export const updateUserHealthInfromationAsync = createAsyncThunk(
  'user/updateUserhealth-info',
  async (userData) => {
    const response = await fetch('http://localhost:8080/api/user/health-info', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error); // Or handle specific errors from response
    }

    return await response.json();
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
    clearRequestStatus: (state) => {
      state.requestStatus.success = null;
      state.requestStatus.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN FUNCTIONALITY
      .addCase(authLoginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authLoginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.requestStatus.success = action.payload.message;
      })
      .addCase(authLoginAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.requestStatus.error = action.error.message;
      })


      //REGISTER FUNCTIONALITY 
      .addCase(authRegisterAsync.pending, (state) => {
        state.status = 'loading';
        state.register.status = 'loading';
      })
      .addCase(authRegisterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.register.status = 'loading';
      })
      .addCase(authRegisterAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.Errors = action.error;
      })

      // FETCHIN USER DATA
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

      // UPDATING USER PERSONAL INFORMATION
      .addCase(updateUserPesonalInfromationAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserPesonalInfromationAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.requestStatus.success = 'update successfully';
        state.data = action.payload;
        state.Errors = null;
      })
      .addCase(updateUserPesonalInfromationAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.Errors = action.error;
        state.status = 'reject';
        state.requestStatus.error = action.error.message;
      })


      // UPDATING USER HEALTH INFORMATION
      .addCase(updateUserHealthInfromationAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserHealthInfromationAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.requestStatus.success = 'update successfully';
        state.data = action.payload;
        state.Errors = null;
      })
      .addCase(updateUserHealthInfromationAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.Errors = action.error;
        state.status = 'reject';
        state.requestStatus.error = action.error.message;
      })
  },
});

export const { increment, clearRequestStatus } = userSlice.actions;

export const selectUser = (state) => state.user.data;
export const selectRegesterStatus = (state) => state.user.register;
export const selectRequestStatus = (state) => state.user.requestStatus;
export default userSlice.reducer;
