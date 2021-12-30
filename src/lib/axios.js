import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-json-server.typicode.com/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

export const apis = {
    getListAX : (id) => instance.get(`dmlafiki/jsons/data/${id}`) 
}