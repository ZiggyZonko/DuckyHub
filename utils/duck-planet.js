import * as THREE from "three";

import {
    OrbitControls
} from "three/addons/controls/OrbitControls.js";


// ======================================
// Elements
// ======================================

const overlay =
    document.getElementById(
        "duck-planet-overlay"
    );


const closeButton =
    document.getElementById(
        "close-duck-planet"
    );


const container =
    document.getElementById(
        "duck-planet-container"
    );


// ======================================
// Three.js Scene
// ======================================

const scene =
    new THREE.Scene();


scene.background =
    new THREE.Color(
        0x090611
    );


// ======================================
// Camera
// ======================================

const camera =
    new THREE.PerspectiveCamera(
        45,
        1,
        0.1,
        100
    );


camera.position.set(
    0,
    0,
    5
);


// ======================================
// Renderer
// ======================================

const renderer =
    new THREE.WebGLRenderer({

        antialias: true,

        alpha: true

    });


renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
);


container.appendChild(
    renderer.domElement
);


// ======================================
// Orbit Controls
// ======================================

const controls =
    new OrbitControls(
        camera,
        renderer.domElement
    );


controls.enableDamping =
    true;


controls.enablePan =
    false;


controls.minDistance =
    3;


controls.maxDistance =
    8;


controls.target.set(
    0,
    0,
    0
);


controls.update();


// ======================================
// Lighting
// ======================================

const ambientLight =
    new THREE.AmbientLight(
        0xffffff,
        1.5
    );


scene.add(
    ambientLight
);


const sunLight =
    new THREE.DirectionalLight(
        0xffffff,
        3
    );


sunLight.position.set(
    4,
    3,
    5
);


scene.add(
    sunLight
);


// ======================================
// Duck Planet Group
// ======================================

const planetGroup =
    new THREE.Group();


scene.add(
    planetGroup
);


// ======================================
// Planet
// ======================================

const planetGeometry =
    new THREE.SphereGeometry(
        1.5,
        64,
        64
    );


const planetMaterial =
    new THREE.MeshStandardMaterial({

        color: 0xf4d03f,

        roughness: 0.8

    });


const planet =
    new THREE.Mesh(
        planetGeometry,
        planetMaterial
    );


planetGroup.add(
    planet
);


// ======================================
// Duck Continents
// ======================================

const continentMaterial =
    new THREE.MeshStandardMaterial({

        color: 0xffa31a,

        roughness: 0.9

    });


const DUCK_PLANET_RADIUS = 1.5;


// ======================================
// Create One Duck
// ======================================

function addDuckContinent(
    x,
    y,
    scale,
    rotation
) {

    const duck =
        new THREE.Group();


    // ----------------------------------
    // Body
    // ----------------------------------

    const bodyGeometry =
        new THREE.SphereGeometry(
            0.28,
            12,
            12
        );


    const body =
        new THREE.Mesh(
            bodyGeometry,
            continentMaterial
        );


    body.scale.set(
        1.4,
        1,
        0.8
    );


    duck.add(body);


    // ----------------------------------
    // Head
    // ----------------------------------

    const headGeometry =
        new THREE.SphereGeometry(
            0.18,
            12,
            12
        );


    const head =
        new THREE.Mesh(
            headGeometry,
            continentMaterial
        );


    head.position.set(
        0.25,
        0.15,
        0
    );


    duck.add(head);


    // ----------------------------------
    // Beak
    // ----------------------------------

    const beakGeometry =
        new THREE.ConeGeometry(
            0.08,
            0.18,
            8
        );


    const beakMaterial =
        new THREE.MeshStandardMaterial({

            color: 0xe67e22

        });


    const beak =
        new THREE.Mesh(
            beakGeometry,
            beakMaterial
        );


    beak.rotation.z =
        -Math.PI / 2;


    beak.position.set(
        0.42,
        0.14,
        0
    );


    duck.add(beak);


    // ==================================
    // Put Duck On Planet Surface
    // ==================================

    const surfaceZ =
        Math.sqrt(
            Math.pow(DUCK_PLANET_RADIUS, 2)
            -
            Math.pow(x, 2)
            -
            Math.pow(y, 2)
        );


    duck.position.set(
        x,
        y,
        surfaceZ + 0.03
    );


    // ==================================
    // Size and Rotation
    // ==================================

    duck.scale.setScalar(
        scale
    );


    duck.rotation.z =
        rotation;


    planetGroup.add(
        duck
    );

}


// ======================================
// Add Duck Continents
// ======================================

const duckPositions = [

    // Top
    [-0.55,  0.85, 1.05, 0.25,  0.2],
    [ 0.20,  0.90, 1.00, 0.22, -0.4],
    [ 0.75,  0.65, 0.85, 0.20,  0.5],

    // Upper left / right
    [-0.95,  0.40, 0.85, 0.23, -0.5],
    [ 0.95,  0.35, 0.80, 0.22,  0.6],

    // Middle
    [-0.65,  0.05, 1.15, 0.25,  0.3],
    [ 0.00,  0.20, 1.35, 0.23, -0.2],
    [ 0.65,  0.00, 1.15, 0.24,  0.5],

    // Lower left / right
    [-0.95, -0.40, 0.80, 0.22,  0.7],
    [ 0.90, -0.40, 0.85, 0.20, -0.4],

    // Bottom
    [-0.45, -0.75, 0.95, 0.22,  0.2],
    [ 0.30, -0.80, 0.90, 0.20, -0.5]

];

for (const duck of duckPositions) {

    addDuckContinent(
        duck[0],
        duck[1],
        duck[2],
        duck[3]
    );

}


// ======================================
// Planet Ring
// ======================================

const ringGeometry =
    new THREE.RingGeometry(
        1.8,
        1.85,
        64
    );


const ringMaterial =
    new THREE.MeshBasicMaterial({

        color: 0xf9a8d4,

        side: THREE.DoubleSide,

        transparent: true,

        opacity: 0.7

    });


const ring =
    new THREE.Mesh(
        ringGeometry,
        ringMaterial
    );


ring.rotation.x =
    Math.PI / 2.5;


planetGroup.add(
    ring
);


// ======================================
// Space Stars
// ======================================

const starGeometry =
    new THREE.BufferGeometry();


const starPositions = [];


for (
    let i = 0;
    i < 300;
    i++
) {

    starPositions.push(

        (Math.random() - 0.5) * 30,

        (Math.random() - 0.5) * 30,

        (Math.random() - 0.5) * 30

    );

}


starGeometry.setAttribute(

    "position",

    new THREE.Float32BufferAttribute(
        starPositions,
        3
    )

);


const starMaterial =
    new THREE.PointsMaterial({

        color: 0xffffff,

        size: 0.035

    });


const spaceStars =
    new THREE.Points(

        starGeometry,

        starMaterial

    );


scene.add(
    spaceStars
);


// ======================================
// Resize
// ======================================

function resizePlanet() {

    const width =
        container.clientWidth;


    const height =
        container.clientHeight;


    if (
        width === 0 ||
        height === 0
    ) {
        return;
    }


    camera.aspect =
        width / height;


    camera.updateProjectionMatrix();


    renderer.setSize(
        width,
        height,
        true
    );

}


window.addEventListener(
    "resize",
    resizePlanet
);


// ======================================
// Animation
// ======================================

function animate() {

    requestAnimationFrame(
        animate
    );


    planetGroup.rotation.y +=
        0.0015;


    controls.update();


    renderer.render(
        scene,
        camera
    );

}


animate();


// ======================================
// Open Planet
// ======================================

export function openDuckPlanet() {

    overlay.classList.add(
        "open"
    );


    requestAnimationFrame(
        () => {

            resizePlanet();

            controls.reset();

        }
    );

}


// ======================================
// Close Planet
// ======================================

function closeDuckPlanet() {

    overlay.classList.remove(
        "open"
    );

}


closeButton.addEventListener(
    "click",
    closeDuckPlanet
);


// ======================================
// Escape Key
// ======================================

document.addEventListener(
    "keydown",
    event => {

        if (

            event.key === "Escape" &&

            overlay.classList.contains(
                "open"
            )

        ) {

            closeDuckPlanet();

        }

    }
);