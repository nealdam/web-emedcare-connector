import { SERVER_AUTH_URL } from "../constants/url";
import { useState } from "react";

export const useServerGoogleTokenLogin = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const url = SERVER_AUTH_URL + "/login/agent/google";

  const handleLogin = (googleToken) => {
    setLoading(true);

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ googleToken: googleToken, deviceId: "test123" }), // TODO: deviceId
    })
      .then((response) => {
        response
          .json()
          .then((json) => {
            setData(json);
          })
          .catch((error) => {
            setError(error);
          });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    user: data,
    isLoading: loading,
    isError: error,
    login: handleLogin,
  };
};

export const useLoginUsernameEmailPassword = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const url = SERVER_AUTH_URL + "/login/agent/password";

  const handleLogin = (usernameOrEmail, password) => {
    setLoading(true);

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: usernameOrEmail, password: password }),
    })
      .then((response) => {
        response
          .json()
          .then((json) => {
            setData(json);
          })
          .catch((error) => {
            setError(error);
          });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    user: data && data.data,
    isLoading: loading,
    isError: error,
    login: handleLogin,
  };
};
