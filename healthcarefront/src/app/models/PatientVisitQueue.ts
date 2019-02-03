export class PatientVisitQueue {
  constructor (
    public _id: string = '',
    public patient_id: string = '',
    public visit_id: string = '',
    public queue_member: string = '',
    public staff_id: string = '',
    public date_time: string = '',
    public is_deleted: boolean = false,
    public deleted_date: string = ''
  ) {

  }
}
