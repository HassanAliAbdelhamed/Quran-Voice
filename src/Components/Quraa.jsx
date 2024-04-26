import * as React from 'react';
import { Box, Grid } from '@mui/material';
import ActionAreaCard from './Mui_Paper';


import quraa from '../quraa';
import { Link } from 'react-router-dom';
export default function Quraa() {
    const drawerWidth = 340;
    return (
            <Grid container sx={{ width: "100%", position: 'relative' }}>
                {quraa.map(qara => (
                    <Grid item xs={6} sm={3} xl={2} gap={1} key={qara.id}>
                        <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} ID={qara.id} to={`/${qara.id}`}><ActionAreaCard imgSource={qara.img} title={qara.title} /></Link>
                    </Grid>
                ))}
            </Grid>
        );
}