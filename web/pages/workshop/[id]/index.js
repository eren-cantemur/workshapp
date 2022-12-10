import Comments from "../../../components/Comments";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import WorkshopCarousel from "../../../components/WorkshopCarousel";
import WorkshopDetail from "../../../components/WorkshopDetail";

export default function WorkshopPage () {
    return (
        <>
        <Header />
        <WorkshopCarousel />
        <WorkshopDetail />
        <Comments />
        <Footer />
        </>
    )
}