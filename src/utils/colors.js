// const availableColors = [
//   'blue',
//   'indigo',
//   'purple',
//   'pink',
//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'teal',
//   'cyan',
//   'white',
//   'gray',
//   'gray-dark',
//   'primary',
//   'secondary',
//   'success',
//   'info',
//   'warning',
//   'danger',
//   'light',
//   'dark',
// ];

export const getColor = (availableColor = 'primary') => {
  if (typeof window === 'undefined') {
    return null;
  }

  const color = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`--${availableColor}`);

  return color;
};

export const getThemeColors = () => [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
];

export const getChipColors = () => {
  const colores = [ 
    {color: "#CA0000",  backgroundColor: "rgba(240 , 0 , 0, 0.12)"},
    {color:"#00CC00", backgroundColor: "rgba(0, 240, 0, 0.12)"},
    {color:"#0000CC", backgroundColor: "rgba(0, 0, 240, 0.12)"},
    {color:"#CCCC00", backgroundColor: "rgba(240, 240, 0, 0.12)"},
    {color:"#00CCCC", backgroundColor: "rgba(0, 240, 240, 0.12)"},
    {color:"#CC00CC", backgroundColor: "rgba(240, 0, 240, 0.12)"}

  ]; 
  return colores; 
} 
