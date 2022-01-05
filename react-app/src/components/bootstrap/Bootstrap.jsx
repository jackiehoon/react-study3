import Accordion from "./Accordion";
import { accordionData, carouselData } from "../../data";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";

const Bootstrap = () => {
  return (
    <div style={{ paddingLeft: 200 }}>
      <Accordion data={accordionData} />
      <Dropdown />
      <Carousel data={carouselData} />
    </div>
  );
};

export default Bootstrap;
