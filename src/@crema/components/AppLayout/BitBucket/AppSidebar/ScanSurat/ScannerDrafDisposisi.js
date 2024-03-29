import React from 'react';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../Data/listDataScan';

const ScannerDrafDisposisi = () => {
    const listData = [listData1, listData2, listData3];

    return (
        <AppSidebarContent
            data={listData}
            tab='Scanner'
            subTab='Draf Scan Surat'
            isAdd={true}
            isStatus=''
        />
  )
}

export default ScannerDrafDisposisi