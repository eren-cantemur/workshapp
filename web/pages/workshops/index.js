import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WorkshopsTable from "../../components/WorkshopsTable";
import { COOKIENAME } from "../../config/cookie.config";
import getAllWorkshops from "../../requests/getAllWorkshops";

export async function getServerSideProps(context) {
  const cookies = context.req.cookies;

  const { result } = await getAllWorkshops(cookies[COOKIENAME]);
  return {
    props: {
      workshopList: result,
    }, // will be passed to the page component as props
  };
}

export default function Workshops({ workshopList }) {
  return (
    <>
      <Header />
      <WorkshopsTable workshopList={workshopList} />
      <Footer />
    </>
  );
}
