import { getData } from '../helper/utils/token';
import ApiRequestMethod from './helper';

const getHeaders = (token, image, userToken) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken}`,
  };
  const ImageHeader = {
    ...headers,
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  };
  if (!token) {
    delete headers.Authorization;
    return headers;
  }
  if (image) {
    return ImageHeader;
  }
  return headers;
};

const ApiRequest = async (
  route,
  body,
  methodType,
  isTokenRequired,
  isImage
) => {
  const url = `${ApiRequestMethod.url}${route}`;
  const request = ApiRequestMethod[methodType];
  const userToken = await getData();
  const bodyOfRequest = isImage ? body : JSON.stringify(body);
  const headers = getHeaders(isTokenRequired, isImage, userToken);
  const config = {
    headers,
  };
  console.log(route, body, methodType);
  console.log(url, request, userToken, bodyOfRequest, config);
  const response = methodType !== 'get'
    ? await request(url, bodyOfRequest, config)
    : await request(url, config);

  return response;
};

export default ApiRequest;
