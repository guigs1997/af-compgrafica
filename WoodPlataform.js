class WoodPlataform {
    plataform = null

    constructor(scene, position, rotation,  h, w, d, animStyle) {
        var plataformMat = new BABYLON.StandardMaterial("plataform",scene);
        plataformMat.ambientTexture = new BABYLON.Texture("/assets/images/woodTexture.jpg", scene); 

        this.plataform = BABYLON.MeshBuilder.CreateBox("box", {height: h, width: w, depth: d});
        this.plataform.material = plataformMat;
        this.plataform.position = position;
        this.plataform.rotation = rotation;
      
        /*--impostor--*/
        this.plataform.physicsImpostor = new BABYLON.PhysicsImpostor(this.plataform, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0, restitution: 0.9}, scene);
    
        if(animStyle != "false"){
            var wheelPivotParent = new BABYLON.TransformNode("wheelPivotParent");
            wheelPivotParent.position = new BABYLON.Vector3(6.5,-1.5,0);
            this.plataform.setParent(wheelPivotParent);
            BABYLON.Animation.CreateAndStartAnimation("marbleTowerWheelRot", this.plataform, animStyle, 30, 60, BABYLON.Tools.ToRadians(0), BABYLON.Tools.ToRadians(-360), 1)
        }
    }

    getPlataform() {
       return this.plataform;
    }
   
    /*animate(animStyle) {
        var wheelPivotParent = new BABYLON.TransformNode("wheelPivotParent");
        wheelPivotParent.position = this.plataform.position;
        this.plataform.setParent(wheelPivotParent);
        BABYLON.Animation.CreateAndStartAnimation("marbleTowerWheelRot", wheelPivotParent, animStyle, 30, 60, BABYLON.Tools.ToRadians(0), BABYLON.Tools.ToRadians(-360), 1)
    }*/
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