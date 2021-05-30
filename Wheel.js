class Wheel
{
    wheel = null;

    constructor(scene, position, rotation, h, d) {
        
        var wheelMat = new BABYLON.StandardMaterial("wheel", scene);
        wheelMat.ambientTexture = new BABYLON.Texture("/assets/images/whelltexture.png", scene);

        var faceColors=[];
        faceColors[1] = new BABYLON.Color3(0,0,0);
	
        var faceUV =[];
        faceUV[0] = new BABYLON.Vector4(0,0,1,1);
        faceUV[2] = new BABYLON.Vector4(0,0,1,1);
	
        this.wheel = BABYLON.MeshBuilder.CreateCylinder("wheel", {diameter: d, height: h, tessellation: 24, faceColors:faceColors, faceUV:faceUV});
        this.wheel.material = wheelMat;

        this.wheel.position = position;
        this.wheel.rotation = rotation;

        /*--impostor--*/
        this.wheel.physicsImpostor = new BABYLON.PhysicsImpostor(this.wheel, BABYLON.PhysicsImpostor.CylinderImpostor, {mass: 0, restitution:1}, scene);
    }

    getWheel() {
        return this.wheel;
    }
}