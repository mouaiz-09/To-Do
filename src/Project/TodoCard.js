import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {lightBlue} from "@mui/material/colors"
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';


/* icons  */
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditOffRoundedIcon from '@mui/icons-material/EditOffRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function TodoCard({Titel ="...",des ='~~~~~~~',statue}) {
  
  return (
    <Card   style={
        {
           width:"100% ",
           background:lightBlue[800]
           ,maxHeight:"100px",
           overflow:"hidden",
           display:"flex",
           justifyContent:"space-between"
        }
         } >
      <CardContent >
        <Typography  sx={{ color: 'whitesmoke', fontSize: 25 }}> { Titel} </Typography>
        <Typography  fontSize={14} color='textPrimary'>{des}</Typography>
       
      </CardContent>
      <CardActions>
   
      <div>

      <Checkbox {...label}
      icon={<CheckCircleOutlineOutlinedIcon  fontSize='medium'    />}
       checkedIcon={<CheckCircleIcon  fontSize='large'  color='success'  />} />

      <Checkbox {...label}
        icon={< EditOutlinedIcon  fontSize='medium'/>}
        checkedIcon={<EditOffRoundedIcon  color='info' fontSize='large' />}
      />
      <Checkbox {...label}
        icon={< DeleteOutlineRoundedIcon color='warning'   fontSize='medium'/>}
        checkedIcon={<DeleteRoundedIcon  color='error'   fontSize='large' />}
      />
    </div>
  

      </CardActions>
    </Card>
  );
}
