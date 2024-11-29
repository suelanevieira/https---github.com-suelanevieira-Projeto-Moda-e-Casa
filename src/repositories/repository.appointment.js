import { query } from "../database/sqlite.js";


async function Listar(id_user){
    
   
    let sql = `select  a.id_appointment, s.description as service, c.name as costureira, c.specialty,
             a.booking_date, a.booking_hour, u.name as user, cs.price
 from appointments a 
 join services s on (s.id_service = a.id_service)
 join costureiras c on (c.id_costureira = a.id_costureira)
 join users u on (u.id_user = a.id_user)
 join costureiras_services cs on (cs.id_costureira = a.id_costureira and 
                                 cs.id_service = a.id_service )
 where a.id_user = ?
 order by  a.booking_date, a.booking_hour`;
   

    const  appointments = await query(sql, id_user);

    return appointments;


}
async function Inserir(id_user, id_costureira, id_service, 
    booking_date, booking_hour){
    
   
    let sql = `insert into appointments (id_user, id_costureira, id_service, 
    booking_date, booking_hour) values(?, ?, ?, ?, ? )
    returning id_appointment`;

    const  appointment = await query(sql, [id_user, id_costureira, id_service, 
        booking_date, booking_hour]);

    return appointment[0];

}
async function Excluir(id_user, id_appointment){
    
   
    let sql = `delete from appointments 
    where id_appointment=? and id_user=?`;

    await query(sql, [id_appointment, id_user]);

    return {id_appointment};

}

export default { Listar, Inserir, Excluir };