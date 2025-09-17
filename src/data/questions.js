export const questions = [
  {
    _id: "1",
    question:
      "Como los autos 100% eléctricos suenan poco, ¿son peligrosamente silenciosos en trancadera?",
    correct:
      "No; muchos autos 100% eléctricos traen sonido externo (AVAS) a baja velocidad y, obvio, bocina.",
    incorrect1: "Sí, por eso están prohibidos.",
    incorrect2: "Solo si el auto es negro.",
    feedback:
      "A baja velocidad emiten un zumbido de aviso; igual, siempre hay que manejar atentos.",
  },
  {
    _id: "2",
    question:
      "¿Cuánto tarda una carga rápida (DC) típica en Bolivia para un auto 100% eléctrico?",
    correct: "Unos 20 a 40 minutos para llegar al 80%.",
    incorrect1: "24 horas siempre.",
    incorrect2: "Solo en fábricas especiales.",
    feedback:
      "Los cargadores rápidos DC recuperan gran parte de la batería en poco tiempo.",
  },
  {
    _id: "3",
    question:
      "¿Puedo cargarle ami auto 100% eléctrico un poquito de gasolina por si acaso?",
    correct: "No, los autos 100% eléctricos no usan combustible.",
    incorrect1: "Claro, media tacita ayuda.",
    incorrect2: "Solo gasolina premium.",
    feedback:
      "Los autos 100% eléctricos no usan combustible: cero gasolina y cero cambios de aceite.",
  },
  {
    _id: "4",
    question:
      "¿Un auto 100% eléctrico funciona bien en el frío del altiplano (La Paz/Oruro/Potosí)?",
    correct:
      "Sí; en los autos 100% eléctricos la autonomía puede bajar con frío, pero operan normal.",
    incorrect1: "No, se apagan bajo 5 °C.",
    incorrect2: "Solo entre 20 a 25 °C.",
    feedback:
      "El clima no afecta su capacidad de funcionar; lo que puede bajar es la autonomía.",
  },
  {
    _id: "5",
    question:
      "¿Es seguro llevar un auto 100% eléctrico al lavadero en Santa Cruz en época de lluvia?",
    correct:
      "Sí; los autos 100% eléctricos están sellados: el agua no tiene por dónde entrar.",
    incorrect1: "No, se mojan los cables.",
    incorrect2: "Solo si apagas el celular.",
    feedback:
      "Los componentes eléctricos y de la batería están sellados y protegidos.",
  },
  {
    _id: "6",
    question:
      "En Bolivia, ¿el costo por kilómetro de un auto 100% eléctrico, frente a uno a gasolina, es muy alto?",
    correct: "El costo es mucho menor con electricidad.",
    incorrect1: "Siempre es igual o más caro.",
    incorrect2: "Depende del color del auto.",
    feedback:
      "La electricidad es mucho más económica y el mantenimiento cuesta mucho menos.",
  },
  {
    _id: "7",
    question:
      "¿Cada cuánto hay que cambiar la batería de tracción de un auto 100% eléctrico?",
    correct: "Dura muchos años; garantías de 8 a 10 años en muchos modelos.",
    incorrect1: "Cada 2 años, sí o sí.",
    incorrect2: "Pierde 50% en un año.",
    feedback: "La degradación es gradual y las garantías son largas.",
  },
  {
    _id: "8",
    question:
      "¿Puedo enchufar un auto 100% eléctrico al tomacorriente de casa (220 V)?",
    correct: "Sí, con el cargador portátil; es más lento que un wallbox.",
    incorrect1: "No, necesita subestación.",
    incorrect2: "Solo si desconectas la heladera y tu celular.",
    feedback:
      "La carga domiciliaria es práctica y económica; te olvidas de hacer colas para comprar gasolina.",
  },
  {
    _id: "9",
    question:
      "¿Un auto 100% eléctrico no sirve para la carretera Santa Cruz a Cochabamba?",
    correct: "Sí sirve: mantiene velocidades de autopista sin drama.",
    incorrect1: "No pasa de 80 km/h.",
    incorrect2: "Solo si va en bajada.",
    feedback: "Tienen buen torque y viajan cómodo con paradas planificadas.",
  },
  {
    _id: "10",
    question: "¿Cómo arranca un auto 100% eléctrico en el semáforo?",
    correct: "Con aceleración rápida por par (torque) instantáneo.",
    incorrect1: "Más lento que uno a gasolina.",
    incorrect2: "No supera 80 km/h.",
    feedback:
      "Entrega energía desde la partida (0 km) por eso arranca con toda su fuerza",
  },
  {
    _id: "11",
    question:
      "Si dejo un auto 100% eléctrico estacionado 2 semanas, ¿me deja a pata?",
    correct: "No; solo hay ligera pérdida de carga.",
    incorrect1: "Sí, no despierta.",
    incorrect2: "Depende del horóscopo del auto.",
    feedback: "La autodescarga existe pero es baja; tranqui.",
  },
  {
    _id: "12",
    question: "¿Se reciclan baterías de autos 100% eléctricos en general?",
    correct: "Sí; además pueden tener segunda vida como respaldo energético.",
    incorrect1: "No, se entierran.",
    incorrect2: "Solo reciclan el plástico.",
    feedback:
      "Se recuperan materiales valiosos y se reutilizan en energía fija.",
  },
  {
    _id: "13",
    question: "¿Se puede cargar un auto 100% eléctrico en casa en Bolivia?",
    correct:
      "Sí: tomacorriente/cargador portátil o cargador domiciliario (wallbox).",
    incorrect1: "No, es difícil y carísimo.",
    incorrect2: "Solo si vives al lado de la CRE.",
    feedback:
      "La carga domiciliaria es común; quienes ya tienen un auto 100% eléctrico lo recargan en casa.",
  },
  {
    _id: "14",
    question:
      "¿Dejar cargando todas las noches un auto 100% eléctrico lo arruina?",
    correct:
      "No; el BMS gestiona. Mejor 20 a 80% a diario y 100% cuando lo necesites.",
    incorrect1: "Sí, se malcría.",
    incorrect2: "Solo si sueña con enchufes.",
    feedback: "Evitar extremos frecuentes alarga la vida útil.",
  },
  {
    _id: "15",
    question: "¿Es peligroso manejar un auto 100% eléctrico bajo la lluvia?",
    correct: "No; sistemas sellados y seguros bajo lluvia.",
    incorrect1: "Sí, te puede electrocutar.",
    incorrect2: "Solo si desconectas la batería.",
    feedback: "Tienen protecciones e índices de sellado para agua.",
  },
  {
    _id: "16",
    question:
      "Si la batería de un auto 100% eléctrico llega a 0%, ¿me quedo sin frenos en la bajada?",
    correct: "No; los frenos hidráulicos funcionan normal.",
    incorrect1: "Sí, solo frena el motor.",
    incorrect2: "Solo frena si pisas dos veces.",
    feedback:
      "La regeneración ayuda, pero el sistema de frenos es convencional.",
  },
  {
    _id: "17",
    question: "¿Cómo responde un auto 100% eléctrico en subidas y pendientes?",
    correct: "El par (torque) instantáneo ayuda a subir con solvencia.",
    incorrect1: "Pierde potencia.",
    incorrect2: "Necesita mucho impulso previo.",
    feedback:
      "El motor entrega energía de inmediato: despega con agilidad y trepa cuestas con confianza.",
  },
  {
    _id: "18",
    question:
      "En un auto 100% eléctrico, ¿el aire acondicionado se come toda la batería?",
    correct: "No; consume energía, pero la autonomía sigue siendo útil.",
    incorrect1: "Sí, mejor abanico.",
    incorrect2: "Solo si pones 0 °C.",
    feedback: "HVAC impacta, pero no desaparece la carga.",
  },
  {
    _id: "19",
    question: "¿Cómo es el mantenimiento de un auto 100% eléctrico?",
    correct: "Menos mantenimiento por menos piezas móviles.",
    incorrect1: "Cambio de aceite cada 5.000 km.",
    incorrect2: "Ajuste de carburador semestral.",
    feedback:
      "No hay aceite de motor ni embrague; los frenos duran más por la regeneración.",
  },
  {
    _id: "20",
    question:
      "¿Cuál es la autonomía típica de los autos 100% eléctricos modernos?",
    correct: "150 a 600 km según modelo y uso.",
    incorrect1: "40 a 60 km máximo.",
    incorrect2: "Igual que un camión diésel.",
    feedback: "Varía por batería, conducción y clima; sobra para el día a día.",
  },
  {
    _id: "21",
    question:
      "¿Puedo cargar un auto 100% eléctrico con paneles solares en casa?",
    correct: "Sí, con sistema FV adecuado y cargador; complementa la red.",
    incorrect1: "No, el sol no alcanza.",
    incorrect2: "Solo en el desierto.",
    feedback: "Los paneles aportan energía limpia y reducen costos.",
  },
  {
    _id: "22",
    question:
      "¿Los autos 100% eléctricos se incendian más que los a combustión?",
    correct: "No; el riesgo no es mayor.",
    incorrect1: "Sí, siempre.",
    incorrect2: "Siempre arden al chocar.",
    feedback: "El riesgo existe en todo vehículo; no es intrínsecamente mayor.",
  },
  {
    _id: "23",
    question:
      "¿Qué hábito de carga cuida mejor la batería de un auto 100% eléctrico?",
    correct: "Usar rangos moderados (p. ej., 20 a 80%).",
    incorrect1: "Mantenerla al 100% siempre.",
    incorrect2: "Descargar a 0% cada semana.",
    feedback: "Evitar extremos frecuentes prolonga la vida útil.",
  },
  {
    _id: "24",
    question: "¿Se puede viajar por carretera con un auto 100% eléctrico?",
    correct: "Sí, con planificación y paradas para recargar.",
    incorrect1: "Es imposible.",
    incorrect2: "Solo con un generador a bordo.",
    feedback: "Planificando rutas y paradas rápidas se viaja sin problema.",
  },
  {
    _id: "25",
    question: "¿Puedes cargar un auto 100% eléctrico cuando está lloviendo?",
    correct: "Sí, sin ningún problema ni riesgo.",
    incorrect1: "No, porque te puedes electrocutar.",
    incorrect2:
      "Solo si usas botas de goma y guantes con aislante de corriente.",
    feedback:
      "Los autos 100% eléctricos están fabricados para dar la mayor seguridad al conductor y a los pasajeros.",
  },
];
