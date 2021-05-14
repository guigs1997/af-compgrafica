class WoodPlataform {
    plataform = null

    constructor(scene, position, rotation) {
        var plataformMat = new BABYLON.StandardMaterial("plataform",scene);
        plataformMat.ambientTexture = new BABYLON.Texture("/assets/images/woodTexture.jpg", scene); 
        // Our built-in 'plataform' shape. Params: name, width, depth, subdivs, scene
        this.plataform = BABYLON.MeshBuilder.CreateBox("box", {height: 3, width: 2.5, depth: .25});
        this.plataform.material = plataformMat;
        this.plataform.position = position;
        this.plataform.rotation = rotation;
      
        /*--impostor--*/
        this.plataform.physicsImpostor = new BABYLON.PhysicsImpostor(this.plataform, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0, restitution: 0.9}, scene);
    }

    getPlataform() {
       return this.plataform;
    }
   
}

/*
 const animPlat = new BABYLON.Animation("plataformAnimation", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

            const platKeys = []; 

            //At the animation key 0, the value of rotation.y is 0
            platKeys.push({
                frame: 0,
                value: 0
            });

            //At the animation key 30, (after 1 sec since animation fps = 30) the value of rotation.y is 2PI for a complete rotation
            platKeys.push({
                frame: 30,
                value: 2 * Math.PI
            });

            //set the keys
            animPlat.setKeys(platKeys);

            //Link this animation to a ground
            plataform.animations = [];
            plataform.animations.push(animPlat);

            scene.beginAnimation(plataform, 0, 30, true);
*/