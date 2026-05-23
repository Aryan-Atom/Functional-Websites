varying vec2 vUv;

void main() {

    /* mix (color1, color2, range) => if range = 0 gives color1 , else range = 1 gives color2 form (0->1) intensity of color1 decreases and color2 increases

    vec4 color = mix(vec4(1.,0.0,0.0,1.0),vec4(0.0,0.0,0.0,1.0),vUv.x); */


   //---------------------------------------------------------------------------------------------------------


    /* step(.5 , vUv.x); its numeric value which follows condition like if and else so like 1st item is condition so till 0.5 it will give value 0 after will give 1 like if(x<0.5){value=0}else{value=1}

   float factor = step(0.5, vUv.y);

   vec4 color = mix(vec4(0.,0.2784,.8784,1.),vec4(1.,0.8863,0.3843,1.),factor); */

   //---------------------------------------------------------------------------------------------------------

    /* smoothstep(.0,1.,vUv.x)=> it does a smooth transition between 2 values; more closer value gives hard transition

    float factor = smoothstep(.0,1.,vUv.x);
    gl_FragColor = vec4(factor,factor,factor,1); */


   //---------------------------------------------------------------------------------------------------------


/*  clamp (min , max , value) => clamp return sthe min or max value only based on the value al values between -1->0 will give -1 value and all values beteween 0->1 gives 1

    float factor = clamp(-1.,1.,(vUv.x*2.)-1.);
    gl_FragColor = vec4(factor,factor,factor,1);*/




    //--------------------------------------------------------------------------------------------------------

    // Noise

    /* 

float n = cnoise(vec3(vUv * 3.0, uTime * 0.08));

n = n * 0.5 + 0.5;

vec3 blackColor = vec3(0.0, 0.0, 0.0);
vec3 whiteColor = vec3(1.0, 0.0, 0.0); // RED

vec3 finalColor = mix(blackColor, whiteColor, n);

gl_FragColor = vec4(finalColor, 1.0);

*/

// vec4 color =vec4(1.,0.,0.,1.);
// color.rgb += noise;



    // vec4 color = vec4(vUv.y, 1.-vUv.x, 0.0, 1.0);
    // gl_FragColor = color;
}