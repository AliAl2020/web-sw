import { LuDice1 } from 'react-icons/lu';
import { Config } from '../../../conf/Config'; // Stelle sicher, dass die Config den GRAPHQL_URL enthält.

export const getUserInfo = async (email, token) => {
  const GRAPHQL_URL = 'https://api.hightechfrankfurt.de/meine_steuerwelt/mobile/graphql/getUserInfo.php'; // Passe die URL zu deinem GraphQL-Endpoint an
  //const GRAPHQL_URL = "https://api.hightechfrankfurt.de/debugging/verifiy.php"
  // GraphQL Query
  const query = `
    query {
      userInfo(email: "${email}") {
        steuer_id
        vorname
        nachname
      }
    }
  `;
console.log("ingraphql",GRAPHQL_URL)
  try {
    // Anfrage an den GraphQL-Server senden
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Authentifizierung via Token
      },
      body: JSON.stringify({
        query, // Hier direkt das Query senden
      }),
    });

    const result = await response.json(); // JSON-Antwort parsen

    console.log("result",result);
    if (result.errors) {
      console.error('GraphQL Fehler:', result.errors);
      throw new Error(result.errors[0].message);
    }

    // Erfolgreiche Antwort: Benutzerdaten zurückgeben
    return result.data['userInfo'];
  } catch (error) {
    console.error('Fehler beim Abrufen der Benutzerdaten:', error.message);
    throw error;
  }
};
