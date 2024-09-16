import "./SocialMedia.css";
import { BsFacebook, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";
interface SocialMediaProps{
    facebook:boolean;
    twitter:boolean;
    youtube:boolean;
    tiktok:boolean;
  }


function SocialMedia(props:SocialMediaProps): JSX.Element {
    return (
        <div className="SocialMedia">
            <a href="https://www.facebook.com/Clalit/?locale=he_IL">{props.facebook && <BsFacebook size={36}/>}</a>
			<a href="https://twitter.com/ClalitHealth">{props.twitter && <BsTwitter size={36}/>}</a>
			<a href="https://www.youtube.com/channel/UC_3PHoN0bvZllj75WXa_z5Q">{props.youtube && <BsYoutube size={36}/>}</a>
			<a href="https://www.tiktok.com/@clalit_tiktok?lang=he-IL">{props.tiktok && <BsTiktok size={36}/>}</a>
        </div>
    );
}

export default SocialMedia;
