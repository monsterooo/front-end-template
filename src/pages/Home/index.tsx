import { useState } from 'react';
import { Button } from 'antd';
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer
    >
      <div className={styles.container}>
        <div>{BASE_URL}</div>
        <Button>abc</Button>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
