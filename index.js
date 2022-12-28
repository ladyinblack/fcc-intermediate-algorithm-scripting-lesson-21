// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Map the Debris</h1>`;

/**
 * According to Kepler's Third Law, the orbital period T of two point masses orbiting each other in a cirular or elliptic orbit is:
 *      T =  2 * π * (√(a^3 / µ))
 * a is the orbit's semi-major axis,
 * µ = GM is the standard gravitational parameter,
 * G is the gravitational constant,
 * M is the mass of the more massive body.
 *
 * Return a new array that transforms the element's average altitude into their orbital periods (in seconds).
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 * The values should be rounded to the nearest whole number.  The body being orbited is Earth.
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418km^3s^-2.
 */

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const c = Math.pow(earthRadius + arr[i].avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    newArr.push({ name: arr[i].name, orbitalPeriod: orbPeriod });
  }
  return newArr;
}

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
console.log(
  orbitalPeriod([
    { name: 'iss', avgAlt: 413.6 },
    { name: 'hubble', avgAlt: 556.7 },
    { name: 'moon', avgAlt: 378632.553 },
  ])
);
