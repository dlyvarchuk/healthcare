export class PatientVisit {
  constructor(
    public _id: string = '',
    public patient_id: string = '',
    public visit_id: string = '',
    public diagnosis_id: string = '',
    public reported_date: string = '',
    public notes: string = '',
    public is_high_risk: boolean = false,
    public is_contagious: boolean = false,
    public is_deleted: boolean = false,
    public deleted_date: string = ''
  ) {
  }
}
