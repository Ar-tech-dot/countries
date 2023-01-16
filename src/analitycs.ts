export function createAnalitycs() {
  let count = 0;
  let isDestroy: boolean = false;

  const listener = () => count++;

  document.addEventListener("click", listener);

  return {
    destroy() {
      document.removeEventListener("click", listener);
      isDestroy = true;
    },
    getClick() {
      if (isDestroy) {
        return "Analitics is destroy";
      }
      return count;
    },
  };
}
window["analitics"] = createAnalitycs();
