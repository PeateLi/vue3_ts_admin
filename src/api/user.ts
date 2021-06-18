import request from '../utils/request';

export async function login(data: any) {
  return await request({
    url: 'admin/login',
    method: 'post',
    data
  });
}

export async function getUser(params?: any) {
  return await request({
    url: 'admin/info',
    params
  });
}

export function getCode(data?: any) {
  return request({
    url: 'admin/getCode',
    method: 'post',
    data
  });
}
