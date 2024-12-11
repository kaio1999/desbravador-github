import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const getUserDetails = (username: string) => api.get(`/users/${username}`);
export const getUserRepos = (username: string) => api.get(`/users/${username}/repos`);
export const getRepoDetails = (fullName: string) => api.get(`/repos/${fullName}`);
