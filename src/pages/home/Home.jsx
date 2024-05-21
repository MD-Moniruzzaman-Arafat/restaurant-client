import CategorySlider from "../../components/categorySlider/CategorySlider";
import Slider from "../../components/slider/Slider";
import SectionTitle from "../shareComponent/SectionTitle";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle
          title1={"From 11:00am to 10:00pm"}
          title2={"ORDER ONLINE"}
        />
        <CategorySlider />
      </div>
    </div>
  );
}
