import axios from "axios";

const url = "http://localhost:8000/api";

// create new user //
export const addUserClient = async (user) => {
  try {
    await axios.post(`${url}/add`, user);
  } catch (error) {
    console.log(error?.response?.data);
  }
};
// get all users //
export const getUserClient = async () => {
  try {
    const { data } = await axios.get(`${url}/users`);
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};

// set current conversation//
export const setConversation = async (conversation) => {
  try {
    await axios.post(`${url}/conversation/new`, conversation);
  } catch (error) {
    console.log(error.response.data);
  }
};

// get current conversation//
export const getConversation = async (conversation) => {
  try {
    const data = await axios.post(`${url}/conversation/get`, conversation);
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};

// sent new message//
export const newMessage = async (message) => {
  try {
    const data = await axios.post(`${url}/message/add`, message);
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};

// get user messages //

export const getMessage = async (id) => {
  try {
    const { data } = await axios.get(`${url}/message/get/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// upload FIle //

export const uploadFile = async (file) => {
  try {
    const { data } = await axios.post(`${url}/file/upload`, file);
    return data;
  } catch (error) {
    console.log(error);
  }
};
