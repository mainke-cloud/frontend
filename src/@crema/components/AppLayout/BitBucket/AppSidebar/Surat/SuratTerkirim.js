import React from 'react';
import PropTypes from 'prop-types';
import AppSidebarContent from '../AppSidebarContent';
// import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataSurat';
import { listData1, listData2, listData3 } from '../../../../../services/dummy/sidebar/listDataSuratKeluar';

const SuratTerkirim = (props) => {
    const {isCollapsed} = props;
    const listData = [listData1, listData2, listData3];
    return (
        <AppSidebarContent
            isCollapsed={isCollapsed}
            data={listData}
            tab='Surat Keluar'
            subTab='Surat Terkirim'
            isAdd={true}
            isStatus='surat terkirim'
        />
  )
}

export default SuratTerkirim;

SuratTerkirim.propTypes = {
    isCollapsed: PropTypes.bool,
}
