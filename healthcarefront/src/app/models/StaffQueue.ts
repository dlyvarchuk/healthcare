export class StaffQueue {
  constructor (
    public _id: string = '',
    public staff_id: string = '',
    public queue_member: string = '',
    public date_time: string = '',
    public is_completed: boolean = false,
    public is_deleted: boolean = false,
    public deleted_date: string = ''
  ) {

  }
}
