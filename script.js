function rotateEarth() {
    const earth = document.getElementById('earth');
    let rotation = 0;

    function animate() {
        rotation += 0.1; 

        
        earth.style.transform = `rotate(${rotation}deg)`;

        requestAnimationFrame(animate);
    }

    animate();
}


window.onload = rotateEarth;
