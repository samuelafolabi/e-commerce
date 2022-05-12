import { useState } from "react";
import IphonesCard from "./Iphonescard";
import Dataphones from "../Dataphones";
import AirpodsCard from "./Airpodscard";
import DataAirpods from "../DataAirpods";
import IwatchesCard from "./Iwatchescard";
import DataIwatches from "../DataIwatches";

function Tabs() {
  const [toggleState, SetToggleState] = useState(1);

  const toggleTab = (index) => {
    SetToggleState(index);
  };
  // mapping data from Dataphones
  const cardsForIphones = Dataphones.map((item) => {
    return <IphonesCard key={item.id} {...item} />;
  });
  // mapping data from Dataairpods
  const cardsForAirpods = DataAirpods.map((item) => {
    return <AirpodsCard key={item.id} {...item} />;
  });
  // mapping data from Dataiwatches
  const cardsForIwatches = DataIwatches.map((item) => {
    return <IwatchesCard key={item.id} {...item} />;
  });

  return (
    <>
      <div className="tab-container">
        <div className="tabs">
          <div
            className={toggleState === 1 ? "tab  tab--active" : "tab"}
            onClick={() => toggleTab(1)}
          >
            iPhones
          </div>
          <div
            className={toggleState === 2 ? "tab  tab--active" : "tab"}
            onClick={() => toggleTab(2)}
          >
            Airpods
          </div>
          <div
            className={toggleState === 3 ? "tab  tab--active" : "tab"}
            onClick={() => toggleTab(3)}
          >
            iWatch
          </div>
        </div>
      </div>

      {/* TabContent */}
      <div className="tabcontent-container">
        {/* Tab Content 1 */}
        <div
          className={
            toggleState === 1 ? "tabcontent tabcontent--active" : "tabcontent"
          }
        >
          <section className="grid-container">{cardsForIphones}</section>
        </div>
        {/* Tab Content 2 */}
        <div
          className={
            toggleState === 2 ? "tabcontent tabcontent--active" : "tabcontent"
          }
        >
          <section className="grid-container">{cardsForAirpods}</section>
        </div>
        {/* Tab Content 3 */}
        <div
          className={
            toggleState === 3 ? "tabcontent tabcontent--active" : "tabcontent"
          }
        >
          <section className="grid-container">{cardsForIwatches}</section>
        </div>
      </div>
    </>
  );
}

export default Tabs;
