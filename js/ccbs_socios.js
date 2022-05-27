 var app = new Vue({
            el: '#main',
            data: {
             graficos: {
              UNIRIO: {
                CCBS: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Proporção de egressos do CCBS que são sócios",
                    numeros: [25.61, 74.18],
                    categorias: ["Sócios", "Não sócios"]
                  },
                  grafico2: {
                    id: "grafico2",
                    titulo: "Proporção de egressos do CCBS que são sócios por curso",
                    numeros: [
                    10.4651,
                    9.5808,
                    5.0847,
                    15.6780,
                    11.6086,
                    11.5854,
                    9.0909,
                    6.9767,
                    52.8286,
                    9.2119,
                    12.1212


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
                    titulo: "Proporção de egressos do CCBS que são sócios por gênero",
                    numeros: [19.1882, 41.8033],
                    categorias: [
                      "Feminino",
                      "Masculino",
                      ]
                  },
                 grafico4: {
                  id: "grafico4",
                  titulo: "Quantidade de egressos de pós-graduação que são sócios por faixa etária",
                  numeros: [
                      3,
                      160,
                      968,
                      494,
                      23,
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
