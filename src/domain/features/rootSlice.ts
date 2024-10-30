import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: 0, // Khởi tạo giá trị ID
};

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload; // Cập nhật ID
        },
        clearId: (state) => {
            state.id = 0; // Xóa ID
        },
    },
});

// Xuất actions và reducer
export const { setId, clearId } = rootSlice.actions;
export default rootSlice.reducer;
