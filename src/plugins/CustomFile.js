import * as dayjs from 'dayjs';

/**
 * file class
 */
class CustomFile {
  /**
   * save the object to file
   * @param {object} obj
   */
  save(obj) {
    let json;
    try {
      json = JSON.stringify(obj);
      // create file blob
      const blob = new Blob([json]);
      // create download dom element
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${dayjs().toJSON().replace(/:/g, '_')}.json`;
      // supprot firefox
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error(e);
    }
  }
}

export default CustomFile;
