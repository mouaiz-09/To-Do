import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { blue, blueGrey, purple, red } from '@mui/material/colors';


export default function MenuGroup({functionEditeFilter ,filter}) {
    function edet(value){
      console.log(value);
      
      functionEditeFilter(value)
    }
  
  const buttons = [
    <Button  onClick={()=>{edet("ALL"); }}       style={{borderRadius:"7px  0px 0px 0px", padding:"10px" , background: (filter =="ALL" ? blue[600] : "") }} key="one">ALL Tasks</Button>,
    <Button   onClick={()=>{edet("Not Completed"); }}   style={{borderRadius:"0px  0px 0px 0px", padding:"10px" ,background:  (filter =="Not Completed" ? "red" : "")  }} key="three">Not Completed</Button>,
    <Button  onClick={()=>{edet("Cpmleted"); }}   style={{borderRadius:"0px  0px 0px 0px", padding:"10px"  ,background: (filter =="Cpmleted" ? "green" : "")}} key="two">Completed</Button>,
  ];
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