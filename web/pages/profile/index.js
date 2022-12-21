import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import ProfileCarousel from "../../components/ProfileCarousel";
import WorkshopList from "../../components/WorkshopsList";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { COOKIENAME } from "../../config/cookie.config";

export default function ProfilePage() {
  const router = useRouter();
  useEffect(() => {
    const token = Cookie.get(COOKIENAME);
    if (token == "" || token == undefined) {
      router.push("/login");
    }
  }, []);
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
