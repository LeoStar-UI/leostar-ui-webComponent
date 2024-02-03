/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
export type Mod = string | { [key: string]: any };
export type Mods = Mod | Mod[];

export function createBEM(name: string) {
  return function (el) {
    // console.log(el, typeof el, 'typeof el');
    if (typeof el == 'string') {
      return `${name}__${el}`;
    } else {
      let obj = {};
      el.forEach((item) => {
        if (item) {
          let stringClass = `${name}--${item}`;
          obj[stringClass] = true;
        }
      });
      return obj;
    }
  };
}

export type BEM = ReturnType<typeof createBEM>;
