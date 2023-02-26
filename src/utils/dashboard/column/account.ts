export const columns = [
  {
    field: 'accountNumber',
    label: 'Account Number',
    searchable: false,
    sortable: false,
  },
  {
    field: 'firstName',
    label: 'First Name',
    searchable: false,
    sortable: false,
  },
  {
    field: 'lastName',
    label: 'Last Name',
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
    field: 'action',
    label: 'Action',
    component: 'LazyUserTableActions',
  },

  // add user details
];

export function transformData(data: any) {
  // data.forEach((item: any) => {
  //   item.accountNumber = data.account[0].accountNumber
  // })
  // console.log
  // return data
}
