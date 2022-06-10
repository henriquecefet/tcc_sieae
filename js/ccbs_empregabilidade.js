 var app = new Vue({
            el: '#main',
            data: {
             graficos: {
              UNIRIO: {
                CCBS: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Empregabilidade do CCBS por curso",
                    numeros: [
                      43.02,
                      34.13,
                      41.81,
                      61.44,
                      44.28,
                      53.66,
                      40.91,
                      67.75,
                      53.37,
                      50.10,
                      31.82


                    ],
                    categorias: [
                    "Biologia",
                    "Biomedicina ",
                    "Ciências Ambientais",
                    "Ciências Biológicas Modalidade Médica",
                    "Ciências Biológicas - Bacharelado",
                    "Ciências Biológicas - Licenciatura ",
                    "Ciências da Natureza",
                    "Enfermagem",
                    "Medicina",
                    "Nutrição - Turno Integral",
                    "Nutrição - Turno Noturno"

                    ]
                  },

                  grafico2: {
                    id: "grafico2",
                    titulo: "Renda Média do CCBS por curso",
                    numeros: [
                        2800.00,
                        4600.90,
                        3534.22,
                        8392.07,
                        5252.49,
                        4982.97,
                        3723.70,
                        5472.88,
                        8496.03,
                        4998.08,
                        3997.90


                    ],
                    categorias: [
                    "Biologia",
                    "Biomedicina ",
                    "Ciências Ambientais",
                    "Ciências Biológicas Modalidade Médica",
                    "Ciências Biológicas - Bacharelado",
                    "Ciências Biológicas - Licenciatura ",
                    "Ciências da Natureza",
                    "Enfermagem",
                    "Medicina",
                    "Nutrição - Turno Integral",
                    "Nutrição - Turno Noturno"

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
