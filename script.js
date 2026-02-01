document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: '-q4ceXyEkGLqyEkY_h1yK_SbfqPSbI.png', text: 'Andrea und sein Mercedes' },
        { src: '8no_gsJrIEQ2wrPy0XkcX_UpDf2rrt.png', text: 'Andrea beim Cyclassics' },
        { src: 'dcBfH7uJHGcHvDx1I1PYv_jgSoUQor.png', text: 'Ein begnadeteter Skifahrer' },
        { src: 'eda86KuRC_ro8y6jJoQuG_OFURFE2Z.png', text: 'Beim Basketball ein ganz Großer' },
        { src: 'GeodsKygC57rJthH3rdBu_gNicJrs3.png', text: 'Andrea in den Bergen' },
        { src: 'ikXvw5EU9zsfvU2tj-T7Y_jknLiCbX.png', text: 'Er rast den Berg hinab' },
        { src: 'OhFzvGKvSFLaJH69yzdP4_EuLeOzgG.png', text: 'Zaubern ist seine Leidenschaft' }
    ];

    const gallery = document.getElementById('gallery');

    // 1. Generate Photo Sections
    images.forEach((imgObj, index) => {
        const section = document.createElement('section');
        section.classList.add('section');
        
        const container = document.createElement('div');
        container.classList.add('photo-container');

        const img = document.createElement('img');
        img.src = `imgs/${imgObj.src}`;
        img.alt = imgObj.text;
        img.loading = "lazy";
        
        const caption = document.createElement('p');
        caption.classList.add('photo-caption');
        caption.textContent = imgObj.text;

        container.appendChild(img);
        container.appendChild(caption);
        section.appendChild(container);
        gallery.appendChild(section);
    });

    // 2. Add End Section
    const endSection = document.createElement('section');
    endSection.classList.add('section', 'end-cover');
    endSection.innerHTML = `
        <h2>Auf viele weitere schöne Momente!</h2>
    `;
    gallery.appendChild(endSection);
});
