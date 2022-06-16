//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";

const swLinks = [
    {
      url: "https://www.facebook.com/StarWars",
      name: "facebook_logo",
      component: <FacebookLogoSVG />,
    },
    {
      url: "https://www.instagram.com/starwars/",
      name: "instagram_logo",
      component: <InstagramLogoSVG />,
    },
    {
      url: "https://twitter.com/starwars",
      name: "twitter_logo",
      component: <TwitterLogoSVG />,
    },
    {
      url: "https://www.youtube.com/user/starwars",
      name: "youtube_logo",
      component: <YoutubeLogoSVG />,
    },
];

export const Footer = () => {
    return (
        <footer>
            <div className="followStar">FOLLOW STAR WARS:</div>
            <div className="links-layout">
                {swLinks.map((link) => (
                    <a
                        key={link.name}
                        className="link"
                        href="_blank"
                        alt={link.name}
                        rel="noreferrer"
                    >
                        {link.component}
                    </a>
                ))}
            </div>
            <div>TM & © Lucasfilm Ltd. All Rights Reserved</div>
            <div style={{padding: '20px'}}>
                <a href="http://disneytermsofuse.com/" style={{color: 'white', textDecoration: 'none', paddingRight: '10px', paddingLeft: '10px'}}>Terms of Use  </a> |
                <a href="http://disney.go.com/guestservices/legalnotices?ppLink=pp_wdig" style={{color: 'white', textDecoration: 'none', paddingRight: '10px', paddingLeft: '10px'}}> Additional Content Information  </a> |
                <a href="http://disneyprivacycenter.com/" style={{color: 'white', textDecoration: 'none', paddingRight: '10px', paddingLeft: '10px'}}> Privacy Policy  </a> |
                <a href="https://disneyprivacycenter.com/kids-privacy-policy/english/" style={{color: 'white', textDecoration: 'none', paddingRight: '10px', paddingLeft: '10px'}}> Children`s Online Privacy Policy  </a> |
                <a href="https://disneyprivacycenter.com/notice-to-california-residents/" style={{color: 'white', textDecoration: 'none', paddingRight: '10px', paddingLeft: '10px'}}> Your California Privacy Rights  </a> |
                <a href="https://www.shopdisney.com/franchises/star-wars/?CMP=SYN-Dcom&att=StarWars_Footer_Store" style={{color: 'white', textDecoration: 'none', paddingRight: '10px', paddingLeft: '10px'}}> Star Wars at shopDisney  </a> 
                
            </div>

        </footer>
    )
}