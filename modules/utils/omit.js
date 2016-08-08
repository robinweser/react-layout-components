/**
 * creates new object sans specified keys
 * @param {object} obj
 * @param {array|undefined} omitions
 * @return {object}
 */
export default function omit(obj, omitions=[]) {
  return Object.keys(obj).reduce((memo, key) => {
    if (! omitions.includes(key)) memo[key] = obj[key];

    return memo;
  }, {});
}
