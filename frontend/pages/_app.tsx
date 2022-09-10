import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import NextProgressBar from "nextjs-progressbar";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@/store/store";

import "../app/styles/globals.scss";
import React from "react";
import AuthProvider from "@/providers/AuthProvider";
import { TypeComponentAuthFields } from "@/providers/private-route.interface";

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
  return (
    <>
      <NextProgressBar
        color="#FF7652"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AuthProvider Component={Component}>
            <Component {...pageProps} />
            <ReduxToastr
              newestOnTop={false}
              preventDuplicates
              progressBar
              closeOnToastrClick
              timeOut={4000}
              transitionIn="fadeIn"
              transitionOut="fadeOut" />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
