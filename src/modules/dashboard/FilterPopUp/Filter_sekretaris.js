import React from "react";

export default function Filter_sekretaris({ open, onClose }) {

    const [statusFilter, setStatusFilter] = React.useState(null);

    const handleStatusFilter = (value) => {
      setStatusFilter(value);
    };
    return(
        <>
             <Popover
                open={open}
                // anchorEl={openFilter}
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    '& .MuiPopover-paper': {
                    width: 450,
                    },
                }}
                >

                </Popover>
        </>
    )
}

Filter_sekretaris.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
