
import { query } from "../database/sqlite.js";

async function Listar(name){
    
   
    let filtro = [];

    let sql = "select * from costureiras ";

    if (name){
        sql = sql + "where name like ? "
        filtro.push('%' + name + '%');
    }


    sql = sql + "order by name"

    const  costureiras = await query(sql, filtro);

    return costureiras;

}

async function Inserir(name, specialty, icon){
    
   
    let sql = `insert into costureiras (name, specialty, icon) values(?, ?, ?)
    returning id_costureira`;

    const  costureira = await query(sql, [name, specialty, icon]);

    return costureira[0];

}

async function Editar(name, specialty, icon, id_costureira){

    let sql = `update costureiras set name=?,
                      specialty=?, icon=?
                      where id_costureira = ?`

     await query(sql, [name, specialty, icon, id_costureira]);

    return { id_costureira };                    

}

async function Excluir(id_costureira){

    let sql = `delete from costureiras where id_costureira = ?`;

     await query(sql, [id_costureira]);

    return { id_costureira };                    

}

async function ListarServicos(id_costureira){
    
   let sql = `select c.id_service , s.description, c.price 
from costureiras_services c
join services s on (s.id_service = c.id_service)
where c.id_costureira = ?  
order by s.description`;

    const  serv = await query(sql, [id_costureira]);

    return serv;

}
    
export default { Listar, Inserir, Editar, Excluir, ListarServicos }