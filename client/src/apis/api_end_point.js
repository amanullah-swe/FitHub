import { baseUrl } from "../app/constant"; // adjust the path as needed

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${baseUrl}/api/auth/login`,
    REGISTER: `${baseUrl}/api/auth/register`,
    CHECK_AUTH: `${baseUrl}/api/auth`,
  },
  USER: {
    FETCH_BY_ID: `${baseUrl}/api/user/id`,
    UPDATE_PERSONAL_INFO: `${baseUrl}/api/user/personal-info`,
    UPDATE_HEALTH_INFO: `${baseUrl}/api/user/health-info`,
  },
};
