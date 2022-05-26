 var app = new Vue({
            el: '#main',
            data: {
             graficos: {
              UNIRIO: {
                CLA: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Proporção de egressos do CLA que são sócios",
                    numeros: [16.60, 83.40],
                    categorias: ["Sócios", "Não sócios"]
                  },
                  grafico2: {
                    id: "grafico2",
                    titulo: "Proporção de egressos do CLA que são sócios por curso",
                    numeros: [
                      24.9117,
                      7.3171,
                      7.1429,
                      9.0909,
                      30.2326,
                      16.7883,
                      0.0000,
                      4.7619,
                      5.5556,
                      16.5468,
                      7.5163,
                      14.6497


                    ],
                    categorias: [
                      "Artes Cênicas",
                      "Atuação Cênica - Bacharelado ",
                      "Cenografia e Indumentária ",
                      "Direção Teatral - Bacharelado",
                      "Educação Artística - Artes Cênicas",
                      "Educação Artística - Música",
                      "Estética e Teoria do Teatro",
                      "Letras - Bacharelado",
                      "Letras - Licenciatura",
                      "Música",
                      "Música - Licenciatura ",
                      "Teatro - Licenciatura (V/N)"

                    ]
                  },
                  grafico3:{
                    id: "grafico3",
                    titulo: "Proporção de egressos do CLA que são sócios por gênero",
                    numeros: [15.5983, 17.5351],
                    categorias: [
                      "Feminino",
                      "Masculino",
                      ]
                  },
                 grafico4: {
                  id: "grafico4",
                  titulo: "Quantidade de egressos do CLA que são sócios por faixa etária",
                  numeros: [
                    0,
                    13,
                    136,
                    124,
                    46,
                    2

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
