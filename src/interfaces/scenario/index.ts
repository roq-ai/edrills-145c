import { DrillInterface } from 'interfaces/drill';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ScenarioInterface {
  id?: string;
  name: string;
  description?: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  drill?: DrillInterface[];
  organization?: OrganizationInterface;
  _count?: {
    drill?: number;
  };
}

export interface ScenarioGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
}
