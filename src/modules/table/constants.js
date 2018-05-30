export const NAME = 'playersTable';

export const URL = "https://football-players-b31f2.firebaseio.com/players.json";

export const getAge = (dateString) => {

    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;

}
