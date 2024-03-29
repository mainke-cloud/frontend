import React from 'react';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../Data/listDataScan';

const ScannerLogScanDisposisi = () => {
    const listData = [listData1, listData2, listData3];

    return (
        <AppSidebarContent
            data={listData}
            tab='Scanner'
            subTab='Log Scan Surat'
            isAdd={true}
            isStatus=''
        />
  )
}

export default ScannerLogScanDisposisi