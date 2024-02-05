/**
 * create unique id for each product that will be added into cart
 *
 * @returns {string} a unique identifier
 */
export const timestampGenerator = () => {
  const timestamp = Math.floor(new Date().getTime() / 1000).toString(16); // 4-byte timestamp
  const randomValue = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0"); // 5-byte random value
  const counter = Math.floor(Math.random() * 4095)
    .toString(16)
    .padStart(3, "0"); // 3-byte counter

  return `${timestamp}${randomValue}${counter}`;
};
