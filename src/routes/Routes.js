import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import WithLayout from "../WithLayout";
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
  DashLayout
} from "layouts";

import {
  Home as HomeView, ///Home
  GalleryPage as GalleryPageView, ///GalleryMain
  GalleryCategory as GalleryCategoryView, ///GalleryView
  Contact as ContactView, ///Contact
  About as AboutView, /////About
  NotFound as NotFoundView,
  Dashboard as DashboardView,
  Signin as SigninView,
  PasswordReset as PasswordResetView
} from "views";

import PrivateRoute from "./PrivateRoute";
import { auth } from "firebaseConfig";

const Routes = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(false);
      }
    });
  }, []);

  return (
    <Switch>
      <Route
        exact
        path="/app"
        render={matchProps => (
          <PrivateRoute
            {...matchProps}
            user={user}
            component={DashboardView}
            layout={DashLayout}
          />
        )}
      />
      {auth.currentUser ? (
        <Redirect from="/login" to="/app" />
      ) : (
        <Route
          exact
          path="/login"
          render={matchProps => (
            <WithLayout
              {...matchProps}
              component={SigninView}
              layout={MinimalLayout}
            />
          )}
        />
      )}
      <Route
        exact
        path="/password-reset"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={PasswordResetView}
            layout={MinimalLayout}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        )}
      />

      <Route
        exact
        path="/gallery"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={GalleryPageView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/gallery/:category"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={GalleryCategoryView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/contact"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ContactView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/about"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={AboutView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/not-found"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MinimalLayout}
          />
        )}
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
