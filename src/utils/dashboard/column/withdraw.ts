import { formatMoney } from '@libs/helpers/helper';

export const columns = [
  {
    field: 'wallet_type',
    label: 'Wallet Type',
    searchable: false,
    sortable: false,
  },
  {
    field: 'wallet',
    label: 'Wallet Address',
    searchable: false,
    sortable: false,
  },
  {
    field: 'status',
    label: 'Status',
    searchable: false,
    sortable: false,
  },
  {
    field: 'amount',
    label: 'Amount',
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
    item.status = item.status ? 'Paid' : 'Pending';
    item.amount = formatMoney(item.amount);
    item.action = `<a href="${`/admin/withdraw/${item.id}`}">
    View Details
    </a>`;
  });
  return data;
}
