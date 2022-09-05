//DEBUGGING WITH THE CONSOLE AND BREKPOINT:

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    Uint: 'celsius',

    // C) FIX BUG
    // value: prompt('Degrees celsius'), -->1st
    // value: Number(prompt('Degrees celsius')),
    value: 10,
  };

  //   console.log(measurement);
  // B)FIND THE BUG
  console.table(measurement);
  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY THE BUG
console.log(measureKelvin());

////////////////////////////////////////////

//USING A DEBUGGER:

const calcAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};
const amplitudeBug = calcAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFY:
console.log(amplitudeBug);
