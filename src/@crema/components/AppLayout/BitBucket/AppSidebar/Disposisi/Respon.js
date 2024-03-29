import React from 'react';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../Data/listDataDisposisi';

const Respon = () => {
    const listData = [listData1, listData2, listData3];

    return (
        <AppSidebarContent
            data={listData}
            tab='Disposisi'
            subTab='Disposisi / Respons'
            isAdd={true}
            isStatus='disposisi'
        />
  )
}

export default Respon