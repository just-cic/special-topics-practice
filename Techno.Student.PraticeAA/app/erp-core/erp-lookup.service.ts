
export class ErpLookupService {

    private itemsGraduateAdmissionDecisions: any[];
    private itemsGraduateAdmissionApplicationWorkflowStatus: any[];

    constructor() {

        this.itemsGraduateAdmissionDecisions = [];

        this.itemsGraduateAdmissionDecisions[0] = { code: 1, name: 'مقبول أصيل' };
        this.itemsGraduateAdmissionDecisions[1] = { code: 2, name: 'مقبول بديل' };
        this.itemsGraduateAdmissionDecisions[2] = { code: 3, name: 'غير مقبول' };

        //
        //
        //
        this.itemsGraduateAdmissionApplicationWorkflowStatus = [];

        this.itemsGraduateAdmissionApplicationWorkflowStatus[0] = { code: 100, name: 'جديد' };
        this.itemsGraduateAdmissionApplicationWorkflowStatus[1] = { code: 200, name: 'مدقق' };
        this.itemsGraduateAdmissionApplicationWorkflowStatus[2] = { code: 300, name: 'قيد الدراسة في القسم' };
        this.itemsGraduateAdmissionApplicationWorkflowStatus[3] = { code: 400, name: 'قرار مبدئي' };
        this.itemsGraduateAdmissionApplicationWorkflowStatus[4] = { code: 500, name: 'البت النهائي في الطلب' };
        this.itemsGraduateAdmissionApplicationWorkflowStatus[5] = { code: 2000, name: 'مقبول' };
        this.itemsGraduateAdmissionApplicationWorkflowStatus[6] = { code: 3000, name: 'مرفوض' };
    }

    public getItems(lookupName: string, options?: any) {
        if (lookupName.toLowerCase() == 'graduate-admission-decisions') {
            return this.itemsGraduateAdmissionDecisions;
        }
        else if (lookupName.toLowerCase() == 'graduate-admission-application-workflow-status') {
            return this.itemsGraduateAdmissionApplicationWorkflowStatus;
        }
        else {
            return [];
        }
    }

    public getItemName(lookupName: string, code: number) {

        var items: any[] = this.getItems(lookupName);

        for (var i = 0; i < items.length; i++) {
            if (items[i].code == code) return items[i].name;
        }

        return '';
    }
}
