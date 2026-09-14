const websites = [
    // =========================
    // CODING / PROGRAMMING
    // =========================

    "https://github.com/",
    "https://gitlab.com/",
    "https://codeberg.org/",
    "https://stackoverflow.com/",
    "https://developer.mozilla.org/",
    "https://devdocs.io/",
    "https://www.w3schools.com/",
    "https://www.geeksforgeeks.org/",
    "https://www.freecodecamp.org/",
    "https://www.theodinproject.com/",
    "https://exercism.org/",
    "https://www.codewars.com/",
    "https://leetcode.com/",
    "https://www.hackerrank.com/",
    "https://projecteuler.net/",
    "https://codingame.com/",
    "https://adventofcode.com/",
    "https://rosettacode.org/",
    "https://www.reddit.com/r/programming/",
    "https://news.ycombinator.com/",

    // =========================
    // COMPUTER SCIENCE
    // =========================

    "https://teachyourselfcs.com/",
    "https://cs50.harvard.edu/",
    "https://missing.csail.mit.edu/",
    "https://www.nand2tetris.org/",
    "https://craftinginterpreters.com/",
    "https://os.phil-opp.com/",
    "https://wiki.osdev.org/",
    "https://www.geeksforgeeks.org/computer-science-fundamentals/",
    "https://cp-algorithms.com/",
    "https://visualgo.net/",
    "https://algorithm-visualizer.org/",
    "https://bigocheatsheet.com/",
    "https://computerhistory.org/",
    "https://www.computer.org/",
    "https://www.reddit.com/r/compsci/",

    // =========================
    // MATHEMATICS
    // =========================

    "https://www.wolframalpha.com/",
    "https://mathworld.wolfram.com/",
    "https://www.desmos.com/",
    "https://www.geogebra.org/",
    "https://www.symbolab.com/",
    "https://artofproblemsolving.com/",
    "https://brilliant.org/",
    "https://mathigon.org/",
    "https://betterexplained.com/",
    "https://www.3blue1brown.com/",
    "https://www.khanacademy.org/",
    "https://projecteuler.net/",
    "https://oeis.org/",
    "https://math.stackexchange.com/",
    "https://www.reddit.com/r/math/",
    "https://www.reddit.com/r/learnmath/",
    "https://www.reddit.com/r/askmath/",
    "https://www.cut-the-knot.org/",
    "https://www.numberphile.com/",
    "https://www.futilitycloset.com/",

    // =========================
    // CALCULUS / ANALYSIS
    // =========================

    "https://tutorial.math.lamar.edu/",
    "https://www.mathsisfun.com/calculus/",
    "https://en.wikipedia.org/wiki/Calculus",
    "https://en.wikipedia.org/wiki/Real_analysis",
    "https://en.wikipedia.org/wiki/Linear_algebra",
    "https://www.3blue1brown.com/topics/calculus",
    "https://www.3blue1brown.com/topics/linear-algebra",
    "https://www.3blue1brown.com/topics/differential-equations",
    "https://www.desmos.com/calculator",
    "https://www.geogebra.org/calculator",

    // =========================
    // PHYSICS
    // =========================

    "https://physicsworld.com/",
    "https://www.physicsclassroom.com/",
    "https://www.feynmanlectures.caltech.edu/",
    "https://www.hyperphysics.phy-astr.gsu.edu/",
    "https://www.physicstutorials.org/",
    "https://www.iop.org/",
    "https://www.aps.org/",
    "https://www.aip.org/",
    "https://physics.stackexchange.com/",
    "https://www.reddit.com/r/Physics/",
    "https://www.reddit.com/r/AskPhysics/",
    "https://www.reddit.com/r/PhysicsStudents/",
    "https://www.youtube.com/@Veritasium",
    "https://www.youtube.com/@3blue1brown",
    "https://www.youtube.com/@Fermilab",
    "https://www.youtube.com/@PBS_SpaceTime",

    // =========================
    // ASTRONOMY / SPACE
    // =========================

    "https://www.nasa.gov/",
    "https://www.nasa.gov/missions/",
    "https://science.nasa.gov/",
    "https://www.esa.int/",
    "https://www.eso.org/",
    "https://www.spacex.com/",
    "https://www.jpl.nasa.gov/",
    "https://eyes.nasa.gov/",
    "https://stellarium-web.org/",
    "https://www.heavens-above.com/",
    "https://exoplanets.nasa.gov/",
    "https://sdo.gsfc.nasa.gov/",
    "https://spaceweather.com/",
    "https://apod.nasa.gov/",
    "https://www.space.com/",
    "https://www.astronomy.com/",
    "https://www.reddit.com/r/space/",
    "https://www.reddit.com/r/astronomy/",
    "https://www.reddit.com/r/astrophysics/",
    "https://www.reddit.com/r/spaceporn/",

    // =========================
    // ENGINEERING
    // =========================

    "https://www.engineering.com/",
    "https://www.asme.org/",
    "https://www.ieee.org/",
    "https://www.ans.org/",
    "https://www.engineersaustralia.org.au/",
    "https://www.reddit.com/r/engineering/",
    "https://www.reddit.com/r/AskEngineers/",
    "https://www.reddit.com/r/MechanicalEngineering/",
    "https://www.reddit.com/r/ECE/",
    "https://www.reddit.com/r/ElectricalEngineering/",
    "https://www.reddit.com/r/EngineeringStudents/",
    "https://www.reddit.com/r/NuclearEngineering/",

    // =========================
    // ELECTRONICS
    // =========================

    "https://www.allaboutcircuits.com/",
    "https://www.electronics-tutorials.ws/",
    "https://www.electronics-lab.com/",
    "https://www.circuitlab.com/",
    "https://www.falstad.com/circuit/",
    "https://easyeda.com/",
    "https://www.kicad.org/",
    "https://www.arduino.cc/",
    "https://www.raspberrypi.com/",
    "https://www.espressif.com/",
    "https://www.sparkfun.com/",
    "https://learn.adafruit.com/",
    "https://www.eevblog.com/",
    "https://www.reddit.com/r/AskElectronics/",
    "https://www.reddit.com/r/electronics/",
    "https://www.reddit.com/r/arduino/",
    "https://www.reddit.com/r/esp32/",
    "https://www.reddit.com/r/raspberry_pi/",

    // =========================
    // ROBOTICS
    // =========================

    "https://www.ros.org/",
    "https://gazebosim.org/",
    "https://www.vexrobotics.com/",
    "https://www.firstinspires.org/",
    "https://robotics.stackexchange.com/",
    "https://www.reddit.com/r/robotics/",
    "https://www.reddit.com/r/roboticsprojects/",
    "https://www.reddit.com/r/ROS/",
    "https://www.reddit.com/r/arduino/",
    "https://www.reddit.com/r/AskRobotics/",

    // =========================
    // CHEMISTRY
    // =========================

    "https://pubchem.ncbi.nlm.nih.gov/",
    "https://www.chemspider.com/",
    "https://www.rsc.org/",
    "https://www.chemguide.co.uk/",
    "https://www.chemistryworld.com/",
    "https://phet.colorado.edu/",
    "https://www.periodicvideos.com/",
    "https://ptable.com/",
    "https://www.reddit.com/r/chemistry/",
    "https://www.reddit.com/r/chemhelp/",

    // =========================
    // BIOLOGY
    // =========================

    "https://www.ncbi.nlm.nih.gov/",
    "https://www.ebi.ac.uk/",
    "https://www.genome.gov/",
    "https://www.hhmi.org/",
    "https://www.khanacademy.org/science/biology",
    "https://www.biointeractive.org/",
    "https://www.biorxiv.org/",
    "https://www.reddit.com/r/biology/",
    "https://www.reddit.com/r/labrats/",
    "https://www.reddit.com/r/genetics/",

    // =========================
    // COMPUTER HARDWARE
    // =========================

    "https://www.techpowerup.com/",
    "https://www.cpu-world.com/",
    "https://www.tomshardware.com/",
    "https://www.anandtech.com/",
    "https://www.servethehome.com/",
    "https://www.phoronix.com/",
    "https://www.reddit.com/r/hardware/",
    "https://www.reddit.com/r/buildapc/",
    "https://www.reddit.com/r/homelab/",
    "https://www.reddit.com/r/selfhosted/",

    // =========================
    // LINUX / OPEN SOURCE
    // =========================

    "https://www.kernel.org/",
    "https://archlinux.org/",
    "https://wiki.archlinux.org/",
    "https://www.cachyos.org/",
    "https://www.debian.org/",
    "https://www.fedoraproject.org/",
    "https://www.gnu.org/",
    "https://opensource.org/",
    "https://distrowatch.com/",
    "https://www.linuxfromscratch.org/",
    "https://linuxjourney.com/",
    "https://explainshell.com/",
    "https://commandlinefu.com/",
    "https://www.reddit.com/r/linux/",
    "https://www.reddit.com/r/linuxquestions/",
    "https://www.reddit.com/r/unixporn/",
    "https://www.reddit.com/r/archlinux/",
    "https://www.reddit.com/r/cachyos/",

    // =========================
    // AI / MACHINE LEARNING
    // =========================

    "https://huggingface.co/",
    "https://paperswithcode.com/",
    "https://arxiv.org/",
    "https://www.tensorflow.org/",
    "https://pytorch.org/",
    "https://scikit-learn.org/",
    "https://www.kaggle.com/",
    "https://distill.pub/",
    "https://playground.tensorflow.org/",
    "https://www.reddit.com/r/MachineLearning/",
    "https://www.reddit.com/r/learnmachinelearning/",
    "https://www.reddit.com/r/LocalLLaMA/",

    // =========================
    // RESEARCH / PAPERS
    // =========================

    "https://arxiv.org/",
    "https://scholar.google.com/",
    "https://www.researchgate.net/",
    "https://pubmed.ncbi.nlm.nih.gov/",
    "https://www.jstor.org/",
    "https://doaj.org/",
    "https://www.semanticscholar.org/",
    "https://www.nature.com/",
    "https://www.science.org/",
    "https://www.pnas.org/",
    "https://www.reddit.com/r/AskAcademia/",

    // =========================
    // SIMULATIONS / INTERACTIVE
    // =========================

    "https://phet.colorado.edu/",
    "https://www.myphysicslab.com/",
    "https://www.falstad.com/",
    "https://www.desmos.com/",
    "https://www.geogebra.org/",
    "https://www.wolframalpha.com/",
    "https://www.immersivemath.com/",
    "https://www.bruno-simon.com/",
    "https://neal.fun/",
    "https://ciechanow.ski/",
    "https://explorabl.es/",
    "https://experiments.withgoogle.com/",

    // =========================
    // COOL / WEIRD SCIENCE
    // =========================

    "https://neal.fun/",
    "https://ciechanow.ski/",
    "https://waitbutwhy.com/",
    "https://www.sciencealert.com/",
    "https://www.quantamagazine.org/",
    "https://www.scientificamerican.com/",
    "https://www.newscientist.com/",
    "https://www.popularmechanics.com/",
    "https://www.iflscience.com/",
    "https://www.veritasium.com/",
    "https://www.youtube.com/@SmarterEveryDay",
    "https://www.youtube.com/@MarkRober",
    "https://www.youtube.com/@SteveMould",
    "https://www.youtube.com/@minutephysics",

    // =========================
    // DATA / VISUALISATION
    // =========================

    "https://observablehq.com/",
    "https://ourworldindata.org/",
    "https://www.gapminder.org/",
    "https://data.world/",
    "https://www.kaggle.com/",
    "https://datavizproject.com/",
    "https://informationisbeautiful.net/",
    "https://www.data-to-viz.com/",
    "https://www.reddit.com/r/dataisbeautiful/",

    // =========================
    // SECURITY / CTF
    // =========================

    "https://picoctf.org/",
    "https://overthewire.org/",
    "https://tryhackme.com/",
    "https://www.hackthebox.com/",
    "https://portswigger.net/web-security",
    "https://cryptohack.org/",
    "https://ctftime.org/",
    "https://www.reddit.com/r/HowToHack/",
    "https://www.reddit.com/r/cybersecurity/",
    "https://www.reddit.com/r/AskNetsec/",

    // =========================
    // WEB DEVELOPMENT
    // =========================

    "https://developer.mozilla.org/",
    "https://web.dev/",
    "https://css-tricks.com/",
    "https://caniuse.com/",
    "https://javascript.info/",
    "https://roadmap.sh/",
    "https://frontendmentor.io/",
    "https://codepen.io/",
    "https://jsfiddle.net/",
    "https://threejs.org/",
    "https://webglsamples.org/",
    "https://www.reddit.com/r/webdev/",
    "https://www.reddit.com/r/frontend/",

    // =========================
    // GAME DEVELOPMENT
    // =========================

    "https://godotengine.org/",
    "https://unity.com/",
    "https://www.unrealengine.com/",
    "https://gamedev.net/",
    "https://www.gamedevmap.com/",
    "https://itch.io/",
    "https://www.gamedeveloper.com/",
    "https://www.reddit.com/r/gamedev/",
    "https://www.reddit.com/r/IndieDev/",
    "https://www.reddit.com/r/godot/",

    // =========================
    // RANDOM INTERNET
    // =========================

    "https://wikipedia.org/",
    "https://archive.org/",
    "https://www.britannica.com/",
    "https://www.openculture.com/",
    "https://www.atlasobscura.com/",
    "https://www.inaturalist.org/",
    "https://www.wikidata.org/",
    "https://www.wikimedia.org/",
    "https://www.gutenberg.org/",
    "https://www.openculture.com/freeonlinecourses",
    "https://radio.garden/",
    "https://www.window-swap.com/",
    "https://pointerpointer.com/",
    "https://theuselessweb.com/"
];

function randomWebsite() {
    const random = websites[Math.floor(Math.random() * websites.length)];
    window.location.href = random;
}

function randomWebsite() {
    const random = websites[Math.floor(Math.random() * websites.length)];
    window.location.href = random;
}