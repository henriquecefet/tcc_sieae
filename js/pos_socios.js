 var app = new Vue({
            el: '#main',             
            data: {
             graficos: {
              UNIRIO: {
                posgraduacao: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Proporção de egressos de pós-graduação que são sócios",
                    numeros: [684, 2306],
                    categorias: ["Sócios", "Não sócios"]
                  },
                  grafico2: {
                    id: "grafico2",
                    titulo: "Proporção de egressos de pós-graduação que são sócios por programa",
                    numeros: [
                    89.5522,
          					57.4194,
          					48.7179,
          					30.0578,
          					25.6098,
          					24.0000,
          					22.9167,
          					20.5479,
          					19.6429,
          					18.2796,
          					17.8947,
          					16.6667,
          					16.5468,
          					15.3846,
          					15.3846,
          					13.9831,
          					12.6263,
          					12.1547,
          					11.5385,
          					11.1111,
          					10.6383,
          					9.4595,
          					8.0460,
          					7.2464,
          					6.6176,


                    ],
                    categorias: [
                    "MEDICINA",
          					"NEUROLOGIA",
          					"INFECÇÃO HIV/AIDS",
          					"INFORMÁTICA",
          					"DIREITO",
          					"ARTES CÊNICAS",
          					"ENFERMAGEM E BIOCIÊNCIAS",
          					"ENSINO DAS PRÁTICAS MUSICAIS",
          					"ENSINO DE ARTES CÊNICAS",
          					"MÚSICA",
          					"SAÚDE E TECNOLOGIA NO ESPAÇO HOSPITALAR",
          					"ECOTURISMO E CONSERVAÇÃO",
          					"MUSEOLOGIA E PATRIMÖNIO",
          					"EDUCAÇÃO",
          					"ENSINO DE HISTÓRIA",
          					"MEMÓRIA SOCIAL",
          					"ENFERMAGEM",
          					"HISTORIA",
          					"ENSINO DE FÍSICA - PROFIS",
          					"BIOLOGIA MOLECULAR E CELULAR",
          					"MATEMÁTICA EM REDE NACIONAL",
          					"ALIMENTOS E NUTRIÇÃO",
          					"CIÊNCIAS BIOLÓGICAS",
          					"GESTÃO DE DOCUMENTOS E ARQUIVOS",
          					"BIBLIOTECONOMIA",


                    ]
                  },
                  grafico3:{
                    id: "grafico3",
                    titulo: "Proporção de egressos de pós-graduação que são sócios por grau acadêmmico",
                    numeros: [22.9167, 13.3949, 30.0948, 21.6450],
                    categorias: [
                      "DOUTORADO",
                      "MESTRADO",
                      "MESTRADO PROFISSIONAL",
                      "MESTRADO/DOUTORADO"
                      ]
                  },
                   grafico4: {
                	id: "grafico4",
                	titulo: "Proporção de egressos de pós-graduação que viraram sócios após se titularem",
                	numeros: [76, 608],
                	categorias: [
                		"Após se titulares",
                		"Antes de se titulares"
                	]
                },
                 grafico5: {
                  id: "grafico5",
                  titulo: "Quantidade de egressos de pós-graduação que são sócios por faixa etária",
                  numeros: [
                            2,
                            67,
                            156,
                            136,
                            102,
                            68,
                            68,
                            49,
                            21,
                            9,
                            6
                            ],
                  categorias: [
                    "20 A 24 ANOS",
                    "25 A 29 ANOS",
                    "30 A 34 ANOS",
                    "35 A 39 ANOS",
                    "40 A 44 ANOS",
                    "45 A 49 ANOS",
                    "50 A 54 ANOS",
                    "55 A 59 ANOS",
                    "60 A 64 ANOS",
                    "65 A 69 ANOS",
                    "70 OU MAIS"
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
