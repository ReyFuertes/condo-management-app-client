import { createAction, props } from '@ngrx/store';
import { IBuilding, IParkingSLot, IUnit } from '../shared/generics/generic-model';

export enum AppActionTypes {
  getBuildingsAction = '[App] get building',
  getBuildingsSuccessAction = '[App] get building (success)',
  getUnitsAction = '[App] get units',
  getUnitsSuccessAction = '[App] get units (success)',
  getParkingAction = '[App] get parking',
  getParkingSuccessAction = '[App] get parking (success)',
}
export const getParkingAction = createAction(
  AppActionTypes.getParkingAction
);
export const getParkingSuccessAction = createAction(
  AppActionTypes.getParkingSuccessAction,
  props<{ response: IParkingSLot[] }>()
);
export const getUnitsAction = createAction(
  AppActionTypes.getUnitsAction
);
export const getUnitsSuccessAction = createAction(
  AppActionTypes.getUnitsSuccessAction,
  props<{ response: IUnit[] }>()
);
export const getBuildingsAction = createAction(
  AppActionTypes.getBuildingsAction
);
export const getBuildingsSuccessAction = createAction(
  AppActionTypes.getBuildingsSuccessAction,
  props<{ response: IBuilding[] }>()
);