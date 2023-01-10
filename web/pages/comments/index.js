import CommentsTable from "../../components/CommentsTable";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { COOKIENAME } from "../../config/cookie.config";
import getAllReviews from "../../requests/getAllReviews";

export async function getServerSideProps(context) {
  const cookies = context.req.cookies;

  const { result } = await getAllReviews(cookies[COOKIENAME]);
  return {
    props: {
      reviewList: result,
    }, // will be passed to the page component as props
  };
}

export default function CommentsPage( { reviewList } ) {
  return (
    <>
      <Header />
      <CommentsTable reviewList={reviewList} />
      <Footer />
    </>
  );
}
