import dotenv from 'dotenv';

dotenv.config();

function getTimeMultiplier() {
  const multiplier = parseFloat(process.env.TIME_MULTIPLIER ?? '1');
  if (isNaN(multiplier)) {
    return 1;
  }

  return multiplier;
}

const config = {
  timeMultiplier: getTimeMultiplier(),
};

export default config;
