const guests = [
  { id: "1", name: "Danae alvarado", passes: 2 },
  { id: "2", name: "Zoila morente", passes: 2 },
  { id: "3", name: "Zulma guilis", passes: 2 },
  { id: "4", name: "Nestor pineda", passes: 3 },
  { id: "5", name: "Familia monroy quiej", passes: 4 },
  { id: "6", name: "Silvia ajpacaja", passes: 3 },
  { id: "7", name: "Lili roxana gonzalez", passes: 3 },
  { id: "8", name: "Mynor aguilar", passes: 4 },
  { id: "9", name: "Julio cesar camey", passes: 5 },
  { id: "10", name: "Familia salazar ordoñez", passes: 4 },
  { id: "11", name: "Cesar tobias", passes: 3 },
  { id: "12", name: "Herry tobias", passes: 2 },
  { id: "13", name: "Baudilio ordoñez", passes: 3 },
  { id: "14", name: "Graciela colmenar", passes: 1 },
  { id: "15", name: "Manuel diaz", passes: 4 },
  { id: "16", name: "Josue de leon y esposa", passes: 2 },
  { id: "17", name: "Familia ochoa morales", passes: 5 },
  { id: "18", name: "Romelia roche", passes: 1 },
  { id: "19", name: "Angela de ochoa", passes: 2 },
  { id: "20", name: "Claudia ochoa", passes: 2 },
  { id: "21", name: "Jaime quiej", passes: 3 },
  { id: "22", name: "Tavo quiej", passes: 5 },
  { id: "23", name: "Felipe ochoa", passes: 4 },
  { id: "24", name: "Tia manuela rumines e hijo", passes: 2 },
  { id: "25", name: "Isabel ruminez", passes: 2 },
  { id: "26", name: "Valentina santizo", passes: 5 },
  { id: "27", name: "Maria santizo", passes: 3 },
  { id: "28", name: "Familia velasco rumines", passes: 5 },
  { id: "29", name: "Familia argueta velasco", passes: 3 },
  { id: "30", name: "Familia monroy cortez", passes: 2 },
  { id: "31", name: "Familia caminade monroy", passes: 3 },
  { id: "32", name: "Julio alonzo", passes: 3 },
  { id: "33", name: "Julio mendizabal", passes: 4 },
  { id: "34", name: "Edgar monroy", passes: 3 },
  { id: "35", name: "Cristopher y familia", passes: 3 },
  { id: "36", name: "Gladys ordoñez", passes: 3 },
  { id: "37", name: "Dr. leonel ajciginac", passes: 3 },
  { id: "38", name: "Karla santizo", passes: 3 },
  { id: "39", name: "Luis felipe santizo", passes: 3 },
  { id: "40", name: "Ernesto caminade y esposa", passes: 2 },
  { id: "41", name: "Silvia caminade", passes: 4 },
  { id: "42", name: "Adelita caminade", passes: 4 },
  { id: "43", name: "Clariza son de chocoj", passes: 5 },
  { id: "44", name: "Tio juan ramirez", passes: 2 },
  { id: "45", name: "Luis osorio", passes: 4 },
  { id: "46", name: "Marlene ramirez ruminez", passes: 5 },
  { id: "47", name: "Jose torres", passes: 4 },
  { id: "48", name: "Daniel garcia", passes: 5 },
  { id: "49", name: "Isabel jimon", passes: 2 },
  { id: "50", name: "Douglas muñoz y mama", passes: 2 },
  { id: "51", name: "Margot aragon", passes: 3 },
  { id: "52", name: "Gabriela ruminez aragon", passes: 2 },
  { id: "53", name: "Lester najarro", passes: 2 },
  { id: "54", name: "Florencio monterroso", passes: 3 },
  { id: "55", name: "Luis enrique molina", passes: 4 },
  { id: "56", name: "Mardu de morales", passes: 3 },
  { id: "57", name: "Roberto son", passes: 4 },
  { id: "58", name: "Antonio umul", passes: 3 },
  { id: "59", name: "Glenda de diaz", passes: 2 },
  { id: "60", name: "Amarilis diaz", passes: 2 },
  { id: "61", name: "Melvin salvadoreño y esposa", passes: 3 },
  { id: "62", name: "Irma perez", passes: 2 },
  { id: "63", name: "Blanca donis y familia", passes: 3 },
  { id: "64", name: "Lily rojas", passes: 2 },
  { id: "65", name: "David velasco", passes: 3 },
  { id: "66", name: "Lidia velasco", passes: 5 },
  { id: "67", name: "Leonel mota", passes: 3 },
  { id: "68", name: "Amparo boch", passes: 2 },
  { id: "69", name: "Ester monterroso", passes: 5 },
  { id: "70", name: "Oscar rodriguez", passes: 4 },
  { id: "71", name: "Pablo xet", passes: 3 },
  { id: "72", name: "Mundo valenzuela", passes: 3 },
  { id: "73", name: "Byron canas", passes: 4 },
  { id: "74", name: "Maria de jesus quiej", passes: 3 },
  { id: "75", name: "Selvin canas", passes: 4 },
  { id: "76", name: "Vicky cifuentes", passes: 2 },
  { id: "77", name: "Maria del rosario quiej", passes: 2 },
  { id: "78", name: "Familia torres castro", passes: 6 },
  { id: "79", name: "Catalina chuc", passes: 2 },
  { id: "80", name: "Anabibia ramos", passes: 2 },
  { id: "81", name: "Lourdes caminade", passes: 2 },
  { id: "82", name: "Giovanni nelson", passes: 2 },
  { id: "83", name: "Guadalupe sacuj", passes: 2 },
  { id: "84", name: "Esperanza solis", passes: 2 },
  { id: "85", name: "Heidy camey", passes: 2 },
  { id: "86", name: "Blanca gomez", passes: 2 },
  { id: "87", name: "Marisol buch", passes: 1 },
  { id: "88", name: "Wendy velasquez toledo", passes: 3 },
  { id: "89", name: "Jose alberto arreaga", passes: 3 },
  { id: "90", name: "Eliseo jimenez", passes: 2 },
  { id: "91", name: "Aracely bellugo", passes: 2 },
  { id: "92", name: "Patricia armas", passes: 2 },
  { id: "93", name: "Maribel mejia", passes: 2 },
  { id: "94", name: "Andrea giron", passes: 2 },
  { id: "95", name: "Maylin gonzalez", passes: 2 },
  { id: "96", name: "Ana pacheco", passes: 2 },
  { id: "97", name: "Alvin padilla", passes: 2 },
  { id: "98", name: "Lilian merida", passes: 2 },
  { id: "99", name: "Fernando sapon", passes: 2 },
  { id: "100", name: "Jonathan duarte", passes: 2 },
  { id: "101", name: "Byron mendoza", passes: 2 },
  { id: "102", name: "Gabriela giron", passes: 2 },
  { id: "103", name: "Josue salazar", passes: 2 },
  { id: "104", name: "Lesbia de leon", passes: 2 },
  { id: "105", name: "Willson reyes", passes: 4 },
  { id: "106", name: "Gloria marroquin", passes: 4 },
  { id: "107", name: "Carla bracamonte", passes: 2 },
  { id: "108", name: "Dr. cristopher horjales", passes: 2 },
  { id: "109", name: "Oziel salcedo", passes: 2 },
  { id: "110", name: "Mario ruiz", passes: 4 },
  { id: "111", name: "Eliseo grave", passes: 3 },
  { id: "112", name: "Edwin de leon", passes: 5 },
  { id: "113", name: "Alicia shalpot", passes: 1 },
  { id: "114", name: "Eswin calel", passes: 1 },
  { id: "115", name: "Juan carlos estrada", passes: 2 },
  { id: "116", name: "Jose francisco juarez", passes: 1 },
  { id: "117", name: "Deivid aragon", passes: 3 },
  { id: "118", name: "Alex padilla", passes: 2 },
  { id: "119", name: "Luis norma", passes: 2 }, 
  { id: "120", name: "Estas Invitado", passes: 1 },
  { id: "120", name: "Estan Invitados", passes: 2 }
];



document.addEventListener("DOMContentLoaded", () => {
  function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");
    for (const pair of pairs) {
      const [key, value] = pair.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent((value || '').replace(/\+/g, ' '));
    }
    return params;
  }

  const queryParams = getQueryParams();
  const guestId = queryParams.id;
  const guest = guests.find(g => g.id === guestId);

  if (guest) {
    // Sección: guest-name
    const guestNameSection = document.getElementById('guest-name');
    const message = guest.passes > 1
      ? "Este momento no estaría completo sin ustedes."
      : "Este momento no estaría completo sin usted.";
  
    guestNameSection.innerHTML = `
      <span class="guest-title">¡${guest.name}!</span><br>
      <span class="guest-message">${message}</span>
    `;
  
    // Sección: passes
    const passesSection = document.getElementById('passes');
    passesSection.textContent =
      `${guest.passes} ${guest.passes === 1 ? 'lugar reservado con cariño.' : 'lugares reservados con cariño.'}`;

      if (!window.eventData) window.eventData = {};

window.eventData.rsvp = {
  rsvpImage: "/images/rsvp.png",
  form: `https://docs.google.com/forms/d/e/1FAIpQLSdAcHTQU0WBzqMlkJ4tIUVqY60DOG9GiDr0mCbFcBDhxmjITw/viewform?usp=pp_url&entry.42292443=${encodeURIComponent(guest.name)}&entry.800985369=${guest.passes}`
};
  
  } else {
    document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
    const invitationInfo = document.querySelector('.invitation-info-section');
    if (invitationInfo) invitationInfo.style.display = 'none';
  }  
});

  