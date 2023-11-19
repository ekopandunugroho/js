// Fungsi untuk menghasilkan nilai acak antara min dan max
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi untuk mengisi array dengan nilai acak
function fillArrayWithRandomValues(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
      array.push(getRandomValue(1, 50));
  }
  return array;
}

// Fungsi untuk memisahkan array menjadi dua (genap dan ganjil)
function separateArrayByEvenOdd(array) {
  const evenArray = [];
  const oddArray = [];
  for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
          evenArray.push(array[i]);
      } else {
          oddArray.push(array[i]);
      }
  }
  return [evenArray, oddArray];
}

// Fungsi untuk menghitung nilai minimum pada array
function getMinValue(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
          min = array[i];
      }
  }
  return min;
}

// Fungsi untuk menghitung nilai maksimum pada array
function getMaxValue(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
          max = array[i];
      }
  }
  return max;
}

// Fungsi untuk menghitung total nilai pada array
function getTotalValue(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
      total += array[i];
  }
  return total;
}

// Fungsi untuk menghitung rata-rata nilai pada array
function getAverageValue(array) {
  const total = getTotalValue(array);
  return total / array.length;
}

// Mendapatkan 100 nilai acak
const randomValues = fillArrayWithRandomValues(100);

// Memisahkan nilai acak menjadi array genap dan ganjil
const [evenValues, oddValues] = separateArrayByEvenOdd(randomValues);

// Menghitung nilai min, max, total, dan rata-rata pada array genap dan ganjil
const minEven = getMinValue(evenValues);
const maxEven = getMaxValue(evenValues);
const totalEven = getTotalValue(evenValues);
const averageEven = getAverageValue(evenValues);

const minOdd = getMinValue(oddValues);
const maxOdd = getMaxValue(oddValues);
const totalOdd = getTotalValue(oddValues);
const averageOdd = getAverageValue(oddValues);

// Perbandingan nilai antara array genap dan ganjil
const comparison = {
  min: minEven > minOdd ? 'Min lebih besar pada array ganjil' : 'Min lebih besar pada array genap',
  max: maxEven > maxOdd ? 'Max lebih besar pada array genap' : 'Max lebih besar pada array ganjil',
  total: totalEven === totalOdd ? 'Total memiliki nilai sama pada kedua array' : 'Total berbeda pada kedua array',
  average: averageEven > averageOdd ? 'Rata-rata lebih besar pada array genap' : 'Rata-rata lebih besar pada array ganjil',
};

// Menampilkan hasil
console.log('Array dengan jumlah index 100:', randomValues);
console.log('Array genap dengan jumlah index 50:', evenValues);
console.log('Array ganjil dengan jumlah index 50:', oddValues);
console.log('Min, Max, Total, Rata-rata pada array genap:');
console.log('Min:', minEven);
console.log('Max:', maxEven);
console.log('Total:', totalEven);
console.log('Rata-rata:', averageEven);
console.log('Min, Max, Total, Rata-rata pada array ganjil:');
console.log('Min:', minOdd);
console.log('Max:', maxOdd);
console.log('Total:', totalOdd);
console.log('Rata-rata:', averageOdd);
console.log('Perbandingan nilai:');
console.log(comparison);