function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    console.log(hexToRgb(color));
    let colorRBG =hexToRgb(color);

    colorRBG = "rgba(" + colorRBG["r"] + "," + colorRBG["g"] + "," + colorRBG["b"] + ", 0.70)";

    console.log(colorRBG);

    return colorRBG;
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  export function stringAvatar(name) {
    let position = name.search(" ");
    let children = "";
    if(position > -1){
        children =  name.split(' ')[0][0] + name.split(' ')[1][0]; 
    }else{
        children =  name.split(' ')[0][0]
    }

    console.log(children);
    console.log(stringToColor(name));

    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: children,
    };
  }