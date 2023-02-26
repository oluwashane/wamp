export const columns = [
  {
    field: 'fullname',
    label: 'Full Name',
    searchable: false,
    sortable: false,
  },
  {
    field: 'email',
    label: 'Email Address',
    searchable: false,
    sortable: false,
  },
  {
    field: 'username',
    label: 'Username',
    searchable: false,
    sortable: false,
  },
  {
    field: 'balance',
    label: 'Balance',
    searchable: false,
    sortable: false,
  },
  {
    field: 'withdrawable_balance',
    label: 'Withdrawable Balance',
    searchable: false,
    sortable: false,
  },
  {
    field: 'action',
    label: 'Action',
    renderHtml: true,
    component: 'LazyUserTableActions',
  },
];

export function transformData(data: any) {
  data.forEach((item: any) => {
    item.action = `<a href="${`/admin/users/${item.id}`}">
    View Details
    </a>`;
  });
  return data;
}
