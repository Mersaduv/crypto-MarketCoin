import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FiSearch } from "react-icons/fi";
import SearchAutoComplate from '../SearchAutoComplate';
import { useEnterState } from '@/src/context/enterState';
import { Hidden } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  height: "100%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  // const [open, setOpen] = React.useState(false);
  const { openEnter, setOpenEnter } = useEnterState()

  const handleOpen = () => setOpenEnter(true);
  const handleClose = () => setOpenEnter(false);

  return (
    <div className=''>

      <button className='p-0 m-0 ' onClick={handleOpen}>
        <FiSearch

          size="22px"
        /></button>
      <Modal
        open={openEnter}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id='cancel' onClick={() => setOpenEnter(prev => !prev)} className='font-bold p-[5px] rounded-md text-black bg-gray-100 hover:bg-gray-200 cursor-pointer absolute right-3 top-9 inline-block text-sm  ' variant="h6" component="h2">
            انصراف
          </Typography>
          <SearchAutoComplate />
        </Box>
      </Modal>


    </div>
  );
}