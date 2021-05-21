class Pipe {
    pipe = null;
    pipe1 = null;

    constructor (pos,rot, size) {
        var pipeMat = new BABYLON.StandardMaterial("ball",scene);
        pipeMat.ambientTexture = new BABYLON.Texture("/assets/images/pipeTexture.jpg", scene); 
        BABYLON.SceneLoader.ImportMeshAsync("", '/pipes/','Free3D-LP-Pipes.obj').then((result) => {
            this.pipe = result.meshes[0];
            this.pipe.position = pos;
            this.pipe.rotation = rot;
            this.pipe.scaling = size;
            this.pipe.material = pipeMat;
            this.pipe.checkCollisions = true;

            //não funciona ;-;
            this.pipe.physicsImpostor = new BABYLON.PhysicsImpostor(this.pipe, BABYLON.PhysicsImpostor.CylinderImpostor, {mass: 0, restitution:1}, scene);
        });

    }

    getPipe() {
        return this.pipe;
    }
}


