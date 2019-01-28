export class StaffSchedule {
  constructor (
    public _id: string = '',
    public staff_id: string = '',
    public name: string = '',
    public surname: string = '',
    public working_hours: string = '',
    public working_days: string = '',
    public on_vacation: boolean = false,
    public sick_leave: boolean = false,
    public day_off: boolean = false,
    public is_deleted: boolean = false,
    public deleted_date: string = ''
  ) {

  }
}
