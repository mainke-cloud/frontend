import React from 'react';
import noPtl from '../../assets/SuratKeluar/noPtl.svg';
import { Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import {
  listData1,
  listData2,
  listData3,
} from '../../@crema/services/dummy/sidebar/listDataDisposisi';
import Folder from 'modules/folder/index';
import DetailScanSurat from 'modules/scanSurat/DetailScanSurat';
import Disposisi from 'modules/disposisi/respons/DetailSurat';
import PerluTindakLanjut from 'modules/suratKeluar/perluTindakLanjut/PerluTindakLanjut';
import Draft from 'modules/suratKeluar/draft/Draft';
import LacakProses from 'modules/suratKeluar/lacakProses/LacakProses';
import SuratMasuk from 'modules/suratMasuk/SuratMasuk';
import SuratDiminta from 'modules/suratKeluar/suratDiminta/SuratDiminta';
import SuratTerkirim from 'modules/suratKeluar/suratTerkirim/SuratTerkirim';
import Template from 'modules/suratKeluar/template/Template';
import SuratDibatalkan from 'modules/suratKeluar/suratDibatalkan/SuratDibatalkan';
import Komposer from 'modules/suratKeluar/komposer/Komposer';
import DetailTodo from 'modules/disposisi/todo/DetailTodo';
import ListData from 'modules/folder/content/ListData';
const BelumPilih = ({ check, ids }) => {
  const datadisposisi = [listData1, listData2, listData3];
  let activeComponent = null;
  if (ids) {
    switch (check) {
      case `todo${ids}`:
        activeComponent = <DetailTodo props={datadisposisi} />;
        break;
      case `disposisi${ids}`:
        activeComponent = <Disposisi props={datadisposisi} />;
        break;
      case `disposisi saya${ids}`:
        activeComponent = <Disposisi props={datadisposisi} />;
        break;
      case `perlu tindak lanjut${ids}`:
        activeComponent = <PerluTindakLanjut props={datadisposisi} />;
        break;
      case `draft${ids}`:
        activeComponent = <Draft props={datadisposisi} />;
        break;
      case `lacak proses${ids}`:
        activeComponent = <LacakProses props={datadisposisi} />;
        break;
      case `komposer${ids}`:
        activeComponent = <Komposer props={datadisposisi} />;
        break;
      case `template${ids}`:
        activeComponent = <Template props={datadisposisi} />;
        break;
      case `surat masuk${ids}`:
        activeComponent = <SuratMasuk props={datadisposisi} />;
        break;
      case `folder${ids}`:
        activeComponent = <Folder props={datadisposisi} />;
        break;
      case `buka folder${ids}`:
        activeComponent = <ListData props={datadisposisi} />;
        break;
      case `log scan surat${ids}`:
        activeComponent = <DetailScanSurat props={datadisposisi} />;
        break;
      case `surat diminta${ids}`:
        activeComponent = <SuratDiminta props={datadisposisi} />;
        break;
      case `surat terkirim${ids}`:
        activeComponent = <SuratTerkirim props={datadisposisi} />;
        break;
      case `surat dibatalkan${ids}`:
        activeComponent = <SuratDibatalkan props={datadisposisi} />;
        break;
      default:
        break;
    }

    if (activeComponent) {
      return activeComponent;
    }
  }

  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <img src={noPtl} alt='belum memilih' />
      <Typography fontWeight={'700'}>Tidak ada yang dipilih</Typography>
    </Stack>
  );
};

export default BelumPilih;
BelumPilih.propTypes = {
  check: PropTypes.string,
  ids: PropTypes.number,
};
