import { useEffect, useState } from 'react'
import { ProTable } from "@ant-design/pro-components"
import { mergeColumns } from './utils'
import type { ParamsType, ProTableProps, ProColumns } from "@ant-design/pro-components"

export type TableProps = {
  nextFields?: ProColumns[];
};

export const Table = <
  T extends Record<string, any>,
  U extends ParamsType,
  ValueType,
>(props: ProTableProps<T, U, ValueType> & TableProps) => {
  const { nextFields, ...rest } = props;
  const [columns, setColumns] = useState<ProColumns<any, any>[]>([]);

  // Note: columns 与 nextFileds 都有可能被更新，这里需要保留 columns 更新改变 table 的同时，也需要支持 nextFields 的功能。
  useEffect(() => {
    if (!props.nextFields) {
      setColumns(props.columns || []);
    } else {
      const mergedColumns = mergeColumns(props.columns || [], props.nextFields);
      setColumns(mergedColumns);
    }

  }, [props.columns, props.nextFields])

  return <ProTable {...rest} columns={columns} />
}