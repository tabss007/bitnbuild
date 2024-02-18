import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import "../styles/dateStyle.css"
const Calender = () => {
  return (
    <div className='.fc-daygrid-day'> <FullCalendar
    plugins={[dayGridPlugin, interactionPlugin]}
    headerToolbar={false}
    initialView="dayGridMonth"
    contentHeight="600"
    //events={calendarDataCalendar}
    editable={true}
    minHeight="400px"
    height="400px"
    slotWidth={10}
    customIcons={false}/>
    </div>
  )
}

export default Calender