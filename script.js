// Carrusel automático con efecto de circulación
let carousel = document.querySelector('.carousel');
let images = carousel.children;
let index = 0;
let totalImages = images.length;

// Clonamos la primera imagen al final para crear el efecto de bucle
let firstImage = images[0].cloneNode(true);
carousel.appendChild(firstImage);

// Ajustamos el tamaño de las imágenes para que sean un poco más grandes
for (let image of images) {
    image.style.width = '80%'; // Cambiar el tamaño de las imágenes para que sean más grandes
    image.style.margin = '0 auto'; // Centrar las imágenes
}

// Cambiar el estilo del carrusel para que las imágenes siempre estén a la vista
carousel.style.display = 'flex';
carousel.style.width = '100%';
carousel.style.overflow = 'hidden';

setInterval(() => {
    index++;
    
    // Si llegamos al final de las imágenes, volvemos al inicio (con animación)
    if (index >= totalImages) {
        // Desactivamos la transición para un cambio instantáneo
        carousel.style.transition = 'none';
        index = 0;  // Reseteamos el índice al primer elemento
        carousel.style.transform = `translateX(0)`;
        
        // Forzamos un pequeño delay para reiniciar la transición
        setTimeout(() => {
            // Reactivamos la transición
            carousel.style.transition = 'transform 1s ease';
        }, 50);
    } else {
        // Si no hemos llegado al final, aplicamos la animación normal
        carousel.style.transform = `translateX(-${index * 80}%)`; // Ajustamos para que las imágenes estén siempre a la vista
    }
}, 3000);
