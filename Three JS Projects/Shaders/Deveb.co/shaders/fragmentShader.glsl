varying float qnoise;

uniform float rcolor;
uniform float gcolor;
uniform float bcolor;
uniform bool redhell;

void main() {
  float r, g, b;

  if (!redhell) {
    // "cooler" palette branch
    r = sin(qnoise + rcolor);
    g = normalize(qnoise + (gcolor / 2.0));  // deveb uses normalize() on a scalar
    b = tan(qnoise + bcolor);
  } else {
    // "redhell" warm palette branch
    r = normalize(qnoise + rcolor);
    g = sin(qnoise + gcolor);
    b = sin(qnoise + bcolor);
  }

  gl_FragColor = vec4(r, g, b, 1.0);
}