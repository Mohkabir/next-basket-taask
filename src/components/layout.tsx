"use client";
import React from "react";
import ContactUs from "./contact-us";
import Header from "./header";
import Footer from "./footer";
import { Provider } from "react-redux";
import store from "@/global-state/store";
import ToastContainer from "./toast-container";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Provider store={store}>
        <ContactUs />
        <Header />
        {children}
        <ToastContainer />
        <Footer />
      </Provider>
    </main>
  );
};

export default Layout;
