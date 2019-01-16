export class Staff {
  constructor (
    public _id: string = '',
    public staff_id: string = '',
    public full_name: string = '',
    public phone: string = '',
    public email: string = '',
    public is_deleted: boolean = false,
    public deleted_date: string = ''
  ) {

  }
}
