import utils from '../utils/http/utils.js';
import apiUrls from './urls/index.js';

export default Object.assign({}, utils.loadApiConfig(apiUrls));
