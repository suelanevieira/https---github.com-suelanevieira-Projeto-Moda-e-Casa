import serviceCostureira from "../services/service.costureira.js";

 async function Listar(req, res){


      const name = req.query.name;
      const costureiras = await serviceCostureira.Listar(name);

    res.status(200).json(costureiras);

}

async function Inserir(req, res){


 /* const name = req.body.name;
  const specialty = req.body.specialty;
  const icon = req.body.icon; */

  const {name, specialty, icon} = req.body;

  const costureira = await serviceCostureira.Inserir(name, specialty, icon);

res.status(201).json(costureira);

}

async function Editar(req, res){


   const id_costureira = req.params.id_costureira; 
   const {name, specialty, icon} = req.body;
 
   const costureira = await serviceCostureira.Editar(id_costureira, name, specialty, icon);
 
 res.status(200).json(costureira);
 
 }

 async function Excluir(req, res){


  const id_costureira = req.params.id_costureira; 
  

  const costureira = await serviceCostureira.Excluir(id_costureira);

res.status(200).json(costureira);

}

async function ListarServicos(req, res){


  const id_costureira = req.params.id_costureira;
  const serv = await serviceCostureira.ListarServicos(id_costureira);

res.status(200).json(serv);

}


export default { Listar, Inserir, Editar, Excluir, ListarServicos } 