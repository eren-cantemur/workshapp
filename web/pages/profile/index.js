import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import ProfileCarousel from "../../components/ProfileCarousel";
import WorkshopList from "../../components/WorkshopsList";

export default function ProfilePage() {

  return (
    <>
      <Header />
      <ProfileCarousel />
      <Profile />
      <WorkshopList />
      <Footer />
    </>
  );
}
