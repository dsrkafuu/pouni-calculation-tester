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

  /**
   * async load a json file
   * @returns a promise
   */
  async load() {
    return new Promise((resolve, reject) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json';
      input.style.display = 'none';
      input.addEventListener('change', () => {
        if (input.files.length > 0) {
          // get the json file
          const file = input.files[0];
          if (file.type.includes('json')) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const res = e.target.result;
              try {
                const obj = JSON.parse(res);
                resolve(obj);
              } catch (e) {
                reject(e);
              }
            };
            reader.readAsText(file);
          } else {
            reject(new Error('wrong file MIME type'));
          }
        } else {
          reject(new Error('no file selected'));
        }
      });
      input.click();
    });
  }
}

export default CustomFile;
