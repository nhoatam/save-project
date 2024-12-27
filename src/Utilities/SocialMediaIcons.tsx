const FACEBOOK_LINK = "https://www.facebook.com";
const BEHANCE_LINK = "https://www.behance.net";
const YOUTUBE_LINK = "https://www.youtube.com";
const LINKEDIN_LINK = "https://www.linkedin.com";

import {
  IconBehance,
  IconFacebook,
  IconLinkedin,
  IconYoutube,
} from "../Constants/icons";

const SocialMediaIcons = () => {
  return (
    <>
      <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
        <IconFacebook className="size-8 transition-transform duration-200 hover:scale-125" />
      </a>
      <a href={BEHANCE_LINK} target="_blank" rel="noopener noreferrer">
        <IconBehance className="size-8 transition-transform duration-200 hover:scale-125" />
      </a>
      <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer">
        <IconYoutube className="size-8 transition-transform duration-200 hover:scale-125" />
      </a>
      <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
        <IconLinkedin className="size-8 transition-transform duration-200 hover:scale-125" />
      </a>
    </>
  );
};

export default SocialMediaIcons;
