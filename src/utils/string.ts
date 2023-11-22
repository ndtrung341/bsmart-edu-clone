export const removeAccents = (str: string): string =>
   str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const slugify = (str: string): string =>
   str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');