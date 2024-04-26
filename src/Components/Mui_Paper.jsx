import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ width: 170 ,backgroundColor:"#373535", borderRadius:"14px", height: 170, marginTop: "15px", background: "transparent", cursor: "pointer", position: "relative"}}>
      <CardActionArea sx={{display:'flex' , flexDirection:"column", justifyContent:'center' , alignItems:"center"}}>
        <CardMedia
          component="img"
          sx={{ borderRadius: "50%", width: 120, height: 120 }}
          image={props.imgSource}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" color="white" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
