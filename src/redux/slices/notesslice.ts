import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../../../store";

export interface Note{
    title:string,
    content:string
}
const initialState:Array<Note>=[];
export const notesSlice=createSlice({
    name:'notes',
    initialState,
    reducers:{
        addNote(state, action:PayloadAction<Note>){
            state.push(action.payload)
        }
    }
})

export const {addNote}=notesSlice.actions
export const noteSelector=(state:RootState)=>state.notes
export default notesSlice.reducer