import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import ProfileCarousel from "../../components/ProfileCarousel";
import WorkshopList from "../../components/WorkshopsList";
import getAllWorkshops from "../../requests/getAllWorkshops";
import getAllReviews from "../../requests/getAllReviews";

import { COOKIENAME } from "../../config/cookie.config";
export async function getServerSideProps(context) {
  const cookies = context.req.cookies;

  var workshops = await getAllWorkshops(cookies[COOKIENAME]);
  var reviews = await getAllReviews(cookies[COOKIENAME]);

  return {
    props: {
      workshops: workshops.result,
      reviews: reviews.result,
    }, // will be passed to the page component as props
  };
}

export default function AdminPage({ workshops, reviews }) {
  return (
    <>
      <Header />
      <WorkshopList />
      <Footer />
    </>
  );
}
