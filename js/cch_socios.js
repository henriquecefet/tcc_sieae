 var app = new Vue({
            el: '#main',
            data: {
             graficos: {
              UNIRIO: {
                CCH: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Proporção de egressos do CCH que são sócios",
                    numeros: [8.9, 91.9],
                    categorias: ["Sócios", "Não sócios"]
                  },
                  grafico2: {
                    id: "grafico2",
                    titulo: "Proporção de egressos do CCH que são sócios por curso",
                    numeros: [
                      7.0175,
                      2.3593,
                      6.4457,
                      5.5556,
                      4.5455,
                      24.2424,
                      11.6279,
                      3.4884,
                      13.8122,
                      5.2632,
                      6.4516,
                      7.6923,
                      9.6237,
                      6.2849,
                      15.9483,
                      3.0000,
                      8.7786,
                    ],
                    categorias: [
                      "Arquivologia",
                      "Biblioteconomia - Turno Matutino",
                      "Biblioteconomia - Turno Noturno",
                      "Biblioteconomia - Licenciatura",
                      "Ciências Sociais",
                      "Filosofia - Bacharelado",
                      "Filosofia - Licenciatura",
                      "História - Bacharelado - Turno Matutino",
                      "História - Turno Matutino",
                      "História - Licenciatura",
                      "Museologia - Turno Integral",
                      "Museologia - Turno Noturno",
                      "Pedagogia",
                      "Pedagogia - Licenciatura",
                      "Pedagogia para o Ensino Fundamental",
                      "Serviço Social",
                      "Turismo"


                    ]
                  },
                  grafico3:{
                    id: "grafico3",
                    titulo: "Proporção de egressos do CCH que são sócios por gênero",
                    numeros: [8.1142, 8.8773],
                    categorias: [
                      "Feminino",
                      "Masculino",
                      ]
                  },
                 grafico4: {
                  id: "grafico4",
                  titulo: "Quantidade de egressos do CCH que são sócios por faixa etária",
                  numeros: [
                    3,
                    22,
                    146,
                    133,
                    168,
                    28
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
