const startUp = () => {
    const buttonDarkTheme = document.querySelector('#btn-dark');
    const buttonLightTheme = document.querySelector('#btn-light');

    console.log(buttonDarkTheme, buttonLightTheme);

    
    //#region funciones
    // Funciones de accion para los eventos

    const toggleDarkTheme = (e) => {
        e.preventDefault();
        localStorage.setItem('localTheme', 'dark');
        document.documentElement.setAttribute('data-localTheme', 'dark');
    }

    const toggleLightTheme = (e) => {
        e.preventDefault();
        localStorage.setItem('localTheme', 'light');
        document.documentElement.setAttribute('data-localTheme', 'light');
    }

    //#endregion

    //#region eventos

    // Enlazamos el evento click con la función antes hecha

    buttonDarkTheme.addEventListener('click', toggleDarkTheme);
    buttonLightTheme.addEventListener('click', toggleLightTheme);

    //#endregion
}

document.addEventListener('DOMContentLoaded', startUp, false);