// Poczekaj, aż strona zostanie załadowana
window.addEventListener('load', function() {
    // Pobierz referencję do elementu sidebar
    var sidebar = document.querySelector('.biography-sidebar');
  
    // Oblicz wartość przesunięcia na podstawie 100vh
    var offset = window.innerHeight;
  
    // Ukryj sidebar, przesuwając go w lewo
    sidebar.style.transform = 'translateX(-100%)';
  
    // Dodaj nasłuchiwanie na zdarzenie przewijania strony
    window.addEventListener('scroll', function() {
      // Sprawdź, czy strona została przewinięta o co najmniej 100vh
      if (window.scrollY >= offset) {
        // Jeśli tak, pokaż sidebar, przesuwając go z powrotem
        sidebar.style.transform = 'translateX(0)';
      } else {
        // W przeciwnym razie ukryj go
        sidebar.style.transform = 'translateX(-100%)';
      }
    });
  });
  