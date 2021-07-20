export interface DialogInterface {
    cancelButtonLabel: string;
    confirmButtonLabel: string;
    dialogHeader: string;
    dialogContent: string;
    showCancelButton?: boolean;
    isError: boolean;
    okCallbackMethod: () => void;
    cancelCallbackMethod: () => void;
}
