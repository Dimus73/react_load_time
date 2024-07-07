export const rndCount = (min=1,max=1000) =>
    Math.floor(Math.random() * (max - min)) + min;