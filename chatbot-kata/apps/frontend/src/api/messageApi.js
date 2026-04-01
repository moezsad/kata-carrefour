import httpClient from "./httpClient";

export const sendMessage = async (message) => {
  const res = await httpClient.post("/messages", { message });
  return res.data;
};