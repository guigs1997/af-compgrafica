class Bat
{
    bat = null

    constructor(scene, position, rotation, h, r) {
        
        var batMat = new BABYLON.StandardMaterial("bat",scene);
        batMat.ambientTexture = new BABYLON.Texture("/assets/images/espumatexture.jpg", scene); 

        this.bat = new BABYLON.MeshBuilder.CreateCapsule("capsule", {radius:r, capSubdivisions: 6, subdivisions:6, tessellation:36,height: h, orientation:rotation});
        this.bat.material = batMat;
        this.bat.position = position;

        /*--impostor--*/
        this.bat.physicsImpostor = new BABYLON.PhysicsImpostor(this.bat, BABYLON.PhysicsImpostor.CylinderImpostor, {mass: 0, restitution:1}, scene);
    }

    getBat() {
        return this.bat;
    }

    animateSlideU(position, animPos, axis) {
        var wheelPivotParent = new BABYLON.TransformNode("PivotParent");
        wheelPivotParent.position = position;
        this.bat.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        BABYLON.Animation.CreateAndStartAnimation("sliding", wheelPivotParent, "position."+axis, 20, 60, -11, -2, 1)
           
    }

    animateSlideD(position, animPos, axis) {
        var wheelPivotParent = new BABYLON.TransformNode("PivotParent");
        wheelPivotParent.position = position;
        this.bat.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        BABYLON.Animation.CreateAndStartAnimation("sliding", wheelPivotParent, "position."+axis, 20, 60, -2, -11, 1)
    }
}