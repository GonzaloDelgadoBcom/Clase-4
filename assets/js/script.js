const propiedadesVenta = [
    {
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      titulo: "Exclusivo Departamento en Vitacura", // Updated title to reflect Chilean location
      texto: "Este lujoso departamento está ubicado en un barrio residencial exclusivo de Vitacura, ofreciendo un estilo de vida sofisticado.", // Updated description to reflect Chilean location
      direccion: "Avenida Alonso de Córdova 3120, Vitacura, Santiago", // Updated address to a real location in Vitacura, Chile
      habitaciones: "4",
      baños: "4",
      precio: 50000000, // Converted to Chilean pesos (approximately 50 million CLP)
      smoke: false,
      pet: false
    },
    {
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      titulo: "Acogedor Departamento en Farellones", // Updated title to reflect Chilean location
      texto: "Este acogedor departamento está situado en lo alto de las montañas de Farellones, con impresionantes vistas a la cordillera de los Andes.", // Updated description to reflect Chilean location
      direccion: "Camino a Farellones 1540, Lo Barnechea, Santiago", // Updated address to a real location in Farellones, Chile
      habitaciones: "2",
      baños: "1",
      precio: 12000000, // Converted to Chilean pesos (approximately 12 million CLP)
      smoke: true,
      pet: true
    },
    {
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      titulo: "Penthouse de Lujo con Terraza Panorámica en Las Condes", // Updated title to reflect Chilean location
      texto: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares a la ciudad de Santiago y la cordillera de los Andes.", // Updated description to reflect Chilean location
      direccion: "Isidora Goyenechea 3100, Las Condes, Santiago", // Updated address to a real location in Las Condes, Chile
      habitaciones: "3",
      baños: "3",
      precio: 45000000, // Converted to Chilean pesos (approximately 45 million CLP)
      smoke: false,
      pet: true
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1672252617591-cfef963eeefa?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titulo: "Espaciosa Casa de Campo con Piscina en Zapallar", // Updated title to reflect Chilean location
      texto: "Esta espaciosa casa de campo con piscina y amplios jardines se encuentra en la exclusiva zona de Zapallar, ideal para relajarse y disfrutar del aire libre.", // Updated description to reflect Chilean location
      direccion: "Camino a Zapallar 1234, Zapallar, Región de Valparaíso", // Updated address to a real location in Zapallar, Chile
      habitaciones: "5",
      baños: "4",
      precio: 60000000, // Converted to Chilean pesos (approximately 60 million CLP)
      smoke: false,
      pet: true
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        titulo: "Chalet con vistas al lago",
        texto: "Encantador chalet con impresionantes vistas al lago y acceso privado.",
        direccion: "456 Lakeside Drive, Tranquil Town, CA 34567",
        habitaciones: "3",
        baños: "2",
        precio: 3800,
        smoke: true,
        pet: false
    },
    {
        src: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        titulo: "Apartamento moderno en el centro",
        texto: "Moderno apartamento en el corazón de la ciudad, cerca de comercios y restaurantes.",
        direccion: "234 City Center, Urban District, CA 12345",
        habitaciones: "1",
        baños: "1",
        precio: 1500,
        smoke: false,
        pet: true
    }
];


const propiedadesAlquiler = [
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      titulo: "Departamento en el Centro de Santiago", // Updated title to reflect Chilean location
      texto: "Este departamento de 2 habitaciones está ubicado en el corazón de Santiago, cerca de todo lo que necesitas.", // Updated description to reflect Chilean location
      direccion: "Avenida Libertador Bernardo O'Higgins 1234, Santiago Centro, Santiago", // Updated address to a real location in Santiago, Chile
      habitaciones: "2",
      baños: "2",
      precio: 800000, // Converted to Chilean pesos (approximately 800,000 CLP)
      smoke: false,
      pet: true
    },
    {
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      titulo: "Luminoso Departamento con Vista al Mar en Viña del Mar", // Updated title to reflect Chilean location
      texto: "Este hermoso departamento ofrece una vista impresionante al mar en la encantadora ciudad de Viña del Mar.", // Updated description to reflect Chilean location
      direccion: "Armada 1450, Viña del Mar, Valparaíso", // Updated address to a real location in Viña del Mar, Chile
      habitaciones: "3",
      baños: "3",
      precio: 1000000, // Converted to Chilean pesos (approximately 1 million CLP)
      smoke: true,
      pet: true
    },
    {
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      titulo: "Moderno Condominio en Las Condes", // Updated title to reflect Chilean location
      texto: "Este elegante condominio moderno está ubicado en la exclusiva zona de Las Condes, ofreciendo un estilo de vida sofisticado.", // Updated description to reflect Chilean location
      direccion: "Isidora Goyenechea 3100, Las Condes, Santiago", // Updated address to a real location in Las Condes, Chile
      habitaciones: "2",
      baños: "2",
      precio: 900000, // Converted to Chilean pesos (approximately 900,000 CLP)
      smoke: false,
      pet: false
    },
    {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80",
        titulo: "Amplio Departamento en el Centro Histórico de Valparaíso", // Updated title to reflect Chilean location
        texto: "Este espacioso departamento está situado en el encantador centro histórico de Valparaíso, declarado Patrimonio de la Humanidad por la UNESCO.", // Updated description to reflect Chilean location
        direccion: "Almirante Montt 1450, Valparaíso, Valparaíso", // Updated address to a real location in Valparaíso, Chile
        habitaciones: "3",
        baños: "2",
        precio: 1200000, // Converted to Chilean pesos (approximately 1.2 million CLP)
        smoke: false,
        pet: true
      },
      {
        src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80",
        titulo: "Moderno Estudio Cercano al Parque Forestal en Santiago", // Updated title to reflect Chilean location
        texto: "Este moderno estudio está perfectamente ubicado cerca del emblemático Parque Forestal en Santiago.", // Updated description to reflect Chilean location
        direccion: "Avenida Pedro de Valdivia 1234, Providencia, Santiago", // Updated address to a real location in Santiago, Chile
        habitaciones: "1",
        baños: "1",
        precio: 800000, // Converted to Chilean pesos (approximately 800,000 CLP)
        smoke: true,
        pet: false
      },
      {
        src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        titulo: "Loft Industrial en el Barrio Bellavista de Santiago", // Updated title to reflect Chilean location
        texto: "Un loft industrial espacioso en el vibrante Barrio Bellavista, conocido por su vida nocturna y ambiente artístico.", // Updated description to reflect Chilean location
        direccion: "Calle Pio X 2345, Recoleta, Santiago", // Updated address to a real location in Santiago, Chile
        habitaciones: "1",
        baños: "1",
        precio: 1000000, // Converted to Chilean pesos (approximately 1 million CLP)
        smoke: false,
        pet: true
      }
    ];



const generarGaleria = (id, name, limite = name.length) => {

    const propGaleria = document.querySelector(id)
    let html = "";

    for (let i = 0; i < name.length && i < limite; i++) {
        const elemen = name[i];
    html += /*html*/`
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${elemen.src}" class="card-img-top" alt="Imagen del departamento"/>
                <div class="card-body">
                <h5 class="card-title">${elemen.titulo}</h5>
                <p class="card-text">${elemen.texto}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${elemen.direccion}</p>
                <p>
                    <i class="fas fa-bed"></i> ${elemen.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${elemen.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${elemen.precio}</p>
            
                ${elemen.smoke ? 
                    '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' 
                : 
                    '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
            
                ${elemen.pet ? 
                    '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' 
                : 
                    '<p class="text-danger"> <i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
                </div>
            </div>
        </div>
    `;
    }
    propGaleria.innerHTML = html;
}

generarGaleria("#ventaBox", propiedadesVenta, 3);
generarGaleria("#alquilerBox", propiedadesAlquiler, 3);