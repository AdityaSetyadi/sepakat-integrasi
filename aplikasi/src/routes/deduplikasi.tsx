import { A } from "solid-start";
import Counter from "~/components/Counter";
import $ from "jquery";

import DataTable from "datatables.net";
import 'datatables.net-dt/css/jquery.dataTables.css';
import { createEffect, createSignal, Show } from "solid-js";

// @ts-ignore
import pairs_nik from "../data/data_deduplikasi.csv";

export default function Home() {
  
  var datas = pairs_nik;
  createEffect( () => {

    let datax : any[] = [];
    pairs_nik.forEach((e:any) => {
      if(e._score>=15){
      let nama_pes_ = e.base_source_ent.split('[COL]')[1].split('[VAL]')[1];
      let nama_krt_pes_ = e.base_source_ent.split('[COL]')[2].split('[VAL]')[1];
      let umur_pes_ = e.base_source_ent.split('[COL]')[3].split('[VAL]')[1];
      let jenis_kelamin_pes_ = e.base_source_ent.split('[COL]')[4].split('[VAL]')[1];

      let nama_sp_ = e._source_ent.split('[COL]')[1].split('[VAL]')[1];
      let nama_krt_sp_ = e._source_ent.split('[COL]')[2].split('[VAL]')[1];
      let umur_sp_ = e._source_ent.split('[COL]')[3].split('[VAL]')[1];
      let jenis_kelamin_sp_ = e._source_ent.split('[COL]')[4].split('[VAL]')[1];

        datax.push({
            nik_pes: e.base_source_NIK,
            nik_sp: e._source_NIK,
            id_pes: e.base_id,
            id_sp: e._id,
            nama_pes: nama_pes_,
            nama_krt_pes: nama_krt_pes_,
            jk_pes: jenis_kelamin_pes_,
            umur_pes: umur_pes_,
            nama_sp: nama_sp_,
            nama_krt_sp: nama_krt_sp_,
            jk_sp: jenis_kelamin_sp_,
            umur_sp: umur_sp_,
            proba: (e.proba*100).toFixed(2),
          })
      }
      
    })
    let table = new DataTable('#dt', {
      retrieve: true,
      paging: true,
      data: datax,
      columnDefs : [
        {width : "6%", target : 0},
        {width : "6%", target : 1},
        {width : "12%", target : 2},
        {width : "11%", target : 3},
        {width : "6%", target : 4},
        {width : "6%", target : 5},
        {width : "6%", target : 6},
        {width : "6%", target : 7},
        {width : "12%", target : 8},
        {width : "11%", target : 9},
        {width : "6%", target : 10},
        {width : "6%", target : 11},
        {width : "6%", target : 12},
      ],    
      columns: [
        { title : "ID Regsosek", data: "id_pes", className : "bg-green-100" },
        { title : "NIK Regsosek", data: "nik_pes" },
        { title : "Nama Regsosek", data: "nama_pes" },
        { title : "Nama KK Regsosek", data: "nama_krt_pes" },
        { title : "Jenis Kelamin Regsosek", data: "jk_pes" },
        { title : "Umur Regsosek", data: "umur_pes" },
        { title : "ID DTKS", data: "id_sp", className : "bg-green-100" },
        { title : "NIK DTKS", data: "nik_sp" },
        { title : "Nama DTKS", data: "nama_sp" },
        { title : "Nama KK DTKS", data: "nama_krt_sp" },
        { title : "Jenis Kelamin DTKS", data: "jk_sp" },
        { title : "Umur DTKS", data: "umur_sp" },
        { title : "Score Kemiripan", data: "proba", className : "bg-orange-100" , render: function (data, type, row, meta) { 
            if(data>=80){
              return '<span class="bg-green-500 text-white px-4 rounded-full font-light">'+data+' % </span>'
            }
            else{
              return '<span class="bg-red-500 text-white px-4 rounded-full font-light">'+data+' % </span>'
            }
             
          }},
      ],
      dom: '<"px-6"<"top"Qfrtip>>rt',
    });
  })
  
  return (
    <>
      
      <main class="text-center mx-auto text-gray-700 py-4 px-8">

        {/* linkage */}
        <table id="dt" class="display px-8 pb-8 pt-2 w-screen"></table>
      </main>
    </>
  );
}
