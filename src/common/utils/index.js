import { THOUSAND } from './constants';

export const sleep = (time = THOUSAND) => new Promise(resovle => setTimeout(resovle, time))

export const mockAjax = async (value, time) => {
  await sleep(time);
  return value;
}

export const arr2json = (arr = [], key) => arr.reduce((total, cur) =>Object.assign(total, { [cur[key]]: cur }) , {});