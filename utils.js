import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const env = publicRuntimeConfig;

export const asset = (src = '', size) =>
  (!src.match(/http/) ? env.DOMAIN_URL : '') +
  (size ? src.replace('/uploads/', `/uploads/${size}/`) : src);

// export const scrollbar = css`
//   overflow: auto;
//   &::-webkit-scrollbar {
//     width: 6px;
//     padding: 0;
//     background-color: #fff;
//   }
//   &::-webkit-scrollbar-thumb {
//     border-radius: 3px;
//     background-color: #ccc;
//   }
//   &::-webkit-scrollbar-track {
//     border-radius: 3px;
//     background-color: #eee;
//   }
// `;

export const slugify = text => {
  const trMap = {
    çÇ: 'c',
    ğĞ: 'g',
    şŞ: 's',
    üÜ: 'u',
    ıİ: 'i',
    öÖ: 'o'
  };
  return Object.keys(trMap)
    .reduce(
      (accumulator, key) =>
        accumulator.replace(new RegExp(`[${key}]`, 'g'), trMap[key]),
      text
    )
    .replace(/[^-a-zA-Z0-9\s]+/gi, '')
    .replace(/\s/gi, '-')
    .replace(/[-]+/gi, '-')
    .toLowerCase();
};

export const getInitials = name => {
  let initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  return initials;
};
