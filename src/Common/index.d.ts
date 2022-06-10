declare namespace Common {
  export interface Params extends Params {
    [propsName: string]: unknown;
  }
  // 一般list
  export interface List extends Params {
    id?: number;
  }

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
  }
}
