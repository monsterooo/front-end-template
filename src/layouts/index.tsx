import { Outlet } from 'umi'
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { routes } from '@/constants/routes';

const route = {
  path: '/',
  routes: [
    {
      path: '/welcome',
      name: '欢迎aaa',
      component: './Welcome',
    },
    {
      path: '/admin',
      name: '管理页',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        {
          path: '/admin/sub-page1',
          name: '一级页面',
          icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
          component: './Welcome',
        },
        {
          path: '/admin/sub-page2',
          name: '二级页面',
          component: './Welcome',
        },
        {
          path: '/admin/sub-page3',
          name: '三级页面',
          component: './Welcome',
        },
      ],
    },
    {
      name: '列表页',
      path: '/list',
      component: './ListTableList',
      routes: [
        {
          path: '/list/sub-page',
          name: '列表页面',
          routes: [
            {
              path: 'sub-sub-page1',
              name: '一一级列表页面',
              component: './Welcome',
            },
            {
              path: 'sub-sub-page2',
              name: '一二级列表页面',
              component: './Welcome',
            },
            {
              path: 'sub-sub-page3',
              name: '一三级列表页面',
              component: './Welcome',
            },
          ],
        },
        {
          path: '/list/sub-page2',
          name: '二级列表页面',
          component: './Welcome',
        },
        {
          path: '/list/sub-page3',
          name: '三级列表页面',
          component: './Welcome',
        },
      ],
    },
    {
      path: 'https://ant.design',
      name: 'Ant Design 官网外链',
    },
  ],
};

function Layout() {
  return (
    <Outlet />
  )
}

export default Layout;