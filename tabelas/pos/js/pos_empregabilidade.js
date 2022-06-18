 var app = new Vue({
            el: '#main',
            data: {
             graficos: {
              UNIRIO: {
                posgraduacao: {
                  grafico1: {
                    id: "grafico1",
                    titulo: "Empregabilidade de egressos de pós-graduação por programa",
                    numeros: [
                    96.15,
                    91.49,
                    88.46,
                    88.41,
                    85.71,
                    83.76,
                    78.63,
                    77.91,
                    76.84,
                    73.26,
                    73.23,
                    71.85,
                    67.16,
                    66.30,
                    65.24,
                    64.38,
                    62.34,
                    62.20,
                    61.87,
                    61.11,
                    55.93,
                    53.50,
                    46.58,
                    37.78,
                    35.63,
                    33.33


                    ],
                    categorias: [
                    "ENSINO DE FÍSICA - PROFIS",
                    "MATEMÁTICA EM REDE NACIONAL",
                    "ENSINO DE HISTÓRIA",
                    "GESTÃO DE DOCUMENTOS E ARQUIVOS",
                    "ENSINO DE ARTES CÊNICAS",
                    "ENFERMAGEM E BIOCIÊNCIAS",
                    "INFECÇÃO HIV/AIDS E HEPATITES VIRAIS",
                    "INFORMÁTICA",
                    "SAÚDE E TECNOLOGIA NO ESPAÇO HOSPITALAR",
                    "EDUCAÇÃO",
                    "ENFERMAGEM",
                    "BIBLIOTECONOMIA",
                    "MEDICINA",
                    "HISTORIA",
                    "MÚSICA",
                    "ENSINO DAS PRÁTICAS MUSICAIS",
                    "NEUROLOGIA",
                    "DIREITO",
                    "MUSEOLOGIA E PATRIMÖNIO",
                    "ECOTURISMO E CONSERVAÇÃO",
                    "MEMÓRIA SOCIAL",
                    "ARTES CÊNICAS",
                    "ALIMENTOS E NUTRIÇÃO",
                    "BIOLOGIA MOLECULAR E CELULAR",
                    "CIÊNCIAS BIOLÓGICAS",
                    "CIÊNCIA POLÍTICA"


                    ]
                  },
                 grafico2: {
                    id: "grafico2",
                    titulo: "Renda média de egressos de pós-graduação por programa",
                    numeros: [
                       3322.97, 
                       6037.89 ,
                       3818.05 ,
                       8968.23 ,
                       4881.90 ,
                       8356.92 ,
                       8021.99 ,
                       11812.66 ,
                       6948.19 ,
                       5331.12 ,
                       6522.79 ,
                       8970.90 ,
                       8211.25 ,
                       4314.76 ,
                       8503.42 ,
                       5838.37 ,
                       8857.85 ,
                       14094.08 ,
                       8107.85 ,
                       3406.54 ,
                       6594.94 ,
                       6953.07 ,
                       4969.69 ,
                       3509.35 ,
                       2636.69 ,
                       4412.89 


                    ],
                    categorias: [
                    "ENSINO DE FÍSICA - PROFIS",
                    "MATEMÁTICA EM REDE NACIONAL",
                    "ENSINO DE HISTÓRIA",
                    "GESTÃO DE DOCUMENTOS E ARQUIVOS",
                    "ENSINO DE ARTES CÊNICAS",
                    "ENFERMAGEM E BIOCIÊNCIAS",
                    "INFECÇÃO HIV/AIDS E HEPATITES VIRAIS",
                    "INFORMÁTICA",
                    "SAÚDE E TECNOLOGIA NO ESPAÇO HOSPITALAR",
                    "EDUCAÇÃO",
                    "ENFERMAGEM",
                    "BIBLIOTECONOMIA",
                    "MEDICINA",
                    "HISTORIA",
                    "MÚSICA",
                    "ENSINO DAS PRÁTICAS MUSICAIS",
                    "NEUROLOGIA",
                    "DIREITO",
                    "MUSEOLOGIA E PATRIMÖNIO",
                    "ECOTURISMO E CONSERVAÇÃO",
                    "MEMÓRIA SOCIAL",
                    "ARTES CÊNICAS",
                    "ALIMENTOS E NUTRIÇÃO",
                    "BIOLOGIA MOLECULAR E CELULAR",
                    "CIÊNCIAS BIOLÓGICAS",
                    "CIÊNCIA POLÍTICA"


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
          "#1e71f5",
          "#a91d47"
        ]


              }
          });
