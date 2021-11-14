/* eslint-disable no-param-reassign */
let timeout: NodeJS.Timer | null = null;

export const startClub = () => {
  const spans = Array.from(document.querySelectorAll('span'));
  const h2s = Array.from(document.querySelectorAll('h2'));
  const h1s = Array.from(document.querySelectorAll('h1'));
  const input = Array.from(document.querySelectorAll('input'));
  const components = [...spans, ...h2s, ...h1s, ...input];
  timeout = setInterval(() => {
    components.forEach((element) => {
      (element as any).style.color = `#${Math.round(Math.random() * 0xffffff).toString(16)}`;
      (element as any).style.backgroundColor = `#${Math.round(Math.random() * 0xffffff).toString(16)}`;
    });
  }, 300);
};

export const stopClub = () => {
  const spans = Array.from(document.querySelectorAll('span'));
  const h2s = Array.from(document.querySelectorAll('h2'));
  const h1s = Array.from(document.querySelectorAll('h1'));
  const components = [...spans, ...h2s, ...h1s];
  if (timeout) {
    clearInterval(timeout);
    components.forEach((element) => {
      (element as any).style.color = `inherit`;
    });
  }
};
