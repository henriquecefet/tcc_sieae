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
                      41.86,
                      38.44,
                      47.46,
                      49.58,
                      44.26,
                      49.54,
                      54.55,
                      58.74,
                      48.64,
                      44.57,
                      33.33,


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
