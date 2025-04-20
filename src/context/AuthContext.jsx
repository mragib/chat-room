import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const BASE_URL =
  import.meta.env.VITE_BASE_URL || "https://chat-api-vecx.onrender.com/api";
function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || null
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      logout();
    }
  }, [user]);

  // const fetchProfile = async () => {
  //   try {
  //     setLoading(true);
  //     setError(null);

  //     console.log("Fetching profile with token:", user);
  //     const response = await axios.get(`${BASE_URL}/auth/profile`, {
  //       headers: { token },
  //     });

  //     console.log("Profile response:", response.data);
  //     setUser(response.data.data || response.data); // Adjust based on API response
  //   } catch (err) {
  //     console.error("Profile fetch error:", err.response?.data || err.message);
  //     setError(err.response?.data?.message || "Failed to fetch profile");
  //     logout();
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const updateProfile = async (profileData) => {
  //   try {
  //     setLoading(true);
  //     setError(null);

  //     const response = await axios.patch(
  //       `${BASE_URL}/auth/profile`,
  //       profileData,
  //       {
  //         headers: { token },
  //       }
  //     );

  //     console.log("Profile update response:", response.data);
  //     setUser(response.data.data || response.data);
  //     return response.data;
  //   } catch (err) {
  //     console.error("Update profile error:", err.response?.data || err.message);
  //     setError(err.response?.data?.message || "Failed to update profile");
  //     throw err;
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const logout = () => {
    console.log("Logging out...");
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("userName");
  };

  const login = async (data) => {
    const { username, password } = data;
    try {
      setLoading(true);
      setError(null);

      console.log("Attempting login with:", { username, password });
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        username,
        password,
      });

      console.log("Login response:", response.data);

      // Adjusted to match nested data structure
      // const authToken = response.data.data?.token;
      const userData = response.data.id;
      const userDataName = response.data.username;

      if (!userData) {
        throw new Error("Invalid response structure from login API");
      }
      setUser(userData);
      setUserName(userDataName);
      localStorage.setItem("user", userData);
      localStorage.setItem("userName", userDataName);
      console.log("User set:", userData);
    } catch (err) {
      console.error("Login error:", err.response?.data.error);
      setError(err.response?.data?.error || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      console.log("Attempting signup with:", userData);
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        username: userData.username,
        password: userData.password,
      });

      console.log("Signup response:", response.data);

      // Adjusted to match nested data structure

      const newUser = response.data?.id;
      const userDataName = response.data.username;

      if (!newUser) {
        throw new Error("Invalid response structure from signup API");
      }

      setUser(newUser);
      setUserName(userDataName);
      localStorage.setItem("user", newUser);
      localStorage.setItem("userName", userDataName);

      console.log("User set:", newUser);
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Signup failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    userName,
    loading,
    error,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("AuthContent was used outside AuthProvider");

  return context;
}

export { AuthProvider, useAuthContext };
