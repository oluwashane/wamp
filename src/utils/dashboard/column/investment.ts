import { formatTime } from '@/utils/helper';

export const columns = [
  // {
  //   field: "fullname",
  //   label: "Full Name",
  //   searchable: false,
  //   sortable: false,
  // },
  {
    field: 'plan',
    label: 'Investment Plan',
    searchable: false,
    sortable: false,
  },
  {
    field: 'start_investment',
    label: 'Investment Start',
    searchable: false,
    sortable: false,
  },
  {
    field: 'end_investment',
    label: 'Investment End',
    searchable: false,
    sortable: false,
  },
  {
    field: 'amount',
    label: 'Investmented Amount',
    searchable: false,
    sortable: false,
  },
  {
    field: 'roi',
    label: 'Investment Roi',
    searchable: false,
    sortable: false,
  },
  {
    field: 'status',
    label: 'Investment Status',
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
    item.start_investment = new Date(
      item.start_investment * 1000
    ).toLocaleString('en-GB', {
      timeZone: 'UTC',
    });
    item.end_investment = new Date(
      item.end_investment * 1000
    ).toLocaleString('en-GB', {
      timeZone: 'UTC',
    });
    item.roi = item.plan.roi + '%';
    // item.fullname = item.user.fullname;
    item.plan = item.plan.name;
    item.action = `<a href="${`/admin/investments/${item.id}`}">
    View Details
    </a>`;
  });
  return data;
}
