# README

## 常见方案连接

[自定义布局](https://pro.ant.design/zh-CN/docs/layout/#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B8%83%E5%B1%80)

## 路由系统

路由统一在 `src/constants/routes.ts` 中进行配置，在 `config/config.ts` 文件中会加载并使用路由文件。

## 权限控制

权限控制在 `src/access.ts` 文件中统一对能访问的权限做抽象，要使用时可以使用如下方法：

```javascript
import React from 'react';
import { useAccess, Access } from 'umi';

const PageA = (props) => {
  const { foo } = props;
  const access = useAccess(); // access 实例的成员: canReadFoo, canUpdateFoo, canDeleteFoo

  if (access.canReadFoo) {
    // 任意操作
  }

  return (
    <div>
      <Access accessible={access.canReadFoo} fallback={<div>Can not read foo content.</div>}>
        Foo content.
      </Access>
      <Access accessible={access.canUpdateFoo()} fallback={<div>Can not update foo.</div>}>
        Update foo.
      </Access>
      <Access accessible={access.canDeleteFoo(foo)} fallback={<div>Can not delete foo.</div>}>
        Delete foo.
      </Access>
    </div>
  );
};
```

如果菜单需要做权限控制，使用如下实例：

```javascript
// src/constants/routes.ts 文件
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
    access: 'AdminRouteFilter', // 会调用 src/access.ts 中返回的 normalRouteFilter 进行鉴权
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
]
```

[更多详细资料请参阅](https://pro.ant.design/zh-CN/docs/authority-management)