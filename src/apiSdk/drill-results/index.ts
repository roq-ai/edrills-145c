import axios from 'axios';
import queryString from 'query-string';
import { DrillResultInterface, DrillResultGetQueryInterface } from 'interfaces/drill-result';
import { GetQueryInterface } from '../../interfaces';

export const getDrillResults = async (query?: DrillResultGetQueryInterface) => {
  const response = await axios.get(`/api/drill-results${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createDrillResult = async (drillResult: DrillResultInterface) => {
  const response = await axios.post('/api/drill-results', drillResult);
  return response.data;
};

export const updateDrillResultById = async (id: string, drillResult: DrillResultInterface) => {
  const response = await axios.put(`/api/drill-results/${id}`, drillResult);
  return response.data;
};

export const getDrillResultById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/drill-results/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDrillResultById = async (id: string) => {
  const response = await axios.delete(`/api/drill-results/${id}`);
  return response.data;
};
