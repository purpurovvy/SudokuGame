import { TBlockCoords, TGrid } from 'global/typings';

export interface IReducer {
  challengeGrid?: TGrid;
  selectedBlock?: TBlockCoords;
  solvedGrid?: TGrid;
  workingGrid?: TGrid;
  isValidationMode?: boolean;
  isSudokuTemplateOpen?: boolean;
}

export interface ICreateGridAction {
  payload?: any;
  type: string;
}
