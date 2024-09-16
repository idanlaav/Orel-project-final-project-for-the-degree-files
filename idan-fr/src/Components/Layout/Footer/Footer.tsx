import SocialMedia from "../../Shared/SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
			<p> All rights reserved to Orel Ovadia {year} &copy;</p>
            
            <SocialMedia facebook={true} twitter={true} youtube={true} tiktok={true}/>
        </div>
    );
}

export default Footer;
