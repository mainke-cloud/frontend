import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppSidebarContent from '../AppSidebarContent';

import {
  listData1,
  listData2,
  listData3,
} from '../../../../../services/dummy/sidebar/listDataDisposisi';
import { getAllSurat } from '@crema/services/apis/surat';

const LetterInDisposisi = (props) => {
  const { isCollapsed } = props;
  const [data, setData] = useState([]);
  const Datas = [listData1, listData2, listData3];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllSurat();
        setData(result);
      } catch (error) {
        console.error('Error fetching surat data:', error);
      }
    };

    fetchData();
  }, []); // Dependency array kosong untuk memanggil sekali saat komponen dimount
  console.log(data);
  console.log(Datas);
  return (
    <AppSidebarContent
      isCollapsed={isCollapsed}
      data={data}
      tab='Surat Masuk'
      subTab=''
      isAdd={true}
      isStatus='surat masuk'
    />
  );
};

export default LetterInDisposisi;

LetterInDisposisi.propTypes = {
  isCollapsed: PropTypes.bool,
};
