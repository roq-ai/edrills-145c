import axios from 'axios';
import queryString from 'query-string';
import { ObserverRequestInterface, ObserverRequestGetQueryInterface } from 'interfaces/observer-request';
import { GetQueryInterface } from '../../interfaces';

export const getObserverRequests = async (query?: ObserverRequestGetQueryInterface) => {
  const response = await axios.get(`/api/observer-requests${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createObserverRequest = async (observerRequest: ObserverRequestInterface) => {
  const response = await axios.post('/api/observer-requests', observerRequest);
  return response.data;
};

export const updateObserverRequestById = async (id: string, observerRequest: ObserverRequestInterface) => {
  const response = await axios.put(`/api/observer-requests/${id}`, observerRequest);
  return response.data;
};

export const getObserverRequestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/observer-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteObserverRequestById = async (id: string) => {
  const response = await axios.delete(`/api/observer-requests/${id}`);
  return response.data;
};
