import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  activateTab,
  closeTab,
  reorderTab,
  setTabs,
} from '../redux/actions/tabAction';
import { Box } from '@mui/material';
import { Tabs } from '@sinm/react-chrome-tabs';
import './tab.css';
import Add_Delegasi from 'modules/dashboard/Add_Delegasi';
import Add_Sekretaris from 'modules/dashboard/Add_Sekretaris';
import SearchTab from 'modules/search/index';
import BuatScanSurat from 'modules/scanSurat/BuatScanSurat';
import Surat_Internal from 'modules/buatSurat/SuratInternal';
import Surat_External from 'modules/buatSurat/SuratExternal';
import Surat_Undangan from 'modules/buatSurat/SuratUndangan';
import Surat_Delegasi from 'modules/buatSurat/SuratDelegasi';
import BelumPilih from 'modules/suratKeluar/BelumPilih';
import Template from 'modules/suratKeluar/template/Template';
import Folder from 'modules/folder/index';
import Listdata from 'modules/folder/content/ListData';
import BuatTemplateSurat from 'modules/suratKeluar/template/buatTemplateSurat/index';
import Forward from 'modules/forward';
import Dashboard from 'modules/dashboard';
import Keamanan from 'modules/keamanan';
import Bantuan from 'modules/bantuan';
import Profile from 'modules/profile';
import BuatDisposisi from 'modules/disposisi/respons/BuatDisposisi';
import PDFReader from '@crema/components/PDFReader/PDFReader';
import homeIcon from '../assets/icon/home.svg';
import { getSurat } from '@crema/services/apis/surat';
import { useState } from 'react';

const Page = () => {
  const dispatch = useDispatch();
  const reduxTabs = useSelector((state) => state.tab.tabs);
  const [activeComponent, setActiveComponent] = React.useState(null);

  React.useEffect(() => {
    const tabsFromLocalStorage = localStorage.getItem('tabs');
    if (tabsFromLocalStorage) {
      const parsedTabs = JSON.parse(tabsFromLocalStorage);
      dispatch(setTabs(parsedTabs));
    } else {
      localStorage.setItem(
        'tabs',
        JSON.stringify([
          {
            id: 'dashboard',
            title: 'Dashboard',
            active: true,
            favicon: homeIcon,
          },
        ]),
      );
    }
  }, [dispatch]);

  const handleTabClose = (tabId) => {
    dispatch(closeTab(tabId, reduxTabs));
  };

  const handleTabReorder = (tabId, fromIndex, toIndex) => {
    dispatch(reorderTab(tabId, fromIndex, toIndex, reduxTabs));
  };

  const handleTabActive = (tabId) => {
    dispatch(activateTab(tabId, reduxTabs));
  };

  React.useEffect(() => {
    const activeTab = reduxTabs.find((tab) => tab.active);
    if (activeTab) {
      let component = null;
      const check = activeTab.title.toLowerCase() + activeTab.ids;
      switch (activeTab.id) {
        case 'dashboard':
          component = <Dashboard />;
          break;
        case 'keamanan':
          component = <Keamanan />;
          break;
        case 'faq':
          component = <Bantuan />;
          break;
        case 'profile':
          component = <Profile />;
          break;
        case 'buka folder':
          component = <Listdata />;
          break;
        case 'buatdisposisi':
          component = <BuatDisposisi />;
          break;
        case 'sekretaris':
          component = <Add_Sekretaris />;
          break;
        case 'delegasi':
          component = <Add_Delegasi />;
          break;
        case 'buat surat internal':
          component = <Surat_Internal />;
          break;
        case 'buat surat external':
          component = <Surat_External />;
          break;
        case 'buat surat undangan':
          component = <Surat_Undangan />;
          break;
        case 'buat surat delegasi':
          component = <Surat_Delegasi />;
          break;
        case 'buat scan surat':
          component = <BuatScanSurat />;
          break;
        case 'buka surat':
          component = <PDFReader />;
          break;
        case 'folder':
          component = <Folder />;
          break;
        case 'search':
          component = <SearchTab />;
          break;
        case 'template':
          component = <Template />;
          break;
        case 'buat template':
          component = <BuatTemplateSurat />;
          break;
        case 'forward':
          component = <Forward />;
          break;
        default:
          component = <BelumPilih check={check} ids={activeTab.ids} />;
          break;
      }
      setActiveComponent(component);
    }
  }, [reduxTabs]);

  const [surat, setSurat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSurat = async () => {
      try {
        const data = await getSurat();
        setSurat(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSurat();
  }, []);

  return (
    <>
      <Box sx={{ pl: 2 }}>
        <Tabs
          darkMode={false}
          onTabClose={handleTabClose}
          onTabReorder={handleTabReorder}
          onTabActive={handleTabActive}
          tabs={reduxTabs}
        />
        <Box sx={{ paddingTop: '42px' }}>{activeComponent}</Box>
      </Box>
    </>
  );
};

export default Page;
