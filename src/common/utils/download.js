import FileSaver from 'file-saver';
import JSZip from 'jszip';

export const downloadImg = (src = '') => {
  const name = src.split('/').pop();
  const type = name.split('.').pop() || 'png';
  const canvas = document.createElement('canvas');
  const img = document.createElement('img');
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, img.width, img.height);
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    canvas.toBlob(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = name;
      link.click();
    }, `image/${type}`);
  };
  img.setAttribute('crossOrigin', 'Anonymous');
  img.src = src;
};

// 从url中获取图片的名字
export const getFileNameByUrl = url => url.substring(url.lastIndexOf('/') + 1);

/**
 * 获取文件
 * @param url
 * @returns {Promise<any>}
 */
const getBlob = url =>
  new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    };
    xhr.send();
  });

/**
 * 批量打包zip包下载
 * @param urlArr Array [{url: 下载文件的路径, fileName: 下载文件名称}]
 * @param filename zip文件名
 */
export const downloadTotal = (urlArr, filename = '打包下载') => {
  if (!(urlArr.length > 0)) {
    return;
  }
  const zip = new JSZip();
  const cache = {};
  const promises = [];
  urlArr.forEach(item => {
    // 下载文件, 并存成ArrayBuffer对象
    const promise = getBlob(item).then(data => {
      // 逐个添加文件
      const _filename = getFileNameByUrl(item);
      zip.file(_filename, data, { binary: true });
      cache[_filename] = data;
    });
    promises.push(promise);
  });

  Promise.all(promises).then(() => {
    // 生成二进制流
    zip.generateAsync({ type: 'blob' }).then(content => {
      // 利用file-saver保存文件
      FileSaver.saveAs(content, `${filename}.zip`);
    });
  });
};

export const limitNum = (num, max, min) => {
  if (num > max) {
    return max;
  }
  if (num < min) {
    return min;
  }
  return num;
};

// 是否点击到了antd/drawer抽屉的左上角关闭按钮, e是Drawer的onClose的事件对象
export const calcCloseCondition = e => !e?.target?.className?.includes?.('ant-drawer-mask');

export const downloadWrapper = (imagesurl = []) => {
  if (imagesurl.length > 1) {
    downloadTotal(imagesurl);
  } else {
    downloadImg(imagesurl.slice(0).pop());
  }
};
