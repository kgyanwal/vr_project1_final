# The Hall VR


![hallvr1](/screenshots/thehall1.jpg)


The Hall is a demo created in [Cecropia Solutions](http://www.cecropiasolutions.com/) to test the WebVR capabilities.
The hall is skeleton is taken from the above link to work on this project.


Description of the Project:

This work shows the sitation of hallway during the covid. In the hallway, there are six objects which are manually created by me using aframe.

1. Water Tap
2. Towel
3. Soap Bar
4. Mask
5. Sanitizer bottle
6. Log (on which the sanitizer bottle is revolving).

There is also an audio file, which gives a brief message what's the use of these components in order to project ourselves and others.

Thease are the key components in order to protect ourselves from the coronavius and save others lives.

Development:

The hallway is adopted from the third party sources, which has multiple images and object loaded.

I have created above mentioned objects using aframe libraries. I used the entity like cone, cylinder, sphere, and position the created objects at the proper place.
Like the tap, soap and towel are located closeby and mask and sanitizer are located at the end direct direction of the hallway. I rotate the bottle of sanitizer and the word sanitization using animation tag. I used images to create the textures of the objects, sich as the log from the glitch and others from different sources, which you can see in the reference below.

Explanation of codes

1. Visual Images and Animation: Sanitizer bottle: for sanitizer bottle I use one sphere and one cylinder and mannually tested the the shape of the objects by pressing ctrl+option+i for visual inspictor which is useful to evaluation the position of objects. I use rotation property of animation to rotate the bottle. I used an image of drops of water to create a texture on the bottle. I also labelled the name of the bottle and rotate with its parent accordingly. I used a cylinder for creating a log. Mask: For mask I used a code and a circle and for the texture I also added an image for the better look and feel. In the same way I manually created a tap and towel and for the texture I used the steel materials, and to make the water flow I used rotation with higher speed, so it shows the water is flowing on the skin and water color is copied from css colerpicker site. For towel, I used a cylinder and for the texture of the towel I used an image of towel. I also rotate the towel to bring user's attention.

2. Audio: I used voicebooking.com and type

3. Live Demo: You can click the following link for the live demo
[Live Demo](https://kgyanwal.github.io/vr_project1_final/)


[YouTube Video](https://www.youtube.com/watch?v=0nuiaWGNXAw)

4. Images:



# References
-[Hallway](https://cecropia.github.io/thehallaframe/)
- [WebVR](https://webvr.info/)
- [Three.js r84](https://threejs.org/) (previous version now A-Frame)
- [A-Frame v 0.5.0](https://aframe.io/)
- [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) (previous version now A-Frame)
- [gamepad.js](https://github.com/Absulit/gamepad.js) (previous version now A-Frame)
