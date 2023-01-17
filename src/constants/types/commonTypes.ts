declare global {
    interface Window
      {
        localeManager: any;
        customFrameHeight?: number;
      }
}

export interface OptionType {
  label: string;
  value: string;
}

export interface KeyDTO {
  uuid: string;
  id: string;
}

export interface BaseTreeGridRow {
  id: string;
  name: string;
  parentnodeID: string;
}

export interface Group {
  id: string;
  name: string;
}
