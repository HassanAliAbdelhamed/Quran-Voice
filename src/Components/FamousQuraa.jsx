import { Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ActionAreaCard from "./Mui_Paper"
import '../App.css'

function FamousQuraa() {
    return (
        <>
        <Typography sx={{textAlign:'start', color:'white' , marginBottom:'20px'   }} variant="h6" noWrap component="h6">
            مشاهير القراء.. القراء الراحلين...
        </Typography>
            <Grid container sx={{ width: "100%", position: 'relative' }}>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/1`}><ActionAreaCard imgSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7W44WlZUIap5G-EC5ZzQghzHqXsr6IbXYHQ&s' title="محمد صديق المنشاوي" /></Link>
                </Grid>
                
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/2`}><ActionAreaCard imgSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJ6vimHwhywP7B1359t-f3HhZp2xIs5Rkxd1fOKS75XQMuJtij9PTABUNUh521OXsZrc&usqp=CAU' title="عبدالباسط عبدالصمد" /></Link>
                </Grid>


                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/10`}><ActionAreaCard imgSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4Dt8Z3ucilJFa9KRzgx4vywS5eRt4nSuA9ubV5gOng&s' title="محمود خليل الحصري" /></Link>
                </Grid>

                
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/17`}><ActionAreaCard imgSource='https://upload.wikimedia.org/wikipedia/ar/thumb/0/08/%D9%85%D8%AD%D9%85%D8%AF_%D9%85%D8%AD%D9%85%D9%88%D8%AF_%D8%A7%D9%84%D8%B7%D8%A8%D9%84%D8%A7%D9%88%D9%8A.jpeg/280px-%D9%85%D8%AD%D9%85%D8%AF_%D9%85%D8%AD%D9%85%D9%88%D8%AF_%D8%A7%D9%84%D8%B7%D8%A8%D9%84%D8%A7%D9%88%D9%8A.jpeg' title="محمد الطبلاوي" /></Link>
                </Grid>

                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/4`}><ActionAreaCard imgSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfGU01smZhvMqnQh_Udzqg-Wrsg2ivQw4pL_sT0ke-psGjpMPC9vp5z3DX5k3Rewb0mM&usqp=CAU' title="محمد رفعت" /></Link>
                </Grid>
            </Grid>

        <Typography sx={{textAlign:'start', color:'white',  marginBottom:'20px' , marginTop:"60px" }} variant="h6" noWrap component="h6">
        قراء المسجد الحرام...
        </Typography>
            <Grid container sx={{ width: "100%", position: 'relative' }}>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/3`}><ActionAreaCard imgSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT349d1-CAfOvcn6APnfI1c58Kwth0_WCOblxAbkSoIhvY39tevJUd40t90ZCx6DfRGQa0&usqp=CAU' title="ياسر الدوسري" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/6`}><ActionAreaCard imgSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUPlJ0sNVA_d2Tsfngn1w4RIZkNQaiBDIQeGmVEG5zPZ9MF82a6G5p-iw7s-fKH_Ny4A&usqp=CAU' title="ناصر القطامي" /></Link>
                </Grid> 
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/26`}><ActionAreaCard imgSource='https://mf.b37mrtl.ru/media/pics/2023.08/original/64d7ceed4236046a8c41c7e5.jpg' title="ماهر المعيقلي" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/12`}><ActionAreaCard imgSource='https://marsalqatar.qa/uploads/images/2023/08/Zt4GH.webp' title="عبد الرحمن السديس" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/24`}><ActionAreaCard imgSource='https://ar.assabile.com/media/photo/full_size/ali-jaber-100.jpg' title="علي جابر" /></Link>
                </Grid>
            </Grid>

        <Typography sx={{textAlign:'start', color:'white', marginBottom:'20px' , marginTop:"60px" , padding:'14px' }} variant="h6" noWrap component="h6">
        أشهر القراء في الوطن العربي...
        </Typography>
                <Grid container sx={{ width: "100%", position: 'relative' }}>
                    <Grid item xs={6} sm={3} xl={2} gap={1} >
                        <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/8`}><ActionAreaCard imgSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-TMYYs2FwOoOWJ8Qd7elgRbXcEmaztu8M9Q9mBVEcQ&s' title="مشاري راشد" /></Link>
                    </Grid>
                    <Grid item xs={6} sm={3} xl={2} gap={1} >
                        <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/11`}><ActionAreaCard imgSource='https://i.pinimg.com/564x/b0/6d/0a/b06d0ab8c14d68b6a70714fa409cc392.jpg' title=" محمد نورين صديق" /></Link>
                    </Grid> 
                </Grid>
        </>
    )
}   
export default FamousQuraa