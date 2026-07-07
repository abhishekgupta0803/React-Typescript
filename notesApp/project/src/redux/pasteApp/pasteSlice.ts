import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface pasteValue {
  id: string;
  content: string;
  title: String;
}

interface pasteState {
  pasteValue: pasteValue[];
}

const initialState: pasteState = {
  pasteValue: localStorage.getItem("pasteValue")
    ? JSON.parse(localStorage.getItem("pasteValue"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addPaste: (state, action: PayloadAction<pasteValue>) => {
      const paste = action.payload;

      // if(paste.title.trim() === "" || paste.content.trim()== ""){
      //    toast.error("Title and Content are required! ")
      //    return;
      // }
      // if (!paste.title.trim() || !paste.content.trim()) {
      //   toast.error("Title and Content are required!");
      //   return;
      // }

      // console.log(state.pasteValue);
      const dublicateTitle = state.pasteValue
        .map((item) => item.title === paste.title)
        .includes(true);
      if (!dublicateTitle) {
        state.pasteValue.push(paste);
        localStorage.setItem("pasteValue", JSON.stringify(state.pasteValue));
        toast.success("Paste Create Successfully");
      } else {
        toast.error("Paste Title Already Exist");
      }
    },
    updatePaste: (state, action: PayloadAction<pasteValue>) => {
      const updatedPastes = action.payload;
      console.log(updatedPastes);
      const index = state.pasteValue.findIndex(
        (paste: any) => paste.id === updatedPastes.id,
      );
      if (index >= 0) {
        state.pasteValue[index] = updatedPastes;
        localStorage.setItem("pasteValue", JSON.stringify(state.pasteValue));
        toast.success("Paste Updated Successfully");
      }
    },
    resetPaste: (state) => {
      state.pasteValue = [];
      localStorage.removeItem("pasteValue");
      // toast.success("Paste Reset Successfully");
    },
    removePaste: (state, action: PayloadAction<pasteValue>) => {
      const pasteId = action.payload;
      console.log(pasteId);
      const index = state.pasteValue.findIndex(
        (item: any) => item.id === pasteId,
      );
      if (index >= 0) {
        state.pasteValue.splice(index, 1);
        localStorage.setItem("pasteValue", JSON.stringify(state.pasteValue));
        toast.success("Paste Delete Successfully");
      }
    },
  },
});

export const { addPaste, updatePaste, resetPaste, removePaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
