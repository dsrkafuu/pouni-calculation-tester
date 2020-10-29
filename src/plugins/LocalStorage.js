const SETTINGS = 'pouni-calculation-tester-settings';
const HISTORY = 'pouni-calculation-tester-history';

/**
 * local storage class
 */
class LocalStorage {
  /**
   * save data
   * @param {string} type `settings` or `history`
   * @param {object} obj
   * @returns `true` or `false`
   */
  save(type, obj) {
    let json;
    try {
      json = JSON.stringify(obj);
      type === 'settings' && localStorage.setItem(SETTINGS, json);
      type === 'history' && localStorage.setItem(HISTORY, json);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  /**
   * load data
   * @param {string} type `settings` or `history`
   * @returns `obj` or `null`
   */
  load(type) {
    let obj;
    try {
      type === 'settings' && (obj = JSON.parse(localStorage.getItem(SETTINGS)));
      type === 'history' && (obj = JSON.parse(localStorage.getItem(HISTORY)));
    } catch (e) {
      console.error(e);
      return null;
    }
    return obj;
  }
}

export default LocalStorage;
