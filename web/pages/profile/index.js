import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import ProfileCarousel from "../../components/ProfileCarousel";
import WorkshopList from "../../components/WorkshopsList";
import getProfileData from "../../requests/getProfileData";
import getAllWorkshops from "../../requests/getAllWorkshops";

import { COOKIENAME } from "../../config/cookie.config";
export async function getServerSideProps(context) {
  const cookies = context.req.cookies;

  const { result } = await getProfileData(cookies[COOKIENAME]);
  console.log(result[0]);
  var workshopList = await getAllWorkshops(cookies[COOKIENAME]);
  for (let i = 0; i < workshopList.result.length; i++) {
    if (workshopList.result[i].workshopManagerId != result[0].id) {
      workshopList.result.splice(i, 1);
      i--;
    }
  }
  result[0].workshopList = workshopList.result;
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
      <ProfileCarousel logo={profile.logo} />
      <Profile profile={profile} />
      <WorkshopList workshopList={profile.workshopList} />
      <Footer />
    </>
  );
}
