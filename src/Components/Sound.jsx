import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useParams } from 'react-router-dom';
import quraa from '../quraa';
import '../css/style.css'
function Player() {
  let par = useParams();
  let swara = par.swara;
  let id = par.id;
  return (
    <>
      <div><img  className='img' src={quraa[id].img} style={{ background:"white",borderRadius:'40%', maxWidth:'100%' , width:'50%' , height:'50%'}} alt="" /></div>
      <AudioPlayer
        style={{direction:"ltr", background:'#373535',borderRadius:'14px',position:'absolute',bottom:'5px',left:'0'}}
        autoPlay
        loop={true}
        showJumpControls
        src={quraa[id].Audiosource+swara+".mp3"}
      />
    </>
  )
}
export default Player;