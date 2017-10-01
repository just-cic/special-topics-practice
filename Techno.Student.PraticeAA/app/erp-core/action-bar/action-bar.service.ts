import { Subject } from 'rxjs/Subject';

export class ActionBarService {

    // Common Actions
    public static SAVE_ACTION = { code: 1, name: 'حفظ', icon: 'fa fa-floppy-o' };
    public static PRINT_ACTION = { code: 2, name: 'طباعة', icon: 'fa fa-print', children: null };
    public static EXIT_ACTION = { code: 3, name: 'خروج', icon: 'fa fa-sign-out' };
    public static REFRESH_ACTION = { code: 4, name: 'تحديث', icon: 'fa fa-refresh' };
    public static SEARCH_ACTION = { code: 5, name: 'بحث', icon: 'fa fa-search' };
    public static GO_BACK_ACTION = { code: 6, name: 'رجوع', icon: 'fa fa-arrow-right' };
    public static DELETE_ACTION = { code: 7, name: 'حذف', icon: 'fa fa-trash-o' };
    public static SHOW_REPORT_ACTION = { code: 8, name: 'عرض التقرير', icon: 'fa fa-file-pdf-o' };
    public static EXPORT_EXCEL_ACTION = { code: 9, name: 'تصدير إلى Excel', icon: 'fa fa-file-excel-o' };

    public allowedActions: Subject<any[]> = new Subject();
    private takenAction: Subject<any> = new Subject();

    private currentActions: any[];

    public reset() {
        //Called by TransactionComponent
        //Raise event to be catched by ActionBarComponent to enable and disable buttons
        //Or the actionBar can be a local variable here
        return this.setActions([]);
    }

    public setActions(actions: any[]) {
        this.currentActions = actions;

        this.allowedActions.next(this.currentActions);

        this.takenAction.complete();
        this.takenAction.unsubscribe();
        this.takenAction = new Subject();

        return this.takenAction;
    }

    public listen(): Subject<any> {
        return this.takenAction;
    }

    public takeAction(action: any) {
        //Called by ActionBar
        //Raise event to be catched by TransactionComponent to save, print, ...
        this.takenAction.next(action);
    }
}
