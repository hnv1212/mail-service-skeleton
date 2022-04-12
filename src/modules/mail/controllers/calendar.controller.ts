import { Controller, Post } from '@nestjs/common';
import { CalendarService } from '../services';

@Controller('calendar')
export class CalendarController {
    // $router->post('calendar', 'CalendarController@getList');
    // $router->post('calendar/events', 'CalendarController@getEventList');
    // $router->post('calendar/save-event', 'CalendarController@saveEvent');
    // $router->post('calendar/delete-event', 'CalendarController@deleteEvent');
    constructor(
        private readonly calendarService: CalendarService
    ) { }
    
    @Post() 
    getList() { }
    
    @Post()
    getEventList() { }
    
    @Post()
    saveEvent() { }
    
    @Post()
    deleteEvent() {}
}
