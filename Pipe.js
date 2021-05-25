class Pipe {
    pipe = null;
    pipe1 = null;

    constructor (pos,rot, size) {
        var pipeMat = new BABYLON.StandardMaterial("ball",scene);
        pipeMat.ambientTexture = new BABYLON.Texture("/assets/images/pipeTexture.jpg", scene); 
        
        BABYLON.SceneLoader.ImportMeshAsync("", '/pipes/','pipes.stl').then((result) => {
            this.pipe = result.meshes[0];
            this.pipe.position = pos;
            this.pipe.rotation = rot;
            this.pipe.scaling = size;
            this.pipe.material = pipeMat;
            this.pipe.checkCollisions = true;

            this.pipe.physicsImpostor = new BABYLON.PhysicsImpostor(this.pipe, BABYLON.PhysicsImpostor.MeshImpostor, {mass: 0, restitution:1}, scene);
        });

    }

    getPipe() {
        return this.pipe;
    }
}


