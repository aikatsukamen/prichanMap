declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.gif' {
  const path: string;
  export default path;
}

declare interface Window {}

declare module '*store*.json' {
  const store: StoreData[];
  export default store;
}

declare module '*pref.json' {
  const data: { name: string; html: string }[];
  export default data;
}

/** 店舗情報 */
export type StoreData = {
  /** 店舗名 */
  name: string;
  /** 住所 */
  address: string;
  /** 緯度、経度 */
  grid: [number, number];
  /** 筐体数 */
  machineNum: number;
  /** 県ID */
  prefId: number;
};
