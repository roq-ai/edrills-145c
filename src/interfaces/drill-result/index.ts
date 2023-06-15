import { DrillInterface } from 'interfaces/drill';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DrillResultInterface {
  id?: string;
  drill_id: string;
  evaluator_id: string;
  performance: string;
  created_at?: any;
  updated_at?: any;

  drill?: DrillInterface;
  user?: UserInterface;
  _count?: {};
}

export interface DrillResultGetQueryInterface extends GetQueryInterface {
  id?: string;
  drill_id?: string;
  evaluator_id?: string;
  performance?: string;
}
