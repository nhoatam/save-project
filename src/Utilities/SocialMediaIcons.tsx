const FACEBOOK_LINK = "https://www.facebook.com";
const BEHANCE_LINK = "https://www.behance.net";
const YOUTUBE_LINK = "https://www.youtube.com";
const LINKEDIN_LINK = "https://www.linkedin.com";

import iconFacebook from "../assets/pictures/icon-facebook.png";
import iconBehance from "../assets/pictures/icon-behance.png";
import iconYoutube from "../assets/pictures/icon-youtube.png";
import iconLinkedIn from "../assets/pictures/icon-linkedin.png";

const SocialMediaIcons = () => {
  return (
    <>
      <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
        <img
          src={iconFacebook}
          alt="icon facebook"
          className="size-8 transition-transform duration-200 hover:scale-110"
        />
      </a>
      <a href={BEHANCE_LINK} target="_blank" rel="noopener noreferrer">
        <img
          src={iconBehance}
          alt="icon behance"
          className="size-8 transition-transform duration-200 hover:scale-110"
        />
      </a>
      <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer">
        <img
          src={iconYoutube}
          alt="icon youtube"
          className="size-8 transition-transform duration-200 hover:scale-110"
        />
      </a>
      <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
        <img
          src={iconLinkedIn}
          alt="icon linkedin"
          className="size-8 transition-transform duration-200 hover:scale-110"
        />
      </a>
    </>
  );
};

export default SocialMediaIcons;
