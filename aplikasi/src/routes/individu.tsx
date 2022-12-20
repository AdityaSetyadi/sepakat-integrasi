import { A } from "solid-start";
import Counter from "~/components/Counter";
import $ from "jquery";

import DataTable from "datatables.net";
import 'datatables.net-dt/css/jquery.dataTables.css';
import { createEffect, createSignal, Show } from "solid-js";

// @ts-ignore
import raw_individu from "../data/raw_data_individu.csv";

export default function Home() {
  
  const [modalSesuai, setModalSesuai] = createSignal(false);
  const  format = (d:any) => {
    // `d` is the original data object for the row
    let txt = d.nama_sugesti.split('[')[0];
    if(txt === ''){
        txt = 'Tidak Ditemukan';
    }
    return (
        '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Rekomendasi Individu:</td>' +
        '<td>' +
        txt +
        '</td>' +
        '</tr>' +
        '</table>'
    );
  }
  

  createEffect( () => {

    let datax : any[] = [];
    raw_individu.forEach((e:any) => {
        datax.push({
          blok: e.blok,
          id_ruta: e.id_ruta,
          id_art: e.id_art,
          no_kk: e.no_kk,
          nik: e.nik,
          nama: e.nama,
          nama_krt: e.nama_krt,
          jk: e.jk,
          umur: e.umur,
          sumber: e.sumber,
        })
      

    })

    let table = new DataTable('#dt', {
      // options
      retrieve: true,
      paging: true,
      data: datax,  
      columns: [
        { title: "Blok", data : "blok" },
        { title: "ID Ruta", data : "id_ruta" },
        { title: "ID ART", data : "id_art" },
        { title: "Nomor KK", data : "no_kk" },
        { title: "NIK", data : "nik" },
        { title: "Nama", data : "nama" },
        { title: "Nama KRT", data : "nama_krt" },
        { title: "Jenis Kelamin", data : "jk" },
        { title: "Umur", data : "umur" },
        { title : "Sumber", data: "sumber", render: function (data, type, row, meta) { 
            if(data==1){
              return '<span class="bg-teal-600 text-white px-4 py-1 rounded-full font-light">Regsosek</span>'
            }
            else{
              return '<span class="bg-orange-500 text-white px-4 py-1 rounded-full font-light">DTKS</span>'
            }
             
          }
        },
      ],
      dom: '<"px-6"<"top"Qfrtip>>rt',
    });
    
    $('#dt tbody').on('click', 'td.dt-control', function () {
      var tr = $(this).closest('tr');
      var row = table.row(tr);

      if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
      } else {
          // Open this row
          // @ts-ignore
          row.child(format(row.data())).show();
          tr.addClass('shown');
      }
  });
    
  })

  return (
    <>
      
      <main class="text-center mx-auto text-gray-700 ">
        
        <div class="py-6">
          <table id="dt" class="display px-8 pb-8 pt-2 w-screen"></table>
        </div>
      </main>
    </>
  );
}
