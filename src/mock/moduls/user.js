/* 
 * �û�����ģ��
 */

// ����
export function save() {
  return {
    url: 'http://localhost:8080/user/save',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}// ɾ��
export function del() {
  return {
    url: 'http://localhost:8080/user/delete',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// ��ҳ��ѯ
export function findPage() {
  return {
    url: 'http://localhost:8080/user/findPage',
    type: 'post',
    data: findPageData
  }
}