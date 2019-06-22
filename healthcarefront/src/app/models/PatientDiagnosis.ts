export class PatientDiagnosis {
  constructor(
    public _id: string = '',
    public patient_id: string = '',
    public diagnosis_id: string = '',
    public diagnosis_name: string = '',
    public reported_date: string = '',
    public reported_staff_id: string = '',
    public is_deleted: boolean = false,
    public deleted_date: string = ''
  ) {
  }
}
