export class Patient {
  constructor(
    public _id: string = '',
    public first_name: string = '',
    public middle_name: string = '',
    public last_name: string = '',
    public date_of_birth: string = '',
    public country_of_birth: string = '',
    public city_of_birth: string = '',
    public gender: string = '',
    public registration_id: string = '',
    public id_card: string = '',
    public tin_id: string = '',
    public image_url: string = '',
    public is_deleted: boolean = false,
    public deleted_date: string = ''
  ) {

  }
}
