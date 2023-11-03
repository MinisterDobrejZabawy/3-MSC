// Poczekaj, aż strona zostanie załadowana
window.addEventListener('load', function() {
  // Pobierz referencję do elementu sidebar
  var sidebar = document.querySelector('.biography-sidebar');
  // Pobierz referencję do elementu .intro-title
  var introTitle = document.querySelector('.intro-title');
  
  // Oblicz wartość przesunięcia na podstawie pozycji .intro-title
  var offset = introTitle.getBoundingClientRect().bottom;
  
  // Dodaj nasłuchiwanie na zdarzenie przewijania strony
  window.addEventListener('scroll', function() {
    // Sprawdź, czy .intro-title został przewinięty całkowicie poza ekranem
    if (introTitle.getBoundingClientRect().bottom <= 0) {
      // Jeśli tak, pokaż sidebar, przesuwając go z powrotem
      sidebar.style.transform = 'translateX(0)';
    } else {
      // W przeciwnym razie ukryj go
      sidebar.style.transform = 'translateX(-100%)';
    }
  });
})