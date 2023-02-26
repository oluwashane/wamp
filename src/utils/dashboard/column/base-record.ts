import Component from "@components/dashboard/Component";
export const columns = [
  {
    field: "name",
    label: "name",
    searchable: false,
    sortable: false,
  },
  {
    field: "type",
    label: "type",
    searchable: false,
    sortable: false,
  },
  {
    field: "action",
    label: "actions",
    component: "LazyBaseTableActions",
  },
];

export function transformData(data: any) {
  data.forEach((item: any) => {
    item.action = Component("LazyBaseTableActions", { id: item.id });
  });
  return data;
}
