import axios from 'axios';
import queryString from 'query-string';
import { ScenarioInterface, ScenarioGetQueryInterface } from 'interfaces/scenario';
import { GetQueryInterface } from '../../interfaces';

export const getScenarios = async (query?: ScenarioGetQueryInterface) => {
  const response = await axios.get(`/api/scenarios${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createScenario = async (scenario: ScenarioInterface) => {
  const response = await axios.post('/api/scenarios', scenario);
  return response.data;
};

export const updateScenarioById = async (id: string, scenario: ScenarioInterface) => {
  const response = await axios.put(`/api/scenarios/${id}`, scenario);
  return response.data;
};

export const getScenarioById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/scenarios/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteScenarioById = async (id: string) => {
  const response = await axios.delete(`/api/scenarios/${id}`);
  return response.data;
};
