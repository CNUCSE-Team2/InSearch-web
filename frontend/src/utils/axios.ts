import axios from 'axios';

type MethodType = 'POST' | 'GET' | 'PUT' | 'DELETE';
interface AxiosRequest {
  method: MethodType;
  url: string;
  data?: any;
}

const request = async ({ data = '', ...request }: AxiosRequest) => {
  const config = {
    ...request,
    data,
  };

  const response = await axios(config);
  return response;
};

export default request;
