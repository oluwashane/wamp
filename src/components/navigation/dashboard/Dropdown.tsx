// eslint-disable-next-line import/no-cycle
import MenuItems from './MenuItems';
import React, { FC } from 'react';

interface Props {
  submenus: any;
  dropdown: any;
  depthLevel?: number;
}

const Dropdown: FC<Props> = ({
  submenus,
  dropdown,
}: Props) => {
  return submenus.map(
    (
      submenu: {
        title:
          | string
          | number
          | boolean
          | null
          | undefined;
        url: string | number | null | undefined;
      },
      index: number
    ) => (
      <ul
        key={index}
        className={`${dropdown ? 'hidden' : 'block'}`}
      >
        <MenuItems items={submenu} index={index} />
      </ul>
    )
  );
};

export default Dropdown;
