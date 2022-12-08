export const clamp = (num: number, min: number, max: number): number => Math.min(Math.max(num, min), max);
export const scale = (number: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}