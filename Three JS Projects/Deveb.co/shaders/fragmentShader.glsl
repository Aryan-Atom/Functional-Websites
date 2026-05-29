varying float vElevation;
varying vec2 vUv;
uniform float uColorChange;
void main() {

    // ---------------- Color Combination 1--------------------

    vec4 color1 = vec4(1.0, 0.69, 1.0, 1.0);
    vec4 color2 = vec4(1.0, 0.88, 0.99, 1.0);

    // ---------------- Color Combination 2--------------------

    vec4 color3 = vec4(1.0, 0.87, 0.69, 1.0);   
    vec4 color4 = vec4(1.0, 0.93, 0.84, 1.0);

    float v = smoothstep(-.14, .14, vElevation);

    vec4 colorCombination1 = mix(color1, color2, v);
    vec4 colorCombination2 = mix(color3, color4, v);

    vec4 color = mix(colorCombination1, colorCombination2, uColorChange);
    gl_FragColor = color;

}