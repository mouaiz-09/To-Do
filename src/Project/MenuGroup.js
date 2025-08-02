import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button key="one">ALL Tasks</Button>,
  <Button key="two">Comleted</Button>,
  <Button key="three">NotCompleted</Button>,
];

export default function MenuGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
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