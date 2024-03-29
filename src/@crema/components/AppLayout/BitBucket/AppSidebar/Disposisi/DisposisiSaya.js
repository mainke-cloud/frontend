import React from 'react';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../Data/listDataDisposisi';

const DisposisiSaya = () => {
    const listData = [listData1, listData2, listData3];

    return (
        <AppSidebarContent
            data={listData}
            tab='Disposisi'
            subTab='Disposisi Saya'
            isAdd={true}
            isStatus='disposisi'
        />
  )
}

export default DisposisiSaya