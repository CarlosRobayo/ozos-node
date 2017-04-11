window.onload = function () {

    var input = document.getElementById('fechaIni');

    input.addEventListener('blur', function () {
        if (this.value == '') {
            this.style.background = '#f2dede';
            this.className = 'form-control text-center animated shake';
        }
    });

    input.addEventListener('focus', function () {
        this.style.background = '#ffffff';
        this.className = 'form-control text-center';
    });

}