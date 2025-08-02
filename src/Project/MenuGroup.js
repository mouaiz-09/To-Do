import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button  style={{borderRadius:"7px  0px 0px 0px" }} key="one">ALL Tasks</Button>,
  <Button  style={{borderRadius:"0px  0px 0px 0px" }} key="two">Comleted</Button>,
  <Button  style={{borderRadius:"0px  0px 0px 0px" }} key="three">NotCompleted</Button>,
];

export default function MenuGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          marginTop: 0
        },
      }}
    >

      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="contained"
        style={{width:"100%"}}
        color='primary'
      >
        {buttons}
      </ButtonGroup>
     
    </Box>
  );
}