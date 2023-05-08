import type { ProColumns } from "@ant-design/pro-components"

type fieldProps = ProColumns<any, any>;

const findField = (columns: fieldProps[], field: fieldProps) => {
  return columns.find((cur) => cur.dataIndex === field.dataIndex)
}

const copyField = (source: fieldProps, target: fieldProps) => {
  const keys = Object.keys(target) as [keyof fieldProps]
  keys.forEach((key) => source[key] = target[key])
}

/**
 * 将 nextFields 中的更新合并到 columns 中
 * @param columns 原始待合并字段
 * @param nextFields 更新的字段
 */
export const mergeColumns = (columns: fieldProps[], nextFields: fieldProps[]) => {
  nextFields.forEach((field) => {
    const fined = findField(columns, field);
    if (fined) {
      copyField(fined, field);
    }
  });
  
  return [ ...columns ]
}