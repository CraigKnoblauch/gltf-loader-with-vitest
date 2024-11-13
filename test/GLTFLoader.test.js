import { it, expect, describe } from 'vitest'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { TextureLoader, Texture } from 'three'

describe('GLTFLoader', () => {
    it('Should load gltf', () => {
        const loader = new GLTFLoader()
        loader.load('./test.glb', (gltf) => {
            expect(gltf).not.toBeUndefined()  
        })
    })

    it('Should load texture', () => {
        const loader = new TextureLoader()
        const texture = loader.load('./test-texture-1024.png')
        expect(texture).toBeInstanceOf(Texture)
    })

    it('Should not load texture that doesn\'t exist', () => {
        const loader = new TextureLoader()
        const texture = loader.load('./dne.png')
        expect(texture).not.toBeInstanceOf(Texture)
    })
})
