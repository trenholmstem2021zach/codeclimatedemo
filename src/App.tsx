import React, { useCallback, useMemo, useState, useEffect } from "react";
import { Auth } from "aws-amplify";

import { AppContext } from "./libs/contextLib";
import {Routes} from "./Routes";

export function App() {
  const [authState, setAuthState] = useState({isAuthenticating: false});


  const conditionalSet = useCallback(async (isDeveloper = false) => {
    try {
      // Get authenticated user's info from cognito
      // and set portion of the user profile.
      const authUser = await Auth.currentAuthenticatedUser();
      const email = authUser.signInUserSession.idToken.payload.email;


      setAuthState({
        isAuthenticating: false,
        })

    } catch (error) {
      if (
        (error as string) !== "not authenticated" &&
        (error as Error).message !== "SESSION_EXPIRY"
      ) {
        console.log(
          "There was an error while loading the user information.",
          error
        );
      }

      setAuthState({
        isAuthenticating: false,
      });
    }
  }, []);

  useEffect(() => {
    // On initial load of the App, try to set the user info.
    function setUserInfo(email: any) {
       console.log(email)
    }

    setUserInfo("foo");
  }, []);

  const contextValue = useMemo(
    () => ({
      ...authState,
    }),
    [authState]
  );

  return authState.isAuthenticating ? null : (
    <AppContext.Provider value={contextValue}>
      <div className="header-and-content">
        <Routes />
      </div>
    </AppContext.Provider>
  );
}
