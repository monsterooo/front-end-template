
export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例 route',
    path: '/table',
    component: './Table',
  },
  {
    name: 'Table nextFields 测试',
    path: '/tableDemo',
    component: './TableDemo',
  },
]