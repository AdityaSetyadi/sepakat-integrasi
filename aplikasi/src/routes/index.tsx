import { createEffect } from "solid-js";
import Chart from 'chart.js/auto';

export default function Home() {
  
  createEffect( () => {
    

    //DUPLIKASI
      const labelDuplikasi = [
        'Regsosek',
        'DTKS',
        'P3KE',
      ];        

      const dataDuplikasi = {
        labels: labelDuplikasi,
        datasets: [
          {
            label: 'Data Tunggal',
            data: [120,220,192],
            backgroundColor: 'WhiteSmoke'
          },
          {
            label: 'Data Duplikat',
            data: [17,43,29],
            backgroundColor: 'deeppink'
          },
        ]
      };

      const duplikasiCanvas = document.querySelector("#duplikasiCanvas") as HTMLCanvasElement;
      new Chart(
        duplikasiCanvas,
        {
          type: 'bar',
          data: dataDuplikasi,
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Perbandingan Deduplikasi antar Data'
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            }
          }
        }
      );
      

    //NIK PROBLEMATIK
      const labelNikProblematik = [
        'Regsosek',
        'DTKS',
        'P3KE',
      ];        

      const dataNikProblematik = {
        labels: labelNikProblematik,
        datasets: [
          {
            label: 'NIK Valid',
            data: [120,220,192],
            backgroundColor: 'WhiteSmoke'
          },
          {
            label: 'NIK Bermasalah',
            data: [25,19,39],
            backgroundColor: 'deeppink'
          },
        ]
      };

      const nikProblematikCanvas = document.querySelector("#nikProblematikCanvas") as HTMLCanvasElement;
      new Chart(
        nikProblematikCanvas,
        {
          type: 'bar',
          data: dataNikProblematik,
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Perbandingan NIK bermasalah antar Data'
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            }
          }
        }
      );
      
  //LINKAGE PROBABILITY
    const labelLinkageProbability = [
      'Jumlah Linkage',
      'Hanya di Regsosek',
      'Hanya di DTKS',
      'Hanya di P3KE',
    ];        

    const dataLinkageProbability = {
      labels: labelLinkageProbability,
      datasets: [
        {
          label: 'NIK Valid',
          data: [120,20,12,21],
          backgroundColor: ['WhiteSmoke','deeppink', 'indigo', 'Snow', ]
        }
      ]
    };

    const LinkageProbabilityCanvas = document.querySelector("#linkageProbCanvas") as HTMLCanvasElement;
    new Chart(
      LinkageProbabilityCanvas,
      {
        type: 'doughnut',
        data: dataLinkageProbability,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Linkage Probalistic'
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          }
        }
      }
    );

  })
  
  return (
    <>
      <main class="">

        <div class="w-full grid grid-cols-2 " >
          <div class="w-full grid grid-rows-2 " >
            <canvas id="duplikasiCanvas" class="w-full h-full p-12 " />
            <canvas id="nikProblematikCanvas" class="w-full h-full p-12 " />
          </div>
          <canvas id="linkageProbCanvas" class="w-full h-full p-12 " />
        </div>

      </main>
    </>
  );
}
