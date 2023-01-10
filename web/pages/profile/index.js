import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import ProfileCarousel from "../../components/ProfileCarousel";
import WorkshopList from "../../components/WorkshopsList";
import getProfileData from "../../requests/getProfileData";

import { COOKIENAME } from "../../config/cookie.config";
export async function getServerSideProps(context) {
  const cookies = context.req.cookies;

  const { result } = await getProfileData(cookies[COOKIENAME]);

  return {
    props: {
      profile: result[0],
    }, // will be passed to the page component as props
  };
}

export default function ProfilePage({ profile }) {
  return (
    <>
      <Header />
      <ProfileCarousel />
      <Profile profile={profile} />
      <WorkshopList />
      <Footer />
    </>
  );
}
