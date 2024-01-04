import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  open: false,
  isConfirm: false,
  message: '',
  action: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: INITIAL_STATE,
  reducers: {
    openModal: (state, action) => {
      return {
        ...state,
        open: true,
        message: action.payload
      }
    },
    openConfirm: (state, action) => {
      const { msj, fun, id, values } = action.payload
      return {
        ...state,
        open: true,
        isConfirm: true,
        message: msj,
        action: fun,
        id: id,
        values
      }
    },
    closeModal: (state) => {
      return {
        ...state,
        open: false,
        isConfirm: false,
        message: '',
        action: null,
        id: null,
      }
    },
    toggleModal: (state) => {
      return {
        ...state,
        open: !state.open
      }
    },
    setIsConfirm: (state, action) => {
      return {
        ...state,
        isConfirm: action.payload
      }
    },
    setMessage: (state, action) => {
      return {
        ...state,
        message: action.payload
      }
    },
  }
})

export const {
  toggleModal, setIsConfirm, setMessage, openModal, openConfirm, closeModal, closeConfirm
} = modalSlice.actions;

export default modalSlice.reducer;