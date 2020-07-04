/**
 * mock工具
 * @author Heanes
 * @time 2020-05-02 22:50:38 周六
 */
import mock from 'mockjs'

const enableMock = () => {
  mock.mock('/base/common', 'get', () => {
    return {
      data: 0,
      code: 0
    }
  })
}

export {
  enableMock
}
