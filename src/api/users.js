import api from "./index";

export const createUser = (data) => {
  return api.post("/users", data);
};

export const fetchUsers = ({ page, perPage, filter, sort }) => {
  return api.get("/users", {
    params: { page, perPage, filter, sort },
  });
};

export const requestVerificationEmail = (email) => {
  return api.get(`/user/verify?email=${encodeURIComponent(email)}`);
};

export const verifyUser = (data) => {
  return api.post("/user/verify", data);
};

export const requestResetEmail = (email) => {
  return api.get(`/user/reset?email=${encodeURIComponent(email)}`);
};

export const resetPassword = (data) => {
  return api.post("/user/reset", data);
};

export const updateCurrentUser = (data) => {
  return api.patch("/user/me", data);
};

export const deleteCurrentUser = () => {
  return api.delete("/user/me");
};

export const deleteUser = (id) => {
  return api.delete(`/users/${id}`);
};

export const updateUser = (id, data) => {
  return api.patch(`/users/${id}`, data);
};
