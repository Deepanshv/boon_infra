import api from "./api";

export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  projectId?: string;
}

export const enquiryService = {
  submit: async (data: EnquiryData) => {
    const response = await api.post("/enquiries", data);
    return response.data;
  },

  getAll: async () => {
    const response = await api.get("/enquiries");
    return response.data.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/enquiries/${id}`);
    return response.data.data;
  },

  update: async (id: string, data: Partial<EnquiryData>) => {
    const response = await api.put(`/enquiries/${id}`, data);
    return response.data.data;
  },
};
