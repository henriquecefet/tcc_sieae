 var app = new Vue({
            el: '#main',
            data: {
             graficos: {
              UNIRIO: {
                CCH: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Empregabilidade do CCH por curso",
                    numeros: [
                      71.60,
                      62.98,
                      67.40,
                      55.56,
                      13.64,
                      24.24,
                      39.53,
                      30.23,
                      70.17,
                      30.41,
                      49.34,
                      43.59,
                      81.46,
                      75.80,
                      78.88,
                      43.00,
                      61.07
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
                  grafico2: {
                    id: "grafico2",
                    titulo: "Renda Média do CCH por curso",
                    numeros: [
                        5243.85, 
                        4529.60,
                        4833.70,
                        3691.29 ,
                        807.44 ,
                        8669.66 ,
                        3411.92 ,
                        4596.05 ,
                        5156.75 ,
                        2185.61 ,
                        4713.05 ,
                        4242.30 ,
                        3055.29 ,
                        5185.01 ,
                        3679.28 ,
                        3385.35 ,
                        4538.83 ,
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
