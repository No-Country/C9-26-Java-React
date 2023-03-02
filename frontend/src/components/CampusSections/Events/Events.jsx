import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './Events.css'
import './base.css'

const events = [
  { title: 'Inicio inscripciones', start: new Date('2023-03-1') },
  { title: 'Cierre inscripciones', start: new Date('2023-03-20') },
  { title: 'Seminario c/ Laura Lewin', start: new Date('2023-03-25') },
  { title: 'Reunion nuevos alumnos', start: new Date('2023-03-30') },
]

function Events() {
  return (
    <div className='events'>
      <h3 className='text-white text-center fs-5 pb-3'>Calendario de eventos, exámenes y actividades.</h3>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          locale='es'
          weekends={false}
          events={events}
          eventContent={renderEventContent}
          displayEventTime={false}
          buttonText={{
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
            list: 'Lista'
          }}
          headerToolbar={{
            left: 'today prev,next',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
          }}
        />
      </div>
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default Events