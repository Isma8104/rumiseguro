import Swal from "sweetalert2";

export async function optionsWithDetails(
    title: string, html: string, width: number | string, confirmButtonText: string = '',
    cancelButtonText: string = '') {
    return await Swal.fire({
        title,
        html,
        type: 'info',
        width: `${width}px`,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonColor: '#2e2e2e',
        confirmButtonColor: 'cyan',
        confirmButtonText,
        cancelButtonText,
    }).then((result) => {
        if (result.value == true) {
            return true;
        }
        if (result.dismiss.toString() === 'cancel') {
            return false;
        }
    });
}

export async function showAlert(type, title, text, classBtn) {
    return await Swal.fire({
        title,
        text,
        type,
        buttonsStyling: false,
        confirmButtonClass: classBtn,
        allowOutsideClick: false
    }).then((_) => {
    });
}
