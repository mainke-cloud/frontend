import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppTooltip from '@crema/components/AppTooltip';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { onUpdateSelectedMail } from '../../../../../toolkit/actions';

const MailDetailHeader = (props) => {
  const { selectedMail } = props;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const labelList = useSelector(({ mailApp }) => mailApp.labelList);

  const [isLabelOpen, onOpenLabel] = React.useState(null);

  const [isMoreIcon, onOpenMoreIcon] = React.useState(null);

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onLabelOpen = (event) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  const onViewMoreOpen = (event) => {
    onOpenMoreIcon(event.currentTarget);
  };

  const onViewMoreClose = () => {
    onOpenMoreIcon(null);
  };

  const onSelectLabel = (event) => {
    const labelType = labelList.find(
      (label) => label.id === event.target.value,
    );
    dispatch(onUpdateSelectedMail({ ...selectedMail, label: labelType }));
    onOpenLabel(null);
  };

  const onChangeMailFolder = (type) => {
    dispatch(onUpdateSelectedMail({ ...selectedMail, folderValue: type }));
    navigate(-1);
  };

  const onChangeReadStatus = () => {
    dispatch(onUpdateSelectedMail({ ...selectedMail, isRead: false }));
    navigate(-1);
  };

  const onChangeStarredStatus = () => {
    dispatch(
      onUpdateSelectedMail({
        ...selectedMail,
        isStarred: !selectedMail.isStarred,
      }),
    );
    onOpenMoreIcon(null);
  };

  if (!selectedMail) return null;
  return (
    <>
      <AppTooltip title={<IntlMessages id='common.back' />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={onClickBackButton}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </AppTooltip>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AppTooltip title={<IntlMessages id='common.archive' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={() => onChangeMailFolder(127)}
          >
            <ArchiveOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id='common.reportSpam' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={() => onChangeMailFolder(125)}
          >
            <InfoOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id='common.trash' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={() => onChangeMailFolder(126)}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id='mailApp.markAsUnread' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={() => onChangeReadStatus()}
          >
            <MarkunreadOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id='common.label' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            value={1}
            onClick={onLabelOpen}
          >
            <LabelOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <Menu
          anchorEl={isLabelOpen}
          open={Boolean(isLabelOpen)}
          onClose={onLabelClose}
        >
          {labelList.map((label) => {
            return (
              <MenuItem onClick={onSelectLabel} value={label.id} key={label.id}>
                {label.name}
              </MenuItem>
            );
          })}
        </Menu>
      </Box>

      <Box
        sx={{
          ml: 'auto',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AppTooltip title={<IntlMessages id='common.more' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={onViewMoreOpen}
          >
            <MoreVertIcon />
          </IconButton>
        </AppTooltip>

        <Menu
          anchorEl={isMoreIcon}
          open={Boolean(isMoreIcon)}
          onClose={onViewMoreClose}
        >
          <MenuItem onClick={onChangeReadStatus}>
            <IntlMessages id='mailApp.markAsUnread' />
          </MenuItem>
          <MenuItem onClick={onChangeStarredStatus}>
            {selectedMail.isStarred ? (
              <IntlMessages id='mailApp.markAsNotImportant' />
            ) : (
              <IntlMessages id='mailApp.markAsImportant' />
            )}
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default MailDetailHeader;

MailDetailHeader.propTypes = {
  selectedMail: PropTypes.object.isRequired,
  onUpdateSelectedMail: PropTypes.func,
};
