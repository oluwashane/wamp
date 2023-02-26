import moment from 'moment';
export const errorParser = (
  errors: any,
  touched: any,
  type: string
) => {
  if (touched[type] && errors[type]) {
    return errors[type];
  } else {
    return null;
  }
};

export function formatTime(value: string) {
  if (value) {
    const date = new Date();
    const currentDayInSec = Math.floor(
      date.getTime() / 1000
    );
    const secondData = currentDayInSec - Number(value);

    console.log(moment(secondData).toDate());

    return moment(value).format();
  }
}

export const formatMoney = (number: any) => {
  const dollarUsLocale = Intl.NumberFormat('en-US');
  return dollarUsLocale.format(number);
};
