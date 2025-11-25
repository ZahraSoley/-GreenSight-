import { AboutSection } from "./components/AboutSection"
import { Collections } from "./components/Collections"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import InHomes from "./components/InHomes"
import Journal from "./components/Journal"
import { NewArrivals } from "./components/NewArrivals"
import { Quality } from "./components/Quality"



const Main = () => {
    return (
        <>
            <Header />
            <Hero />
            <Collections />
            <NewArrivals />
            <AboutSection />
            <Quality />
            <InHomes />
            <Journal />
            <Footer />
        </>
    )
}

export default Main