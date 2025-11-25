import api from "./api";

export const authService = {
  register: async (data: {
    name: string;
    email: string;
    password: string;
    phone: string;
  }) => {
    const response = await api.post("/auth/register", data);
    if (response.data.data?.token) {
      localStorage.setItem("authToken", response.data.data.token);
    }
    return response.data;
  },

  login: async (data: { email: string; password: string }) => {
    const response = await api.post("/auth/login", data);
    if (response.data.data?.token) {
      localStorage.setItem("authToken", response.data.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("authToken");
  },

  getProfile: async () => {
    const response = await api.get("/auth/profile");
    return response.data;
  },
};
