import { it, expect, describe } from 'vitest'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

describe('GLTFLoader', () => {
    it('Should load gltf', () => {
        const loader = new GLTFLoader()
        loader.load('./test.glb', (gltf) => {
            expect(gltf).not.toBeUndefined()  
        })
    })
})
