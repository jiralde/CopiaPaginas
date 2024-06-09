document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('a').forEach((element) => {
        // Prevenir el clic central
        element.addEventListener('auxclick', (e) => {
            if (e.button === 1) { // 1 es el botón central del ratón
                e.preventDefault();
            }
        });

        // Prevenir combinaciones de teclas como Ctrl+Click y Command+Click
        element.addEventListener('click', (e) => {
            if (e.ctrlKey || e.metaKey || e.shiftKey) { // ctrlKey es Ctrl, metaKey es Command en Mac, shiftKey es Shift
                e.preventDefault();
            }
        });
    });
});