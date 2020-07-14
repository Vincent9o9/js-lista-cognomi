// Chiedere all’utente il cognome

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’

// stampa la lista ordinata alfabeticamente

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

var utente = prompt('inserisci il tuo cognome');
utente = utente.charAt(0).toUpperCase() + utente.slice(1).toLowerCase();

listaCognomi.push(utente);
listaCognomi.sort();

var posizioneUmana = listaCognomi.indexOf(utente) + 1;


for (var i=0; i<listaCognomi.length; i++) {
    document.getElementById('list').innerHTML += '<li>' + listaCognomi[i] + '</li>';
}


document.getElementById('position').innerHTML = 'la tua posizione umana = ' + posizioneUmana;
