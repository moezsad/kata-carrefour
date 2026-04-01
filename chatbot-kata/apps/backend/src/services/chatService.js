import responses from "../models/responseModel.js";

export const getResponse = (message) => {
  const lower = message.toLowerCase();

  for (const item of responses) {
    if (item.keywords.some(k => lower.includes(k))) {
      return item.response;
    }
  }

  return "Sorry, I don't understand your request.";
};