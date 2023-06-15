import { DrillResultInterface } from 'interfaces/drill-result';
import { ObserverRequestInterface } from 'interfaces/observer-request';
import { ScenarioInterface } from 'interfaces/scenario';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DrillInterface {
  id?: string;
  name: string;
  date: any;
  scenario_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  drill_result?: DrillResultInterface[];
  observer_request?: ObserverRequestInterface[];
  scenario?: ScenarioInterface;
  organization?: OrganizationInterface;
  _count?: {
    drill_result?: number;
    observer_request?: number;
  };
}

export interface DrillGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  scenario_id?: string;
  organization_id?: string;
}
