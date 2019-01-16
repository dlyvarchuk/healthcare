export class Users {
  constructor (
    public _id: string = '',
    public user_type_id: number = 0,
    public login_name: string = '',
    public Password: string = '',
    public login_date: string = '',
    public is_deleted: boolean = false,
    public deleted_date: string = ''
  ) {

  }
}
