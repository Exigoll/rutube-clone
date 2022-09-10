import storage from "redux-persist/lib/storage";
import { rootReducer } from "@/store/root-reducer";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { rtkQueryErrorLogger } from "@/store/middlewares/error.middleware";
import { api } from "@/store/api/api";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
    },
  }).concat(rtkQueryErrorLogger).concat(api.middleware),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>
