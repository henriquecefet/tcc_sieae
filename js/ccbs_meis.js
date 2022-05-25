 var app = new Vue({
            el: '#main',
            data: {
             graficos: {
              UNIRIO: {
                CCBS: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Proporção de egressos do CCBS que são MEIs",
                    numeros: [1.39, 98.61],
                    categorias: ["MEIs", "Não MEIs"]
                  },
                  grafico2: {
                    id: "grafico2",
                    titulo: "Proporção de egressos do CCBS que são MEIs por curso",
                    numeros: [
                    3.4884,
                    1.1976,
                    0.5650,
                    0.0000,
                    1.1609,
                    1.2195,
                    0.0000,
                    1.7442,
                    1.4143,
                    1.5353,
                    1.5152


                    ],
                    categorias: [
                    "Biologia",
                    "Biomedicina ",
                    "Ciências Ambientais",
                    "Ciências Biológicas -  Hab. Modalidade Médica",
                    "Ciências Biológicas - Bacharelado",
                    "Ciências Biológicas - Licenciatura ",
                    "Ciências da Natureza",
                    "Enfermagem",
                    "Medicina",
                    "Nutrição - Bacharelado - Turno Integral",
                    "Nutrição - Bacharelado - Turno Noturno"

                    ]
                  },
                  grafico3:{
                    id: "grafico3",
                    titulo: "Proporção de egressos do CCBS que são MEIs por gênero",
                    numeros: [1.1938, 1.9126],
                    categorias: [
                      "Feminino",
                      "Masculino",
                      ]
                  },
                 grafico4: {
                  id: "grafico4",
                  titulo: "Quantidade de egressos de pós-graduação que são MEIs por faixa etária",
                  numeros: [
                      2,
                      10,
                      31,
                      44,
                      2,
                      1
                            ],
                  categorias: [
                    "De 18 a 24 anos",
          					"De 25 a 29 anos",
          					"De 30 a 39 anos",
          					"De 40 a 49 anos",
          					"De 50 a 64 anos",
          					"De 65 anos +"
                  ]
                }

               }


              }
             },


             graficoPizza: function(id, numeros, categorias, titulo) {
                var chart = new Chart(id, {
                type: "pie",
                data: {
                  labels: categorias,
                  datasets: [{
                    backgroundColor: this.barColors,
                    data: numeros
                  }]
                },
                options: {
                  title: {
                    display: true,
                    text: titulo
                  }
                }

              });
        },
        graficoBarra: function(id, numeros, categorias, titulo) {
                var chart = new Chart(id, {
                type: "bar",
                data: {
                  labels: categorias,
                  datasets: [{
                    backgroundColor: this.barColors,
                    data: numeros
                  }]
                },
                options: {
                  legend: {display: false},
                  title: {
                    display: true,
                    text: titulo
                  },
                   scales: {
                    xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Programas de pós-graduação'
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5,
                                max: 100
                            }
                        }]
                }
               }
            });
        },
        graficoBarraSemLimite: function(id, numeros, categorias, titulo) {
                var chart = new Chart(id, {
                type: "bar",
                data: {
                  labels: categorias,
                  datasets: [{
                    backgroundColor: this.barColors,
                    data: numeros
                  }]
                },
                options: {
                  legend: {display: false},
                  title: {
                    display: true,
                    text: titulo
                  },
               }
            });
        },
        barColors: [
          "#b91d47",
          "#00aba9",
          "#2b5797",
          "#e8c3b9",
          "#1e7145",
          "#a91d47",
          "#04aba9",
          "#2b57c7",
          "#ecc3b9",
          "#1e7145",
          "#b91647",
          "#00a1a9",
          "#2d5797",
          "#e8c3bf",
          "#1a7145",
          "#b91d77",
          "#08aba9",
          "#ab5797",
          "#e8c3b9",
          "#147145",
          "#b91d4f",
          "#ffaba9",
          "#2b52a7",
          "#e8a3b9",
          "#1e71f5"
        ]


              }
          });
