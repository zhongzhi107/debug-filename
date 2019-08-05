import { sep, extname } from 'path';
import Debug from 'debug';
import getCallerFile from 'get-caller-file';

/**
 * 输出调试信息
 */
export default (...args) => {
  if (process.env.DEBUG) {
    const {
      DEBUG_FILENAME_PREFIX = 'app',
      DEBUG_FILENAME_START = '0',
      DEBUG_FILENAME_LENGTH = '100'
    } = process.env;
    const start: number = parseInt(DEBUG_FILENAME_START, 10);
    const length: number = parseInt(DEBUG_FILENAME_LENGTH, 10);
    const filename: string = getCallerFile();
    const ext: string = extname(filename);
    let pathNames: string[] = filename
      .replace(process.cwd() + sep, '')
      .replace(ext, '')
      .split(sep);
    if (pathNames.length > start) {
      pathNames = pathNames.splice(start, Math.min(pathNames.length - start, length));
    }
    pathNames.unshift(DEBUG_FILENAME_PREFIX);

    const namespace: string = pathNames.join(':');

    // eslint-disable-next-line
    return Debug(namespace).apply(Debug, args);
  }
  return () => {};
};
