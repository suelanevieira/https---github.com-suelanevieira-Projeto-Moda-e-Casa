 import repoCostureira from "../repositories/repository.costureira.js";
 
 
 async function Listar(name){
    
    const costureiras = await repoCostureira.Listar(name);


    return costureiras;

}

async function Inserir(name, specialty, icon){
    
    const costureira = await repoCostureira.Inserir(name, specialty, icon);


    return costureira; 

}

async function Editar(id_costureira, name, specialty, icon){
    
    const costureira = await repoCostureira.Editar(id_costureira, name, specialty, icon);


    return costureira; 

}

async function Excluir(id_costureira){
    
    const costureira = await repoCostureira.Excluir(id_costureira);


    return costureira; 

}

async function ListarServicos(id_costureira){
    
    const serv = await repoCostureira.ListarServicos(id_costureira);


    return serv;

}


export default { Listar, Inserir, Editar, Excluir, ListarServicos }