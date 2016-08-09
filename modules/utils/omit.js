/**
 * creates new object sans specified keys
 * @param {object} obj
 * @param {array|undefined} omitions
 * @return {object}
 */
export default function omit(obj, omitions=[]) {
  return Object.keys(obj).reduce((memo, key) => {
    if (-1 === omitions.indexOf(key)) memo[key] = obj[key];

    return memo;
  }, {});
}
