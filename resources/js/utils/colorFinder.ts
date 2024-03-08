import tailwindColors from 'tailwindcss/colors';

// Extract unused tailwind colors from the colors object
const { blueGray, warmGray, lightBlue, coolGray, trueGray, neutral, transparent, inherit, ...colors } = tailwindColors;

// Function to convert hex to RGB
function hexToRgb(hex: string): [number, number, number] {
    let r = 0, g = 0, b = 0;
    // Assume input is in the form of '#RRGGBB' or '#RRGGBBAA'
    if (hex.length == 7 || hex.length == 9) {
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
    }
    return [r, g, b];
}

// Function to find the 4 closest colors to the target
export function findClosestColors(target: string): { colorName: string; shade: string; distance: number }[] {
    let targetRGB = hexToRgb(target);
    let colorsWithDistances: { colorName: string; shade: string; distance: number }[] = [];

    Object.entries(colors).forEach(([colorName, shades]) => {
        if (typeof shades === 'object') {
            Object.entries(shades).forEach(([shade, hex]) => {
                if (typeof hex === 'string') {
                    let colorRGB = hexToRgb(hex);
                    let distance = Math.sqrt(
                        Math.pow(targetRGB[0] - colorRGB[0], 2) +
                        Math.pow(targetRGB[1] - colorRGB[1], 2) +
                        Math.pow(targetRGB[2] - colorRGB[2], 2)
                    );
                    colorsWithDistances.push({ colorName, shade, distance });
                }
            });
        }
    });

    // Sort by distance and return the 4 closest colors
    colorsWithDistances.sort((a, b) => a.distance - b.distance);
    return colorsWithDistances.slice(0, 4);
}

