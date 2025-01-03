/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.NEXT_PUBLIC_REMOTE_SERVER;
const USERS_API = `${REMOTE_SERVER}/api/users`;

export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);
  return response.data;
};

export const findUsersByRole = async (role: string) => {
  const response = await axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};

export const findUsersByPartialName = async (name: string) => {
  const response = await axios.get(`${USERS_API}?name=${name}`);
  return response.data;
};

export const findUserById = async (userId: string) => {
  const response = await axios.get(`${USERS_API}/${userId}`);
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const login = async (credentials: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/login`,
    credentials
  );
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.get(`${USERS_API}/profile`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(USERS_API, user);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  return response.data;
};

export const logout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/logout`);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${USERS_API}/${userId}`);
  return response.data;
};

export const findMyCourses = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/courses`
  );
  return response.data;
};

export const createCourse = async (course: any, userId: string) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/${userId}/courses`,
    course
  );
  return response.data;
};

export const enrollCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/${userId}/courses/${courseId}/enroll`
  );
  return response.data;
};

export const unenrollCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/${userId}/courses/${courseId}/unenroll`
  );
  return response.data;
};
