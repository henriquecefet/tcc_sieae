 var app = new Vue({
            el: '#main',
            data: {
             graficos: {
              UNIRIO: {
                CCET: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Proporção de egressos do CCET que são sócios",
                    numeros: [17.07, 82.92],
                    categorias: ["Sócios", "Não sócios"]
                  },
                  grafico2: {
                    id: "grafico2",
                    titulo: "Proporção de egressos do CCET que são sócios por curso",
                    numeros: [
                    8.9109,
					3.0303,
					10.3960,
					17.5595


                    ],
                    categorias: [
                    "Engenharia de Produção",
          					"Matemática",
          					"Matemática EAD",
          					"Sistemas de Informação"


                    ]
                  },
                  grafico3:{
                    id: "grafico3",
                    titulo: "Proporção de egressos do CCET que são sócios por gênero",
                    numeros: [10, 12.26],
                    categorias: [
                      "Feminino",
                      "Masculino",
                      ]
                  },
                   grafico4: {
                	id: "grafico4",
                	titulo: "Proporção de egressos do CCET  que são sócios por gênero por categoira de curso",
                	numeros: [11.22, 14.22],
                	categorias: [
                		"Graduação EAD",
                		"Graduação Presencial"
                	]
                },
                 grafico5: {
                  id: "grafico5",
                  titulo: "Quantidade de egressos de pós-graduação que são sócios por faixa etária",
                  numeros: [
                            0,
							7,
							65,
							14,
							3,
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
