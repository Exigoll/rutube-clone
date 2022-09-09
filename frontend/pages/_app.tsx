import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@/store/store";

import "../app/styles/globals.scss";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Component {...pageProps} />
        <ReduxToastr
          newestOnTop={false}
          preventDuplicates
          progressBar
          closeOnToastrClick
          timeOut={4000}
          transitionIn="fadeIn"
          transitionOut="fadeOut" />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
