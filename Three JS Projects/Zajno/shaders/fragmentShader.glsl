varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uHover;

void main() {
    float blocks = 20.0;  // Divide the entire plane in 10 parts
    vec2 blockUv = floor(vUv * blocks) / blocks; // floor value gives value from 0-10 integers and /10 to standardize it.

    float distance = length(blockUv - uMouse); // 0 on exact point and will increase from there (0.5 => position of mouse 0.5 position of uv will have black colour)
    float effect = smoothstep(0.4, 0.0, distance);

    vec2 distortion = vec2(0.02) * effect;
    vec4 color = texture2D(uTexture, vUv + (distortion * uHover));
    gl_FragColor = color;
}