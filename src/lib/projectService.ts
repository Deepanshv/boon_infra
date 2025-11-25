import api from "./api";

export const projectService = {
  getAll: async (filters?: { category?: string; status?: string }) => {
    const response = await api.get("/projects", { params: filters });
    return response.data.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/projects/${id}`);
    return response.data.data;
  },

  create: async (data: any) => {
    const response = await api.post("/projects", data);
    return response.data.data;
  },

  update: async (id: string, data: any) => {
    const response = await api.put(`/projects/${id}`, data);
    return response.data.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  },
};
