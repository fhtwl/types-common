declare namespace Common {
  export interface Params {
    [propsName: string]: unknown;
  }
  // 一般list
  export interface ListItem extends Params {
    id?: number;
  }
  export type List = ListItem[];

  export interface TreeOption {
    id?: string;
    parentId?: string;
  }

  // tree节点
  export interface TreeNode extends Params {
    children: TreeNode[];
    serialNum: number;
    parentId: number;
    id: number;
  }

  // 排序
  export type SortType = "desc" | "asc";

  // 分页参数
  export interface PaginationParams extends Params {
    pageNum: number;
    pageSize: number;
    params: Params
  }

  // 用数字标识布尔值
  export type BooleanNumber = 0 | 1;

  // 返回值
  interface ResponseData<T> {
    code: string;
    data: T;
    msg: string;
  }
}
