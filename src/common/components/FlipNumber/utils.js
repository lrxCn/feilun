export const transNumber = (num, options) => {
  const { radix = 0, omitDecimals = true } = options || {};
  const radixNumStr = num?.toFixed(radix);
  const omitNumber = omitDecimals ? parseFloat(radixNumStr).toString() : radixNumStr;
  const [integerPlace, decimalPlace] = omitNumber.split('.');
  const integerPlaceLength = integerPlace?.length || 0;
  const integerPlaceArr = integerPlace?.split('') || [];
  const decimalPlaceArr = decimalPlace?.split('') || [];
  const finalNumberArr = [];
  integerPlaceArr.forEach((item, index) => {
    finalNumberArr.push({
      value: item,
      key: integerPlaceLength - index,
    });
  });

  decimalPlaceArr.length && finalNumberArr.push({
    value: '.',
    key: '0',
  });
 
  decimalPlaceArr.forEach((item, index) => {
    finalNumberArr.push({
      value: item,
      key: -1 * (index + 1),
    });
  });
  return finalNumberArr;
};
