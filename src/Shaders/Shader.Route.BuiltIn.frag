/*****************************************Pre Compile**********************************************/

#define version 460

/***************************************************************************************************/

/*****************************************Fragment Input********************************************/

varying vec2 fragUV;      /* @brief Fragment Texture Coordinate */

/**************************************************************************************************/

/**************************************Uniform Patameters******************************************/

uniform sampler2D routeTexture;          /* @brief route Texture */
uniform int id;                          /* @brief route Id */

/**************************************************************************************************/

/*****************************************Shader Entry*********************************************/

void main()
{
    float mask = texture2D(routeTexture, fragUV).x;

    vec3 color;
    float opacity;

    if(id == 0)
    {
        color =  mix(vec3(0.0f, 0.0f, 1.0f), vec3(1.0f), mask);
        opacity = 0.4f;
    }
    if(id == 1)
    {
        color =  mix(vec3(0.8f, 0.8f, 0.0f), vec3(1.0f), mask);
        opacity = 0.7f;
    }

    if(abs(2.0f * (fragUV.x - 0.5f)) > 0.9f)
    {
        color = vec3(0.7f, 0.7f, 0.7f);
    }

    gl_FragColor = vec4(color, opacity);
}

/**************************************************************************************************/