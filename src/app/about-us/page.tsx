import Header from "@/components/ui/Header"
import BannerAboutUs from "@/components/ui/BannerAboutUs"
import YesItSecurityAboutUs from "@/components/ui/YesItSecurity-about-us"
import MissionVision from "@/components/ui/Mission-vision"
import TrustBuilding from "@/components/ui/Trust-building"
import CallToActionAboutUs from "@/components/ui/CallToAction-About-us"
import Footer from "@/components/ui/Footer"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <BannerAboutUs />
        <YesItSecurityAboutUs />
        <MissionVision />
        <TrustBuilding />
        <CallToActionAboutUs />
      </main>
      <Footer />
    </div>
  )
}