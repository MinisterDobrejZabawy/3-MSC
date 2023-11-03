// Znajdź wszystkie literki w .biography-sidebar-container-title
const letters = document.querySelectorAll('.biography-sidebar-container-title-letter');

// Dodaj obsługę zdarzenia "mouseenter" dla .biography-sidebar-container-title
document.querySelector('.biography-sidebar-container-title').addEventListener('mouseenter', (e) => {
  // Oblicz punkt środkowy .biography-sidebar-container-title
  const centerX = e.target.offsetWidth / 2;
  
  // Dodaj obsługę zdarzenia "mousemove"
  e.target.addEventListener('mousemove', (e) => {
    // Oblicz odległość myszki od środka
    const distance = e.clientX - e.target.getBoundingClientRect().left - centerX;
    
    // Oblicz kąt obrotu na podstawie odległości myszki
    const rotation = (distance / centerX) * 10; // Zwiększ 10 razy, aby uzyskać widoczalny efekt
    
    // Zastosuj transformację CSS dla każdej literki
    letters.forEach(letter => {
      letter.style.transform = `rotateY(${rotation}deg)`;
    });
  });
});

// Dodaj obsługę zdarzenia "mouseleave" dla .biography-sidebar-container-title
document.querySelector('.biography-sidebar-container-title').addEventListener('mouseleave', () => {
  // Po opuszczeniu obszaru .biography-sidebar-container-title, przywróć początkowy stan
  letters.forEach(letter => {
    letter.style.transform = 'rotateY(0deg)';
  });
});
