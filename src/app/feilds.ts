export class Fields {
    fieldid: number;
    fieldname: string;
    fieldtype: string;
    sequence: number;
    submoduleid: number;
    rolecode: string;
    valuesholder: string;
    isactive: boolean;
  
    constructor() {
      this.fieldid = 0; // Example initialization
      this.fieldname = '';
      this.fieldtype = '';
      this.sequence = 0;
      this.submoduleid = 0;
      this.rolecode = '';
      this.valuesholder = '';
      this.isactive = false;
    }
  }
  