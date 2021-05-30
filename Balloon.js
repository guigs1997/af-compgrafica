class Balloon
{
    balloon = null

    constructor(scene, position, rotation, h) {
        var balloonMat = new BABYLON.StandardMaterial("balloon",scene);
        balloonMat.ambientTexture = new BABYLON.Texture("/assets/images/balloontexture.jpg", scene); 

        this.balloon = new BABYLON.MeshBuilder.CreateCapsule("capsule", {radius:0.5, height:h, radiusTop:4, orientation:rotation});
        this.balloon.material = balloonMat;
        this.balloon.position = position;

        /*--impostor--*/
        this.balloon.physicsImpostor = new BABYLON.PhysicsImpostor(this.balloon, BABYLON.PhysicsImpostor.SphereImpostor, {mass: 0, restitution:1}, scene);
    }

    get() {
        return this.balloon;
    }

    animateSlideU(position, animPos, axis) {
        var wheelPivotParent = new BABYLON.TransformNode("PivotParent");
        wheelPivotParent.position = position;
        this.balloon.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        BABYLON.Animation.CreateAndStartAnimation("sliding", wheelPivotParent, "position."+axis, 20, 60, -40, -25, 1)
           
    }
}