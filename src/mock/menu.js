const menu = [
  {
    path: "setting",
    name: "系统设置",
    icon: "Setting",
    level: [
      {
        path: "power",
        name: "权限管理",
        icon: "Operation",
        children: [
          {
            path: "admin",
            name: "管理员管理",
            icon: "Avatar",
          },
          {
            path: "menu",
            name: "菜单管理",
            icon: "Menu",
          },
          {
            path: "role",
            name: "角色管理",
            icon: "User",
          },
        ],
      },
    ],
  },
  {
    path: "histogram",
    name: "数据管理",
    icon: "DataAnalysis",
    children: [
      {
        path: "order",
        name: "订单管理",
        icon: "Tickets",
      },
      {
        path: "product",
        name: "商品管理",
        icon: "Goods",
      },
    ],
  },
  {
    path: "folder",
    name: "文件管理",
    icon: "Folder",
    children: [
      {
        path: "file",
        name: "文件列表",
        icon: "Document",
      },
      {
        path: "upload",
        name: "文件上传",
        icon: "UploadFilled",
      },
    ],
  },
];
export default menu;