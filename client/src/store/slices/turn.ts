import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GenerateTurn, TurnSlice } from '../../models/Turn';
import { registerTurn } from '../../services/turn';
import { RootState } from '../store';
import { setLocalStorage } from '../../utils';

const initialState: Partial<TurnSlice> = {
  id: '',
  name: '',
  status: 'idle',
  error: undefined,
};
export const createTurn = createAsyncThunk('turn/register', async (body: GenerateTurn, { rejectWithValue, getState }) => {
  const state = getState() as RootState;
  try {
    return await registerTurn(body, state.user.token);
  } catch (error) {
    return rejectWithValue(error);
  }
});
const turn = createSlice({
  name: 'turn',
  initialState,
  reducers: {
    setTurn: (state, action) => {
      setLocalStorage('turn', action.payload);
      return { ...state, ...action.payload };
    },
    reset: () => {
      return { ...initialState };
    },
    errorTurnClear: (state) => {
      return (state.error = undefined);
    },
    setError: (state) => {
      state.error = { status: 401 };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTurn.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(createTurn.fulfilled, (state, action) => {
      setLocalStorage('turn', action.payload.data);
      return { ...state, status: 'fulfilled', ...action.payload.data };
    });
    builder.addCase(createTurn.rejected, (state, action) => {
      return { ...state, error: action.payload };
    });
  },
});
export const { reset, errorTurnClear, setError, setTurn } = turn.actions;
export default turn.reducer;
