class Ball {
   sphere = null;

    constructor(scene) {
       /*--Área da bola--*/
        var sphereMat = new BABYLON.StandardMaterial("ball",scene);
        sphereMat.ambientTexture = new BABYLON.Texture("/assets/images/ballTexture.jpg", scene); // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
        this.sphere = BABYLON.Mesh.CreateSphere("sphere1", 12, 2, scene);
        this.sphere.position.y = 1;
        this.sphere.material = sphereMat;
           
        /*--impostor--*/
        this.sphere.physicsImpostor = new BABYLON.PhysicsImpostor(this.sphere, BABYLON.PhysicsImpostor.SphereImpostor, {mass: 1, restitution: 0.9}, scene);   
    }

    removeBall(count) {
        this.sphere.dispose();
        return count-1;
    }
}