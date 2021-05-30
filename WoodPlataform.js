class WoodPlataform {
    plataform = null

    constructor(scene, position, rotation,  h, w, d) {
        var plataformMat = new BABYLON.StandardMaterial("plataform",scene);
        plataformMat.ambientTexture = new BABYLON.Texture("/assets/images/woodTexture.jpg", scene); 

        this.plataform = BABYLON.MeshBuilder.CreateBox("box", {height: h, width: w, depth: d});
        this.plataform.material = plataformMat;
        this.plataform.position = position;
        this.plataform.rotation = rotation;


        /*--impostor--*/
        this.plataform.physicsImpostor = new BABYLON.PhysicsImpostor(this.plataform, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0, restitution:1}, scene);

    }

    getPlataform() {
       return this.plataform;
    }

    /*animateRotate(position, animPos, axis) {
        var wheelPivotParent = new BABYLON.TransformNode("wheelPivotParent");
        wheelPivotParent.position = position;
        this.plataform.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        BABYLON.Animation.CreateAndStartAnimation("marbleTowerWheelRot", wheelPivotParent, "rotation."+axis, 15, 60, BABYLON.Tools.ToRadians(0), BABYLON.Tools.ToRadians(-360), 1)
    }
   
    animateSlideL(position, animPos, axis) {
        var wheelPivotParent = new BABYLON.TransformNode("PivotParent");
        wheelPivotParent.position = position;
        this.plataform.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        BABYLON.Animation.CreateAndStartAnimation("sliding", wheelPivotParent, "position."+axis, 20, 60, -1, 5, 1)
    }

    animateSlideR(position, animPos, axis) {
        var wheelPivotParent = new BABYLON.TransformNode("PivotParent");
        wheelPivotParent.position = position;
        this.plataform.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        BABYLON.Animation.CreateAndStartAnimation("sliding", wheelPivotParent, "position."+axis, 20, 60, 5, -1, 1)
    }

    animateSlideU(position, animPos, axis) {
        var wheelPivotParent = new BABYLON.TransformNode("PivotParent");
        wheelPivotParent.position = position;
        this.plataform.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        BABYLON.Animation.CreateAndStartAnimation("sliding", wheelPivotParent, "position."+axis, 20, 60, 6, -2, 1)
    }*/
}