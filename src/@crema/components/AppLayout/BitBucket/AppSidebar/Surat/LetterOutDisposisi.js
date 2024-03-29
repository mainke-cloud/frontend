import React from 'react';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../Data/listDataSurat';

const LetterInDisposisi = () => {
    const listData = [listData1, listData2, listData3];

    return (
        <AppSidebarContent
            data={listData}
            tab='Surat Keluar'
            subTab='Perlu Tindak Lanjut'
            isAdd={true}
            isStatus='surat'
        />
  )
}

export default LetterInDisposisi