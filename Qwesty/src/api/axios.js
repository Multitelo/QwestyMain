import axios from 'axios';

const baseURL = "https://solvety.info/api";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTE3MjYyNTAsImV4cCI6MTcxMTcyOTg1MCwidXNlcklkIjoiNiIsImVtYWlsIjoiZW1lbmlrZWF1Z3VzdGluZTMwMUBnbWFpbC5jb20iLCJ1c2VydHlwZSI6InJlc2VhcmNoZXIifQ.m070sioa1ohTKIAHq6Hzw6qNKTCyeVvpujDhupKQS3I";

export const getSelectsur = async () => {
  try {
    const response = await axios.get(`${baseURL}/selectsur`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
