        myCalendar = $('#calendar').fullCalendar({
            eventClick: function (calEvent, jsEvent, view) {
                openPopup("new_carrental", calEvent.id);
            },
            firstDay: 1,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'prevYear,month,agendaWeek,agendaDay'
            },
            timeFormat: 'h:mm{ - h:mm}',
            editable: false

        });
        
        //http://arshaw.com/fullcalendar/docs/
