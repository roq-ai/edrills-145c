import { UserInterface } from 'interfaces/user';
import { DrillInterface } from 'interfaces/drill';
import { GetQueryInterface } from 'interfaces';

export interface ObserverRequestInterface {
  id?: string;
  user_id: string;
  drill_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  drill?: DrillInterface;
  _count?: {};
}

export interface ObserverRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  drill_id?: string;
  status?: string;
}
