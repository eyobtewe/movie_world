import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
   root:{
    display:'flex',
    height:'100%',
   } ,
   toolbar:{height:'70px'},
   content:{
    flexGrow: 1,
    padding: '2em',
   }
}));


