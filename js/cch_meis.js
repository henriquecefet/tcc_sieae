 var app = new Vue({
            el: '#main',             
            data: {
             graficos: {
              UNIRIO: {
                CCH: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Proporção de egressos do CCH que são MEIs",
                    numeros: [3.14, 96.86],
                    categorias: ["MEIs", "Não MEIs"]
                  },
                  grafico2: {
                    id: "grafico2",
                    titulo: "Proporção de egressos do CCH que são MEIs por curso",
                    numeros: [
                    2.7778,
                    3.9927,
                    4.5455,
                    6.0606,
                    0.0000,
                    1.1628,
                    3.1114
                    ],
                    categorias: [
                    "Arquivologia - Bacharelado - Turno Noturno",
                    "Biblioteconomia - Bacharelado - Turno Matutino",
                    "Ciências Sociais - Licenciatura - Turno Matutino",
                    "Filosofia - Bacharelado - Turno Integral (V/N)",
                    "Filosofia - Licenciatura - Turno Integral (V/N)",
                    "História - Bacharelado - Turno Matutino",
                    "Pedagogia"


                    ]
                  },
                  grafico3:{
                    id: "grafico3",
                    titulo: "Proporção de egressos do CCH que são MEIs por gênero",
                    numeros: [2.9322, 4.0698],
                    categorias: [
                      "Feminino",
                      "Masculino",
                      ]
                  },
                 grafico4: {
                  id: "grafico4",
                  titulo: "Quantidade de egressos do CCH que são MEIs por faixa etária",
                  numeros: [
        						1,
                    7,
                    23,
                    31,
                    22,
                    4
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
                  legend: {display: false},
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
