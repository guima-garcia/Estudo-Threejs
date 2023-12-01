/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const objectsDistance = 4

// Material
const material = new THREE.MeshToonMaterial({ color: '#11d989'});
const material2 = new THREE.MeshToonMaterial({ color: '#11B4D9' });
const material3 = new THREE.MeshToonMaterial({ color: '#80F2DD' });
const material4 = new THREE.MeshToonMaterial({ color: '#F2B441' });
const material5 = new THREE.MeshToonMaterial({ color: '#F2594B' });


const torusGeo = new THREE.TorusGeometry(0.1, 0.05, 16, 40);
const cubeGeo = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const coneGeo = new THREE.ConeGeometry(0.1, 0.2, 32);
const cylinderGeo = new THREE.CylinderGeometry( 0.1, 0.1, 0.2, 16 );
const sphereGeo = new THREE.SphereGeometry( 0.1, 16, 16 );
const torusKnotGeo = new THREE.TorusKnotGeometry(0.1, 0.03, 40, 40);


// Meshes
const mesh1 = new THREE.Mesh(torusGeo, material)
const mesh2 = new THREE.Mesh(cubeGeo,material2)
const mesh3 = new THREE.Mesh(coneGeo, material3)
const mesh4 = new THREE.Mesh(cylinderGeo, material4)
const mesh5 = new THREE.Mesh(sphereGeo, material5)
const mesh6 = new THREE.Mesh(torusKnotGeo,material)
const mesh7 = new THREE.Mesh(torusGeo, material2)
const mesh8 = new THREE.Mesh(cubeGeo, material3)
const mesh9 = new THREE.Mesh(coneGeo, material4)
const mesh10 = new THREE.Mesh(cylinderGeo, material5)
const mesh11 = new THREE.Mesh(sphereGeo, material)
const mesh12 = new THREE.Mesh(torusKnotGeo,material)
const mesh13 = new THREE.Mesh(cubeGeo, material2)
const mesh14 = new THREE.Mesh(coneGeo, material3)
const mesh15 = new THREE.Mesh(cylinderGeo, material4)
const mesh16 = new THREE.Mesh(sphereGeo,material5)
const mesh17 = new THREE.Mesh(torusKnotGeo, material2)
const mesh18 = new THREE.Mesh(cubeGeo, material3)
const mesh19 = new THREE.Mesh(coneGeo, material4)
const mesh20 = new THREE.Mesh(cylinderGeo, material5)
const mesh21 = new THREE.Mesh(torusGeo, material)
const mesh22 = new THREE.Mesh(cubeGeo,material2)
const mesh23 = new THREE.Mesh(coneGeo, material3)
const mesh24 = new THREE.Mesh(cylinderGeo, material4)
const mesh25 = new THREE.Mesh(sphereGeo, material5)
const mesh26 = new THREE.Mesh(torusKnotGeo,material)
const mesh27 = new THREE.Mesh(torusGeo, material)
const mesh28 = new THREE.Mesh(cubeGeo, material2)
const mesh29 = new THREE.Mesh(coneGeo, material3)
const mesh30 = new THREE.Mesh(cylinderGeo, material4)
const mesh31 = new THREE.Mesh(sphereGeo, material5)
const mesh32 = new THREE.Mesh(torusKnotGeo,material)
const mesh33 = new THREE.Mesh(cubeGeo, material2)
const mesh34 = new THREE.Mesh(coneGeo, material3)
const mesh35 = new THREE.Mesh(cylinderGeo, material4)
const mesh36 = new THREE.Mesh(sphereGeo,material5)
const mesh37 = new THREE.Mesh(torusKnotGeo, material)
const mesh38 = new THREE.Mesh(cubeGeo, material)
const mesh39 = new THREE.Mesh(coneGeo, material2)
const mesh40 = new THREE.Mesh(cylinderGeo, material3)

const sectionMeshes = [ mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12, mesh13, mesh14, mesh15, mesh16, mesh17, mesh18, mesh19, mesh20, mesh21, mesh22, mesh23, mesh24, mesh25, mesh26, mesh27, mesh28, mesh29, mesh30, mesh31, mesh32, mesh33, mesh34, mesh35, mesh36, mesh37, mesh38, mesh39, mesh40 ]

function getRndInteger(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

for(let i = 0; i < sectionMeshes.length; i++)
{
    sectionMeshes[i].position.y = - objectsDistance * getRndInteger(-2, 2)
    sectionMeshes[i].position.x = getRndInteger(-4, 4)
    scene.add(sectionMeshes[i])
}



const torus = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    new THREE.MeshToonMaterial({ color: '#11B4D9', wireframe: true})
)

const cone = new THREE.Mesh(
    new THREE.SphereGeometry( 1, 32, 16 ),
    new THREE.MeshToonMaterial({ color: '#F2594B', wireframe: true})
)
const torusknot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    new THREE.MeshToonMaterial({ color: '#F2B441', wireframe: true})
)

torus.position.y = - objectsDistance * 0
cone.position.y = - objectsDistance * 1
torusknot.position.y = - objectsDistance * 2

torus.position.x = 2
cone.position.x = - 2
torusknot.position.x = 2
scene.add(torus,cone,torusknot)

/**
 * Particles
 */
// Geometry
const particlesCount = 200
const positions = new Float32Array(particlesCount * 3)

for(let i = 0; i < particlesCount; i++)
{
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * sectionMeshes.length
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

// Material
const particlesMaterial = new THREE.PointsMaterial({
    color: '#1e1a20',
    sizeAttenuation: true,
    size: 0.03
})

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Scroll
 */
let scrollY = window.scrollY
let currentSection = 0

window.addEventListener('scroll', () =>
{
    scrollY = window.scrollY
    const newSection = Math.round(scrollY / sizes.height)

    if(newSection != currentSection)
    {
        currentSection = newSection

        gsap.to(
            sectionMeshes[currentSection].rotation,
            {
                duration: 1.5,
                ease: 'power2.inOut',
                x: '+=6',
                y: '+=3'
            }
        )
    }
})

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

/**
 * Camera
 */
// Group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Animate meshes
    for(const mesh of sectionMeshes)
    {
        mesh.rotation.x += deltaTime * 0.1
        mesh.rotation.y += deltaTime * 0.12
    }

    // Animate camera
    camera.position.y = - scrollY / sizes.height * objectsDistance

    const parallaxX = cursor.x * 0.5
    const parallaxY = - cursor.y * 0.5
    
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()