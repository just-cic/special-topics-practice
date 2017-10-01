"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = require("rxjs/Subject");
class ActionBarService {
    constructor() {
        this.allowedActions = new Subject_1.Subject();
        this.takenAction = new Subject_1.Subject();
    }
    reset() {
        //Called by TransactionComponent
        //Raise event to be catched by ActionBarComponent to enable and disable buttons
        //Or the actionBar can be a local variable here
        return this.setActions([]);
    }
    setActions(actions) {
        this.currentActions = actions;
        this.allowedActions.next(this.currentActions);
        this.takenAction.complete();
        this.takenAction.unsubscribe();
        this.takenAction = new Subject_1.Subject();
        return this.takenAction;
    }
    listen() {
        return this.takenAction;
    }
    takeAction(action) {
        //Called by ActionBar
        //Raise event to be catched by TransactionComponent to save, print, ...
        this.takenAction.next(action);
    }
}
// Common Actions
ActionBarService.SAVE_ACTION = { code: 1, name: 'حفظ', icon: 'fa fa-floppy-o' };
ActionBarService.PRINT_ACTION = { code: 2, name: 'طباعة', icon: 'fa fa-print', children: null };
ActionBarService.EXIT_ACTION = { code: 3, name: 'خروج', icon: 'fa fa-sign-out' };
ActionBarService.REFRESH_ACTION = { code: 4, name: 'تحديث', icon: 'fa fa-refresh' };
ActionBarService.SEARCH_ACTION = { code: 5, name: 'بحث', icon: 'fa fa-search' };
ActionBarService.GO_BACK_ACTION = { code: 6, name: 'رجوع', icon: 'fa fa-arrow-right' };
ActionBarService.DELETE_ACTION = { code: 7, name: 'حذف', icon: 'fa fa-trash-o' };
ActionBarService.SHOW_REPORT_ACTION = { code: 8, name: 'عرض التقرير', icon: 'fa fa-file-pdf-o' };
ActionBarService.EXPORT_EXCEL_ACTION = { code: 9, name: 'تصدير إلى Excel', icon: 'fa fa-file-excel-o' };
exports.ActionBarService = ActionBarService;
//# sourceMappingURL=action-bar.service.js.map