import React from "react"
import { Chrono } from "react-chrono";
  
export const Timeline = () => {
    const items = [{
        title: "2021",
        cardTitle: "Henry",
        cardSubtitle:"Teaching Assistant",
        cardDetailedText: "Coordinate a group of students to achieve integration to the study group. Guide students in the first steps of the course and assist to solve exercises and promote group collaboration (Pair Programming).",
    },{
        title: "2019-2021",
        cardTitle: "TheSideliner",
        cardSubtitle:"Designer and illustrator",
        cardDetailedText: "Development of designs and illustrations to go with the weekly post of the company's newsletter.",
    },{
        title: "2019",
        cardTitle: "Pizza Piazza Pizza Shop",
        cardSubtitle:"Manager and cashier",
        cardDetailedText: "Responsible for ensuring orders are correct before and after preparation, and for processing customer payments. Take pizza orders in person and over the phone. Responsible for customer service and for ensuring that employees follow health and safety regulations.",
      }];

    return (
      <div style={{ width: "40vw", height: "70vh" }}>
        <Chrono items={items}
        mode="VERTICAL_ALTERNATING"
        slideShow
        hideControls
        onScrollEnd
        theme={{ 
            primary: "#ff5a00",
            secondary: "#3690d5",
            cardBgColor: "#393e46",
            cardForeColor: "white",
            titleColor: "white"
          }}
        useReadMore={false}/>
      </div>
    )
}

export default Timeline;