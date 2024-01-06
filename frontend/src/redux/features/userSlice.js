import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userServices from '../../services/userServices';

export const userRegister = createAsyncThunk(
  'user/userRegister',
  async (valores, { rejectWithValue }) => {
    try {
      console.log(valores);
      const res = await userServices.userRegister(valores);
      return res;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  'user/userLogin',
  async (valores, { rejectWithValue }) => {
    try {
      console.log(valores);
      const res = await userServices.userLogin(valores);
      return res;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const userLoginGoogle = createAsyncThunk(
  'user/userLoginGoogle',
  async (response, { rejectWithValue }) => {
    try {
      console.log(response);

      /*
			const [data, setData] = useState({
		        isAuthenticated: false,
		        token: '',
		        user: null
		    })
		    const { isAuthenticated, user } = data;*/

      function parseJWT(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map(function (c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );
        return JSON.parse(jsonPayload);
      }

      let paramsGoogle = new Object();
      paramsGoogle.picture = parseJWT(response.credential).picture;
      paramsGoogle.given_name = parseJWT(response.credential).given_name;
      paramsGoogle.email = parseJWT(response.credential).email;
      paramsGoogle.family_name = parseJWT(response.credential).family_name;

      const res = await userServices.loginWithGoogle(paramsGoogle);
      return res;

      /*axios.post('http://18.222.226.76/api/auth/google-login', paramsGoogle)
	            .then(response => {
	                console.log(response.data);
	            })
	            .catch(function (err) {
	                console.log(err.response.data);
	                const token = response.headers;
	                setData({
	                    ...data, token: token, isAuthenticated: true, user: response.data
	                })
	            });*/
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const userLoginFacebook = createAsyncThunk(
  'user/userLoginFacebook',
  async (response, { rejectWithValue }) => {
    try {
      console.log(response);
      const res = await userServices.loginWithFacebook(response);
      return res;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const userCompleteHimData = createAsyncThunk(
  'user/userCompleteHimData',
  async (valores, { rejectWithValue }) => {
    try {
      console.log(valores);
      const res = await userServices.userCompleteHimData(valores);
      return res;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const userForgotPassword = createAsyncThunk(
  'user/userForgotPassword',
  async (valores, { rejectWithValue }) => {
    try {
      console.log(valores);
      const res = await userServices.userChangePassword(valores);
      return res;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const userForgotData = createAsyncThunk(
  'user/userForgotData',
  async (valores, { rejectWithValue }) => {
    try {
      console.log(valores);
      const res = await userServices.userForgotData(valores);
      return res;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

/*
const message = err.message || 'Error de registro'
err.toString()
thunkAPI.dispatch(setMessage(message))
return err.thunkAPI.rejectWithValue()

*/

const initialState = {
  loading: false,
  error: false,
  completeData: false,
  status: '',
  role: null,
  token: null,
  userData: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { token, user } = action.payload;
      console.log(action.payload);
      state.token = token;
      state.userData = user;
    },
    logOut: (state, action) => {
      state.token = null;
      state.user = {};
    },
  },
  extraReducers: {
    // user register
    // [userRegister.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [userRegister.fulfilled]: (state, action) => {
    //   state.status = action.payload.status;
    // },
    // [userRegister.rejected]: (state, action) => {
    //   console.log(action);
    //   state.error = action.payload;
    // },
    // //user login
    // [userLogin.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [userLogin.fulfilled]: (state, action) => {
    //   state.status = action.payload.status;
    // },
    // [userLogin.rejected]: (state, action) => {
    //   console.log(action);
    //   state.error = action.payload;
    // },
    // // login con google
    // [userLoginGoogle.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [userLoginGoogle.fulfilled]: (state, action) => {
    //   state.status = action.payload.status;
    //   console.log(action.payload);
    // },
    // [userLoginGoogle.rejected]: (state, action) => {
    //   console.log(action);
    //   state.error = action.payload;
    // },
    // // login con facebook
    // [userLoginFacebook.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [userLoginFacebook.fulfilled]: (state, action) => {
    //   state.status = action.payload.status;
    // },
    // [userLoginFacebook.rejected]: (state, action) => {
    //   console.log(action);
    //   state.error = action.payload;
    // },
    // // user complete him data
    // [userCompleteHimData.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [userCompleteHimData.fulfilled]: (state, action) => {
    //   state.status = action.payload.status;
    //   state.completeData = true;
    // },
    // [userCompleteHimData.rejected]: (state, action) => {
    //   console.log(action);
    //   state.error = action.payload;
    // },
  },
});

console.log(userSlice.actions);

export const {
  displayStep,
  RegisterStep1,
  RegisterStep2,
  RegisterStep3,
  addUser,
  logOut,
} = userSlice.actions;
export default userSlice.reducer;
