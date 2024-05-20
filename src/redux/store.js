import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userReducer } from "./user/userSlice.js";
import { waterReducer } from "./water/waterSlice.js";
import { calendarReducer } from "./Calendar/CalendarSlice.js";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: [],
};

const waterPersistConfig = {
  key: "water",
  storage,
  whitelist: [], // should be added
};

const calendarPersistConfig = {
  key: "calendar",
  storage,
  whitelist: [], // should be added
};

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    water: persistReducer(waterPersistConfig, waterReducer),
    calendar: persistReducer(calendarPersistConfig, calendarReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);



