import { A } from "solid-start";
import Counter from "~/components/Counter";

import DataTable from "datatables.net";
import 'datatables.net-dt/css/jquery.dataTables.css';
import { createEffect } from "solid-js";

// @ts-ignore
import pairs_nik from "../data/skor_pasangan_nik.csv";

export default function Home() {
  
  createEffect( () => {

    let datax : any[] = [];
    pairs_nik.forEach((e:any) => {
      if(e.proba<99){
        datax.push({
            id: e.id,
            blok_pes: e.blok_pes,
            nik_pes: e.nik_pes,
            nama_pes: e.nama_pes,
            nama_krt_pes: e.nama_krt_pes,
            jk_pes: e.jk_pes,
            umur_pes: e.umur_pes,
            blok_sp: e.blok_sp,
            nik_sp: e.nik_sp,
            nama_sp: e.nama_sp,
            nama_krt_sp: e.nama_krt_sp,
            jk_sp: e.jk_sp,
            umur_sp: e.umur_sp,
            label: e.label,
            pred: e.pred,
            proba: (e.proba*100).toFixed(2),
            conf: e.conf,
            exact: e.exact,
            skor : {
              nik_pes : e.nik_pes,
              nik_sp : e.nik_sp,
              blok_pes : e.blok_pes,
              blok_sp : e.blok_sp,
              proba : e.proba,
            }
          })
      }

    })

    let table = new DataTable('#dt', {
      // options
      retrieve: true,
      paging: true,
      data: datax,    
      columns: [
        { title : "Wilayah Regsosek", data: "blok_pes", className : "bg-green-100" },
        { title : "NIK Regsosek", data: "nik_pes" , className : "bg-orange-100"},
        { title : "Nama Regsosek", data: "nama_pes" },
        { title : "Nama KK Regsosek", data: "nama_krt_pes" },
        { title : "Jenis Kelamin Regsosek", data: "jk_pes" },
        { title : "Umur Regsosek", data: "umur_pes" },
        { title : "Wilayah DTKS", data: "blok_sp" , className : "bg-green-100"},
        { title : "NIK DTKS", data: "nik_sp" , className : "bg-orange-100"},
        { title : "Nama DTKS", data: "nama_sp" },
        { title : "Nama KK DTKS", data: "nama_krt_sp" },
        { title : "Jenis Kelamin DTKS", data: "jk_sp" },
        { title : "Umur DTKS", data: "umur_sp" },
        { title : "Score Kemiripan", data: "proba", className : "bg-orange-100" , render: function (data, type, row, meta) { 
            if(data>=99){
              return '<span class="bg-green-500 text-white px-4 rounded-full font-light">'+data+'</span>'
            }
            else{
              return '<span class="bg-red-500 text-white px-4 rounded-full font-light">'+data+'</span>'
            }
             
          }},
      ],
    });
    
  })
  
  return (
    <>
      
      <main class="text-center mx-auto text-gray-700 py-4 px-8">

        {/* Deduplikasi */}
        <div class="text-left mb-4">
          Pilih Survey
          {/* <Select {...props} class="w-1/5  text-left" placeholder=""/> */}
        </div>
        <table id="dt" class="display "></table>
      </main>
    </>
  );
}
