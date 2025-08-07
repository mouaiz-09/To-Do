import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function MassegeAlert({ id, value }) {
  
  function Result() {
    if (id == 1) {
      console.log(value);
      return <Alert severity="warning">تم الحدف بنجاح</Alert>;
    } else if (id ==2) {
      return <Alert severity="info"> تم التعديل  بنجاح</Alert>;
    } else if (id == 3) {
      return <Alert severity="success"> تم اﻹنشاء بنجاح</Alert>;
    } else return <Alert severity="error"> حدث خطأ  ,معذرة</Alert>;
  }

  return (
    <Stack style={{
      width:"auto",
      position:"fixed",
      bottom:'10px',
      left:"10px" , 
      zIndex:"300",
      
      filter:"bluer(2px)"
    }} spacing={2}>
      <Result/>
    </Stack>
  );
}
