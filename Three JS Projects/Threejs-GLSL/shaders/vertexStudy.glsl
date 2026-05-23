uniform float uTime;
varying vec2 vUv;

/* void main() {
    vec3 pos = position;
    pos.x+=.2*sin(pos.x*5.*pos.y*4.+uTime);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
} */


// void main(){
//     vUv = uv;
//     vPosition = position;
//     vec4 modelPosition = modelMatrix*vec4(position,1.);
//     vec4 viewPosition = viewMatrix*modelPosition;
//     vec4 projectedPosition = projectionMatrix*viewPosition;
//     gl_Position=projectedPosition;
// }

// Position => Original Position

// Model Position => New Position after making some changes

// Model View Matrix => xyz cordinates matrix => changing these can change/modify the model

//viewPosition => we need to multiply by this so it can be viewed in camera properly

//Projection Matrix => takes the 3d world picture or what items are in view and prints it



void main()
{
    vUv=uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    // modelPosition.yz += sin(modelPosition.x * 10.  + uTime) *0.1;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}