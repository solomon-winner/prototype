import apiClient from './apiClient.js';
import handleError from './errorHandler.js';

export const fetchGeneralInfo = async () => {
  try {
    const response = await apiClient.get('/general');
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const fetchBannerCards = async () => {
  try {
    const response = await apiClient.get('/bannercards');
    return response.data.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};


// Songs
export const fetchSongs = async (type) => {
  try {
    const response = await apiClient.get(`/songs?type=${type}`);
    return response.data.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// Visitors
export const addVisitors = async (data) => {
  try {
    const response = await apiClient.post('/visitors', data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// Testimonies
export const fetchTestimonies = async () => {
  try {
    const response = await apiClient.get('/testimonies');
    return response.data.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const addTestimony = async (data) => {
  try {
    const response = await apiClient.post('/testimonies', data);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};


