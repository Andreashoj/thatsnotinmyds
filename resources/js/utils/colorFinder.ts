import colors from 'tailwindcss/colors'

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

// Function to find the color closest to the target
export function findClosestColor(target: string): { closestColor: string; closestShade: string } {
    let targetRGB = hexToRgb(target);
    let closestColor = '';
    let closestShade = '';
    let smallestDistance = Infinity;

    Object.entries(colors).forEach(([colorName, shades]) => {
        Object.entries(shades).forEach(([shade, hex]) => {
            //@ts-ignore
            let colorRGB = hexToRgb(hex);
            let distance = Math.sqrt(
                Math.pow(targetRGB[0] - colorRGB[0], 2) +
                Math.pow(targetRGB[1] - colorRGB[1], 2) +
                Math.pow(targetRGB[2] - colorRGB[2], 2)
            );
            if (distance < smallestDistance) {
                smallestDistance = distance;
                closestColor = colorName;
                closestShade = shade;
            }
        });
    });

    return { closestColor, closestShade };
}
