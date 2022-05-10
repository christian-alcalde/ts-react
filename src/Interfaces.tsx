export interface IBox {
  id: string;
  width: number | string;
  height: number | string;
  backgroundColor: string;
  remove(id: string): void;
}

export interface IBoxForm {
  id: string;
  width: number | string;
  height: number | string;
  backgroundColor: string;
}

export interface IForm {
  height: string;
  width: string;
  backgroundColor: string;
}

export interface INewBox {
  createBox: (data: IBoxForm) => void;
}
