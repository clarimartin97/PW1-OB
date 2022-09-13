class Autor {
    constructor(nombre, apellido, edad, frase) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.frase = frase;
    }
}

class Articulo {
    constructor(foto, fecha, titulo, texto, autor) {
        this.foto = `articulos/${foto}`;
        this.fecha = fecha;
        this.titulo = titulo;
        this.texto = texto;
        this.autor = autor;
    }
}

let autor1 = new Autor("Jorge", "Benigno", 56, "El misterio de la vida no es un problema a resolver, sino una realidad a experimentar");

let autor2 = new Autor("Adolfo", "Rosatti", 36, "Estar solo no tiene nada que ver con cuantas personas hay alrededor");

let autor3 = new Autor("Mario", "Araujo", 43, "Sea un hombre o sea más que un hombre. Sea firme con su propósito y firme como una piedra");

let autor4 = new Autor("Luis", "Zeballos", 39, "El hombre débil se vuelve fuerte cuando no tiene nada, porque sólo entonces puede sentir la locura de la desesperación");

let autor5 = new Autor("Elisa", "Foccia", 45, "Deja de preocuparte por envejecer y piensa en crecer");




let articulo1 = new Articulo("img/art1.jpg", "20/1/2021", "Como cuidar a tu perro si es anciano", "Todos los perros son diferentes y la esperanza de vida varía según la raza junto con muchos otros factores. Aunque sepas cuántos años tiene tu perro, podría ser más difícil saber lo bien que envejece. Los Veterinarios controlan el estado fisiológico del perro. Se encuentran con que la mayoría de los perros comienza a mostrar signos de envejecimiento alrededor de siete años para razas pequeñas o medianas y alrededor de cinco años para razas grandes y gigantes. Los signos evidentes pueden incluir una capa opaca o seca, piel escamosa, rigidez articular, pérdida de energía, aumento de peso, la ingesta mayor de agua, problemas digestivos o pérdida de músculo. Mientras que la genética y el medio ambiente desempeñan un gran papel en el envejecimiento de tu perro, todavía recuerda que puedes tener un gran impacto en su salud. Un alimento de perro de alta calidad, adaptado a sus necesidades en esta etapa vital, la alimentación puede ayudar mantenerlo en condición corporal óptima.En esta etapa de la vida de tu perro, sigue siendo importante velar por su alimentación, ejercicio, higiene, descanso y estimulación sensorial. Sin embargo, debes hacer algunas variaciones para amoldarte a su nueva condición. Debes adaptar su alimentación de acorde a su edad, aumenatar las caminatas y todo lo que incluya ejercicio,es importante no dejar de estimularlos, para que puedan mantener por más tiempo sus capacidades mentales. Dejarlos descansar bien", autor5);

let articulo2 = new Articulo("img/art2.jpg", "10/07/2021", "Comprensión de los ingredientes de los alimentos para mascotas","Los ingredientes de los alimentos para mascotas y la nutrición de las mascotas en general pueden ser confusos para los dueños de mascotas, pero los subproductos tienen una mala reputación que no siempre se merece. Los subproductos son el coproducto de los ingredientes alimentarios, incluidas las porciones de un animal que se utilizan con menos frecuencia en el suministro de alimentos para humanos de EE. UU. Pero que pueden proporcionar beneficios nutricionales esenciales. Algunos ejemplos de subproductos incluyen partes de animales limpias como hígado, riñones, corazón, pulmones, bazo, harina de gluten de maíz y sebo. No suena tan diferente de lo que verías comer a los perros salvajes africanos en Nat Geo WILD. De hecho, los gatos y perros en la naturaleza comen instintivamente estos órganos primero porque aportan una gran cantidad de nutrientes como proteínas, grasas saludables, vitaminas y minerales a la mesa. Por ejemplo, ir directamente al sitio web de un fabricante para obtener más información sobre los estándares de seguridad y calidad que están empleando, como probar las materias primas en busca de impurezas y contenido de nutrientes o trabajar con científicos de alimentos, profesiones veterinarias y nutricionistas para desarrollar productos. Cualquier subproducto de carne y aves de corral de animales de granja debe originarse en instalaciones certificadas por el USDA o una autoridad equivalente.", autor2);

let articulo3 = new Articulo("img/art3.jpg", "11/12/2020", "Los primero 30 dias luego de adoptar una mascota", "Llevar a casa un perro de refugio que adoptes puede ser un perro callejero rescatado o un perro que alguien ha entregado voluntariamente en adopción. Ya sea que haya nacido en los arbustos detrás de la lavandería o un adolescente abandonado en las calles por su antiguo dueño, el astuto callejero puede ser un verdadero desafío para incorporarlo a su vida. El famoso me siguió a casa, ¿me lo puedo quedar, mamá? El canino es un animal especial que necesita tiempo y espacio, paciencia y comprensión. Los primeros días en su hogar son especiales y críticos para una mascota. Su nuevo perro estará confundido acerca de dónde está y qué esperar de usted. Establecer una estructura clara con su familia para su perro será primordial para hacer una transición lo más suave posible. Al traer un cachorro a casa, necesitan más que una cama y un plato de comida para prosperar. También necesitan cuidados y atención constantes. Si bien la primera noche de un cachorro en casa puede requerir mucho trabajo al principio, vale la pena el esfuerzo en el futuro. Establecer buenos hábitos en esas primeras semanas sentará las bases para una vida de felicidad para usted y su perro. Recuerde, usted tiene la responsabilidad de ayudar a su cachorro a convertirse en un perro feliz y saludable.", autor3);

let articulo4 = new Articulo("img/art4.jpg", "21/12/2020", "Adopcion de perros militares", "La adopción de perros militares permite a los civiles reubicar perros de trabajo militares de manera única. Los perros de trabajo militares también se conocen como MWD. En resumen, estos perros son especialmente únicos ya que están retirados del servicio. Notablemente retirados del servicio, los perros de trabajo militares ahora están en una misión especial, por supuesto, para encontrar un hogar para siempre. Para señalar, antes de 2000, los perros de guerra militares fueron sacrificados o entregados a un ejército aliado. En 2000, el presidente Clinton firmó significativamente una ley que aprobaba la adopción de perros militares.", autor1);

let articulo5 = new Articulo("img/art5.jpg", "31/07/2020", "Los primeros dias con tu perro adulto", "Después de las presentaciones y de llevar al perro nuevo a dar un paseo por la casa y el jardín, relájese un poco después de toda la emoción. El sueño es bueno y es probable que su nuevo miembro de la familia esté agotado. Si adoptó a su perro mayor de un refugio, recuerde que proviene de un lugar extremadamente estresante y ruidoso y que en la tranquilidad y seguridad de su hogar puede dormir casi continuamente durante los primeros días para ponerse al día. A menos que exista una necesidad inmediata, guarde las actividades estresantes como bañarse o visitar al veterinario para después de estos primeros días, cuando hayan tenido la oportunidad de descansar y adaptarse. Proporcione un lugar seguro para su perro. Si ya está entrenado en jaulas, su propia jaula con una cama mullida será bienvenida. Un lugar seguro no debería ser un confinamiento solitario, así que asegúrese de no aislar la caja en un cuarto de servicio poco usado, donde se sentirá segregado y aislado de la compañía y las actividades familiares. Si su perro mayor no está entrenado en jaulas, no lo fuerce ahora, pero coloque una cama en un rincón tranquilo donde pueda sentirse seguro. Incluso después de que se sientan cómodos, muchos perros aprecian una jaula abierta o un escondite especial que sea suyo. Su perro mayor recién adoptado puede mirarlo como un halcón durante los primeros días. Él está aprendiendo sobre ti, así que déjalo disfrutar de sentirse seguro mientras aprende los sonidos y las rutinas de la casa.", autor1);

let articulo6 = new Articulo("img/art6.jpg", "02/10/2021", "Tips para entrenar perros en casa", "Adoptar un perro nuevo es un momento muy divertido y emocionante. Pero también puede ser un desafío, ya que ambos se están conociendo y conociendo su nueva vida juntos. Una fuente común de frustración para los nuevos dueños de perros es el adiestramiento en la casa de un cachorro. Si adoptó un cachorro o un perro adulto que no está completamente adiestrado en la casa, una de las primeras cosas que debe enseñarles es cómo ir al baño afuera. Incluso los perros completamente entrenados en casa necesitarán una reintroducción a los conceptos básicos cuando se muden a un nuevo hogar. Todos podemos tener trabajos que excluyen un horario compatible con las necesidades de desarrollo de un cachorro, o vivir en viviendas sin patios cercados, lo que nos obliga a entrenar en papel hasta que nuestros cachorros estén completamente inmunizados. Cuanto más difiere un estilo de vida del ideal, mayor es el desafío del entrenamiento doméstico. Estas son las claves del éxito en el adiestramiento doméstico de su perro: consistencia, supervision, paciencia, confinamiento, limpieza.", autor4);

let articulo7 = new Articulo("img/art7.jpg", "20/09/2021", "Como frenar y entrenar los ladridos de un perro", "Los ladridos molestos de los perros o los ladridos de los cachorros pueden ser un gran problema para los dueños. Nadie quiere ser el vecino del perro loco que ladra. Si desea mejorar el comportamiento de su perro, primero debe comprenderlo. Los perros tienen diferentes ladridos para diferentes comportamientos. Los perros ladrarán para alertar, para llamar la atención o por frustración y muchos ladrarán o aullarán cuando se los deje solos. Los ladridos son muy difíciles de manejar para los dueños de mascotas porque muchos de nuestros instintos terminan reforzando el comportamiento. Por ejemplo, tomemos un perro que ladra a un perro o persona extraña en la calle. Como seres humanos cariñosos, los dueños de mascotas a menudo piensan que deberían consolarlo y calmarlo con caricias, mientras que el perro probablemente interpretará esto como que te gusta mi comportamiento, sigue haciéndolo. El otro problema importante es que los perros que ladran pueden hacer que los dueños griten o castiguen al perro para intentar detenerlos. Esto podría suprimir el comportamiento, pero es más probable que provoque un aumento del estrés en el perro y que continúe ladrando. Los propietarios frustrados a veces recurren al castigo de alguna forma, como collares antiladridos, estas herramientas no son muy seguras o humanas y la mayoría de las veces empeorarán el problema al generar ansiedad.", autor5);

let articulo8 = new Articulo("img/art8.jpg", "20/11/2021", "Mascotas como regalo, es una buena idea?", "Lo has visto en las películas: la dulce y pequeña Suzy se acerca una mañana de Navidad para encontrar a su nuevo cachorro sentado pacientemente bajo el árbol con un gran lazo rojo alrededor del cuello. Suzy chilla, corre a abrazar al cachorro, quien le da una gran lamida en la mejilla, y los dos viven felices para siempre. Si bien sería fantástico que esas sorpresas navideñas siempre funcionen tan bien, a menudo no es el caso. Con mayor frecuencia, Suzy, de 3 años, que es demasiado pequeña para saber lo que realmente significa cuidar de una mascota, llora la primera vez que Puppy le muerde la mano mientras los dos juegan. Luego, mamá y papá lo amontonan en el automóvil y lo dejan en el refugio de animales local junto con los otros tres a cinco millones de perros y gatos que regresan a los refugios cada año. Pero según Stephen Zawistowski, vicepresidente sénior de la Sociedad Estadounidense para la Prevención de la Crueldad contra los Animales (ASPCA), no tiene por qué ser así. Con un poco de previsión y un compromiso sincero, las mascotas pueden ser un regalo maravilloso para su familia.", autor5);

let articulo9 = new Articulo("img/art9.jpg", "06/06/2020", "Como encontrar un perro perdido", "Normalmente, las mascotas huyen del aburrimiento agudo o la soledad, para responder a impulsos sexuales si no han sido castradas, en respuesta a eventos repentinos e inesperados que las asustan, por curiosidad si se dejan abiertas puertas, ventanas o portones, o si son nuevos en una casa y buscan su antiguo entorno. Qué tan lejos corren es solo una función de qué tan lejos los llevarán sus piernas. Los perros grandes y fuertes, especialmente los jóvenes, pueden correr 5 millas o más. Los perros pequeños pueden recorrer media milla como máximo. La mayoría de los perros se recuperan bien dentro de un círculo de dos millas de su hogar, especialmente porque normalmente nunca corren una longitud extendida en línea recta, sin importar cuán fuertes o rápidos sean. Si es un perro extrovertido, buscará otros perros y otros humanos que sean amigables y que probablemente lo consuelen, lo alimenten y lo protejan. Los patios de los vecinos y los parques públicos son lugares que le gustarán. Si es una mascota tímida o mayor y no confía en los extraños, se esconderá. Los arbustos y debajo de los autos son buenos lugares. Lo más probable es que su mascota haya intentado regresar a casa, pero habrá fallado. En una minoría de casos, el perro ha estado en peligro. Habrá llegado un coche o un depredador. Las probabilidades son mucho mayores de que alguien haya visto a su mascota y la haya acogido.", autor2);

let articulos = [articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8, articulo9];