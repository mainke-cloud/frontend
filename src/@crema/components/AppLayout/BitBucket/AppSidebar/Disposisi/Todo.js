import React from 'react';
import AppSidebarContent from '../AppSidebarContent';
import { listData1, listData2, listData3 } from '../Data/listDataDisposisi';

const Todo = () => {
    const listData = [listData1, listData2, listData3];

    return (
        <AppSidebarContent
            data={listData}
            tab='Disposisi'
            subTab='Todo'
            isAdd={false}
            isStatus='todo'
        />
  )
}

export default Todo