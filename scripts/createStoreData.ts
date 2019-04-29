/**
 * プリチャン公式の「遊べるお店」から、店舗情報を取得する
 */
import fs from 'fs';
import client from 'cheerio-httpcli';
import { StoreData } from '../src/types/shims';
import prefData from './pref.json';

/** 都道府県IDの最大値 */
const prefMax = 47;
/** アクセス先のURL */
const baseUrl = 'https://prichan.jp/shop/';
/** 保存するファイル名(緯度経度無し) */
const filenamePrefix = 'tmp/01/store';
const filenameExt = '.json';

/** 1ページ分の店舗情報を取得 */
const fetchStoreData = async (prefNum: string, htmlPath: string): Promise<StoreData[]> => {
  const accessUrl = `${baseUrl}${htmlPath}`;
  const storeData: StoreData[] = [];

  const res = await client.fetch(accessUrl);
  const $ = res.$;

  $('.shopList')
    .find('dl')
    .each((index, elem) => {
      const name = $(elem)
        .find('.name')
        .text()
        .trim();
      const address = $(elem)
        .find('.add')
        .text()
        .trim();
      const grid: [number, number] = [0, 0];
      const machineNum = 1;

      storeData.push({
        name,
        address,
        grid,
        machineNum,
        prefId: parseInt(prefNum, 10),
      });
    });

  return storeData;
};

(async () => {
  for (let i = 0; i < prefMax; i++) {
    let prefName: string = '';

    try {
      prefName = prefData[i].name;

      /** クエリパラメータに用いる形式の県ID */
      const prefNum: string = ('00' + (i + 1)).slice(-2);
      const storeDataList: StoreData[] = await fetchStoreData(prefNum, prefData[i].html);

      // 県ごとに結果を出力
      fs.writeFileSync(`${filenamePrefix}${prefNum}${filenameExt}`, JSON.stringify(storeDataList, null, '  '));
    } catch (e) {
      console.log('----------------------------------------');
      console.log(`${prefName}でエラーがあった`);
      console.log(e);
    }
  }
})();
